import React, { useState, useEffect } from 'react';
import axios from 'axios'; // استيراد مكتبة الاتصال
import Navbar from "./Navbar.js";

const LiveRecording = () => {
    // 1. تعريف المتغيرات (State)
    const [isRecording, setIsRecording] = useState(false);
    const [timer, setTimer] = useState(0);
    const [aiData, setAiData] = useState({
        connection: false,
        prediction: "Idle", // الحالة الافتراضية
        confidence: 0,
        is_sick: false
    });

    // 2. دالة الاتصال بالباك إند (بتشتغل لما isRecording يبقى True)
    useEffect(() => {
        let interval = null;

        if (isRecording) {
            interval = setInterval(async () => {
                try {
                    // نكلم البايثون
                    const res = await axios.get('http://127.0.0.1:8000/api/status');
                    setAiData(res.data);
                } catch (error) {
                    console.log("Backend Offline");
                    setAiData(prev => ({ ...prev, connection: false, prediction: "Offline" }));
                }
            }, 1000); // تحديث كل ثانية
        }

        return () => clearInterval(interval);
    }, [isRecording]);

    // 3. دالة العداد (Timer)
    useEffect(() => {
        let timeInterval = null;
        if (isRecording) {
            timeInterval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        } else {
            setTimer(0); // تصفير العداد لما نوقف
            setAiData(prev => ({ ...prev, prediction: "Idle", confidence: 0 })); // تصفير الحالة
        }
        return () => clearInterval(timeInterval);
    }, [isRecording]);

    // تحويل الوقت لـ MM:SS
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // تحديد لون الكبسولة بناءً على الحالة
    const getCapsuleColor = () => {
        if (!isRecording) return '#334D97'; // أزرق (الوضع العادي)
        if (!aiData.connection) return '#6c757d'; // رصاصي (مفيش هاردوير)
        if (aiData.is_sick) return '#dc3545'; // أحمر (خطر)
        return '#28a745'; // أخضر (سليم)
    };

    return (
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
            <Navbar />
            
            <div style={{ backgroundColor: '#EDF4FF', minHeight: '100vh', padding: '80px 0', fontFamily: 'Inter, sans-serif' }}>
                <div className="container" style={{ maxWidth: '1150px' }}>

                    {/* Header Section */}
                    <div className="text-center mb-5" style={{ paddingBottom: '20px' }}>
                        <h1 className="fw-bold mb-3" style={{ color: '#004990', fontSize: '3.5rem', letterSpacing: '-1px' }}>Live Recording Interface</h1>
                        <p className="fw-medium" style={{ color: '#004990', fontSize: '1.4rem', opacity: 0.7 }}>
                            Real-time bowel sound monitoring with AI diagnosis
                        </p>
                    </div>

                    {/* --- 🔥 THE CAPSULE (Dynamic AI Monitor) 🔥 --- */}
                    <div className="mx-auto position-relative" style={{
                        backgroundColor: getCapsuleColor(), // اللون بيتغير هنا
                        transition: 'background-color 0.5s ease', // نعومة في تغيير اللون
                        width: '100%',
                        height: '420px',
                        borderRadius: '210px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '50px',
                        boxShadow: '0 30px 60px rgba(51,77,151,0.2)'
                    }}>
                        {/* Status Label (Top-Left) */}
                        <div className="position-absolute" style={{ top: '60px', left: '140px' }}>
                            <div className="bg-white rounded-pill px-5 py-2 fw-bold text-center" style={{ color: getCapsuleColor(), fontSize: '1.8rem', minWidth: '150px' }}>
                                {aiData.prediction} {/* النص بيتغير هنا */}
                            </div>
                        </div>

                        {/* Clock (Top-Right) */}
                        <div className="position-absolute text-white fw-bold" style={{ top: '60px', right: '140px', fontSize: '3rem', opacity: 0.9 }}>
                            {formatTime(timer)} {/* العداد شغال هنا */}
                        </div>

                        {/* Smooth Deep Sine Wave */}
                        <div style={{ width: '80%', height: '180px', marginTop: '40px' }}>
                            <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
                                <path
                                    d="M0,100 C125,-50 125,250 250,100 C375,-50 375,250 500,100 C625,-50 625,250 750,100 C875,-50 875,250 1000,100"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    // حركة بسيطة للموجة لما نسجل
                                    className={isRecording ? "wave-animation" : ""} 
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Start Button Section */}
                    <div className="mb-5" style={{ paddingLeft: '100px' }}>
                        <button 
                            onClick={() => setIsRecording(!isRecording)} // تشغيل وإيقاف
                            className="btn rounded-4 d-flex align-items-center gap-3 py-3 px-5 text-white fw-bold" 
                            style={{
                                backgroundColor: isRecording ? '#dc3545' : '#334D97', // يقلب أحمر لو شغال
                                fontSize: '1.8rem',
                                border: 'none',
                                boxShadow: '0 15px 30px rgba(51,77,151,0.25)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
                                {isRecording ? (
                                    <rect x="10" y="10" width="20" height="20" fill="white" /> // Square icon for Stop
                                ) : (
                                    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="3" fill="none" /> // Circle icon for Start
                                )}
                            </svg>
                            {isRecording ? "Stop Recording" : "Start Recording"}
                        </button>
                    </div>

                    {/* Status Three Flex Boxes row */}
                    <div className="row g-4 mb-5 px-3">
                        {[
                            { label: 'Duration', val: `Session: ${formatTime(timer)}` },
                            { label: 'AI Status', val: aiData.connection ? "Connected 🟢" : "Disconnected 🔴" },
                            { label: 'Confidence', val: isRecording ? `${aiData.confidence}%` : 'Waiting...' }
                        ].map((item, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="h-100 p-5 rounded-5 text-center shadow-sm" style={{ backgroundColor: '#ADC7FF' }}>
                                    <h3 className="fw-bold mb-3" style={{ color: '#004990', fontSize: '1.8rem' }}>{item.label}</h3>
                                    <p className="fw-bold mb-0" style={{ color: '#004990', fontSize: '1.4rem' }}>{item.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Instructions Card */}
                    <div style={{
                        background: 'linear-gradient(180deg, #ADC7FF 0%, #FFFFFF 100%)',
                        borderRadius: '120px',
                        padding: '80px 100px',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
                        marginTop: '100px'
                    }}>
                        <h1 className="fw-bold mb-5" style={{ color: '#004990', fontSize: '3.5rem' }}>Recording Instructions</h1>
                        <ul className="list-unstyled fw-bold" style={{ color: '#004990', fontSize: '1.4rem', lineHeight: '2.5' }}>
                            <li className="d-flex align-items-baseline gap-4 mb-3">
                                <span style={{ fontSize: '3rem', alignSelf: 'center', lineHeight: 1 }}>•</span>
                                <span>Ensure the smart sensor is properly positioned on your abdomen</span>
                            </li>
                            <li className="d-flex align-items-baseline gap-4 mb-3">
                                <span style={{ fontSize: '3rem', alignSelf: 'center', lineHeight: 1 }}>•</span>
                                <span>Find a quiet environment to minimize background noise</span>
                            </li>
                            <li className="d-flex align-items-baseline gap-4 mb-3">
                                <span style={{ fontSize: '3rem', alignSelf: 'center', lineHeight: 1 }}>•</span>
                                <span>Click "Start Recording" to activate AI Analysis</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            
            {/* FOOTER (نفس الفوتر بتاعك) */}
            <footer style={{ background: "#2d4bb8", padding: "40px" }}>
                <div className="row text-white small">
                    <div className="col-lg-4">
                        <p className="mb-4 fw-bold fs-5">Smart Gut Monitor</p>
                        AI-Driven Bowel Sound Analysis
                    </div>
                </div>
            </footer> 
        </div>
    );
};

export default LiveRecording;