from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import serial
import threading
import time
import torch
import torch.nn as nn
import numpy as np
import librosa

# ==========================================
# 1. إعدادات النظام
# ==========================================
app = FastAPI(title="Smart Gut AI Backend")

# السماح للفرونت إند إنه يكلمنا (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SERIAL_PORT = 'COM3'   # ⚠️ اتأكدي من البورت بتاعك
BAUD_RATE = 115200
SAMPLE_RATE = 4000     # لازم يكون متوافق مع سرعة الـ ESP

# متغيرات بتشيل حالة المريض الحالية (عشان الـ API يقرأ منها)
current_status = {
    "connection": False,
    "prediction": "Waiting...",  # Normal / Abnormal
    "confidence": 0.0,           # نسبة الثقة
    "is_sick": False             # عشان الفرونت يغير اللون
}

# ==========================================
# 2. تعريف الموديل (🔥 AI BRAIN STRUCTURE)
# ==========================================
# هام جداً: لازم الكلاس ده يكون نسخة طبق الأصل من اللي في Colab
class CNN_MFCC(nn.Module):
    def __init__(self, num_classes=2):
        super(CNN_MFCC, self).__init__()
        # ⚠️ انسخي الطبقات بتاعتك هنا
        self.features = nn.Sequential(
            nn.Conv2d(1, 32, 3, padding=1), nn.BatchNorm2d(32), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 3, padding=1), nn.BatchNorm2d(64), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(64, 128, 3, padding=1), nn.BatchNorm2d(128), nn.ReLU(), nn.MaxPool2d(2),
        )
        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d((1, 1)), nn.Flatten(),
            nn.Dropout(0.5),
            nn.Linear(128, num_classes)
        )

    def forward(self, x):
        x = self.features(x)
        x = self.classifier(x)
        return x

# ==========================================
# 3. تحميل الموديل (🔥 WAKING UP THE BRAIN)
# ==========================================
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = CNN_MFCC(num_classes=2).to(device)

try:
    # حاولي تنزلي ملف الأوزان وتحطيه جنب الكود
    model.load_state_dict(torch.load('smart_gut_crnn.pth', map_location=device))
    model.eval() # وضع الاختبار (مهم جداً)
    print("✅ AI Model Loaded Successfully!")
except Exception as e:
    print(f"⚠️ Warning: Model not found. Running in Demo Mode. Error: {e}")

# ==========================================
# 4. دالة المعالجة (🔥 PREPROCESSING)
# ==========================================
def preprocess_audio(raw_data):
    # تحويل الأرقام لمصفوفة
    y = np.array(raw_data, dtype=np.float32)
    
    # تطبيع الصوت (Normalization)
    if np.max(np.abs(y)) > 0:
        y = y / np.max(np.abs(y))
        
    # تحويل لـ MFCC (نفس طريقة Colab)
    mfcc = librosa.feature.mfcc(y=y, sr=SAMPLE_RATE, n_mfcc=40)
    
    # تظبيط الأبعاد عشان تدخل الموديل (Batch, Channel, Height, Width)
    mfcc_tensor = torch.tensor(mfcc).unsqueeze(0).unsqueeze(0).to(device)
    return mfcc_tensor

# ==========================================
# 5. حلقة الهاردوير (The Engine)
# ==========================================
def background_loop():
    global current_status
    buffer = []
    frames_needed = int(SAMPLE_RATE * 2.0) # تحليل كل 2 ثانية

    while True:
        try:
            esp = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=0.1)
            current_status["connection"] = True
            
            while True:
                if esp.in_waiting > 0:
                    try:
                        line = esp.readline().decode('utf-8').strip()
                        if line.isdigit():
                            buffer.append(int(line))
                            
                            # أول ما نجمع مقطع كامل.. شغل الـ AI
                            if len(buffer) >= frames_needed:
                                # 1. تجهيز الداتا
                                input_tensor = preprocess_audio(buffer)
                                
                                # 2. 🔥 لحظة التوقع (AI INFERENCE) 🔥
                                with torch.no_grad():
                                    output = model(input_tensor)
                                    probs = torch.nn.functional.softmax(output, dim=1)
                                    
                                    # افترضنا إن الكلاس رقم 1 هو "مريض"
                                    sick_prob = probs[0][1].item() 
                                
                                # 3. تحديث الحالة بناءً على النتيجة
                                if sick_prob > 0.5:
                                    current_status["prediction"] = "Abnormal Sound Detected"
                                    current_status["is_sick"] = True
                                    current_status["confidence"] = round(sick_prob * 100, 1)
                                else:
                                    current_status["prediction"] = "Normal / Silence"
                                    current_status["is_sick"] = False
                                    current_status["confidence"] = round((1 - sick_prob) * 100, 1)
                                
                                # تفريغ السلة
                                buffer = []
                                
                    except ValueError:
                        pass
                
        except serial.SerialException:
            current_status["connection"] = False
            current_status["prediction"] = "Sensor Disconnected"
            time.sleep(2) # حاول تاني بعد ثانيتين

# تشغيل الهاردوير في الخلفية
thread = threading.Thread(target=background_loop, daemon=True)
thread.start()

# ==========================================
# 6. بوابة الـ API (للفرونت إند)
# ==========================================
@app.get("/api/status")
def get_status():
    return current_status

# التشغيل: uvicorn main:app --reload