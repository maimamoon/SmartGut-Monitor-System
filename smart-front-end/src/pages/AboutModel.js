import React from 'react';
import anatomyImage from './assets/anatomy_digestive_blue.png';
import Navbar from "./Navbar.js";

const AboutModel = () => {
    // Thick, Multi-layered hand-drawn scribble for titles
    const SuperThickScribble = () => (
        <div className="d-flex justify-content-center" style={{ marginTop: '-15px', marginBottom: '40px' }}>
            <svg width="250" height="40" viewBox="0 0 250 40" fill="none">
                {/* Multiple overlapping paths to create that manual marker feel */}
                <path d="M10,20 Q40,10 80,25 T150,15 T240,20" stroke="#004990" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
                <path d="M15,25 Q50,15 90,30 T160,20 T235,25" stroke="#004990" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                <path d="M5,15 Q35,5 75,20 T145,10 T245,15" stroke="#004990" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                <path d="M20,10 C60,5 110,15 160,10 C210,15 240,5 245,10" stroke="#004990" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            </svg>
        </div>
    );

    // Exact Sketchy Circle Component from the reference image
    const PreciseSketchyCircle = ({ num }) => (
        <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '400px', height: '350px' }}>
            <svg className="position-absolute" width="100%" height="100%" viewBox="0 0 400 350" preserveAspectRatio="xMidYMid meet">
                {/* Main large wobbly oval */}
                <path d="M80,175 C80,95 130,65 200,65 C270,65 320,95 320,175 C320,255 270,285 200,285 C130,285 80,255 80,175"
                    fill="white" stroke="#6366F1" strokeWidth="2" strokeDasharray="10,6" opacity="0.25" />
                <path d="M90,170 C90,105 135,75 200,75 C265,75 310,105 310,170 C310,235 265,265 200,265 C135,265 90,235 90,170"
                    fill="none" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" opacity="0.45" />

                {/* Sparkle/Star Decoration Top Left */}
                <g transform="translate(65, 80)">
                    <path d="M0,20 L40,20 M20,0 L20,40 M5,5 L35,35 M35,5 L5,35" stroke="#6366F1" strokeWidth="2.5" opacity="0.8" />
                </g>

                {/* Small floating diamond Top Right */}
                <rect x="310" y="70" width="15" height="15" stroke="#6366F1" fill="none" strokeWidth="2.5" transform="rotate(20, 317, 77)" />

                {/* The Three Curvy Loops Bottom Right */}
                <g transform="translate(290, 240) scale(1.5)">
                    <path d="M0,0 C5,10 15,5 20,10 C25,15 15,25 30,20 C45,15 35,5 50,10" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
                    <path d="M5,12 C12,18 20,12 25,18" fill="none" stroke="#6366F1" strokeWidth="1" opacity="0.4" />
                </g>
            </svg>
            <span style={{ fontSize: '10rem', fontWeight: '800', color: '#6366F1', zIndex: 1, fontFamily: 'Outfit, sans-serif' }}>{num}</span>
        </div>
    );

    return (
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
              <Navbar />
        <div style={{ backgroundColor: '#D4E6FF', minHeight: '100vh', padding: '0', fontFamily: 'Inter, sans-serif' }}>

            {/* HEADER SECTION */}
            <div className="py-5" style={{ backgroundColor: '#D4E6FF' }}>
                <div className="container py-4 text-center">
                    <h1 className="fw-bold mb-0" style={{ color: '#004990', fontSize: '3.5rem', fontFamily: 'Outfit, sans-serif' }}>About Model</h1>
                    <SuperThickScribble />

                    <div className="d-flex justify-content-center my-5">
                        <div style={{
                            width: '1027px',
                            height: '578px',
                            backgroundColor: '#fff',
                            padding: '12px',
                            borderRadius: '1080px',
                            boxShadow: '0 40px 80px rgba(0,73,144,0.2)',
                            overflow: 'hidden',
                            border: '2px solid rgba(0,73,144,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src={anatomyImage}
                                alt="AI Model Human Body"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1080px' }}
                            />
                        </div>
                    </div>

                    <h4 className="mx-auto mt-5" style={{ maxWidth: '900px', color: '#004990', fontWeight: '700', lineHeight: '1.4', fontSize: '1.6rem' }}>
                        Smart Gut Monitor uses an advanced EFUNet (Efficient U-Net) architecture specifically designed for bowel sound analysis and event detection
                    </h4>
                </div>
            </div>

            {/* NUMERICAL FEATURES SECTION */}
            <div className="container py-5">

                {/* Item 1 */}
                <div className="row align-items-center mb-0 g-0">
                    <div className="col-md-6 text-md-end pe-md-5">
                        <h2 className="fw-bold" style={{ color: '#004990', fontSize: '2.8rem', letterSpacing: '-1px' }}>
                            Efficient U-Net Design
                        </h2>
                        <div style={{ height: '6px', width: '320px', backgroundColor: '#6366F1', marginLeft: 'auto', marginTop: '5px', marginBottom: '25px', borderRadius: '3px' }}></div>
                        <p style={{ color: '#004990', fontSize: '1.4rem', fontWeight: '500', opacity: 0.8, maxWidth: '450px', marginLeft: 'auto' }}>
                            Optimized for real-time processing with skip connections preserving spatial information
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
                        <PreciseSketchyCircle num="1" />
                    </div>
                </div>

                {/* Item 2 */}
                <div className="row align-items-center mb-0 g-0 flex-md-row-reverse">
                    <div className="col-md-6 text-md-start ps-md-5">
                        <h2 className="fw-bold" style={{ color: '#004990', fontSize: '2.8rem', letterSpacing: '-1px' }}>
                            Efficient U-Net Design
                        </h2>
                        <div style={{ height: '6px', width: '320px', backgroundColor: '#6366F1', marginRight: 'auto', marginTop: '5px', marginBottom: '25px', borderRadius: '3px' }}></div>
                        <p style={{ color: '#004990', fontSize: '1.4rem', fontWeight: '500', opacity: 0.8, maxWidth: '450px', marginRight: 'auto' }}>
                            Optimized for real-time processing with skip connections preserving spatial information
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                        <PreciseSketchyCircle num="2" />
                    </div>
                </div>

                {/* Item 3 */}
                <div className="row align-items-center mb-5 g-0">
                    <div className="col-md-6 text-md-end pe-md-5">
                        <h2 className="fw-bold" style={{ color: '#004990', fontSize: '2.8rem', letterSpacing: '-1px' }}>
                            Semantic Segmentation
                        </h2>
                        <div style={{ height: '6px', width: '320px', backgroundColor: '#6366F1', marginLeft: 'auto', marginTop: '5px', marginBottom: '25px', borderRadius: '3px' }}></div>
                        <p style={{ color: '#004990', fontSize: '1.4rem', fontWeight: '500', opacity: 0.8, maxWidth: '450px', marginLeft: 'auto' }}>
                            Pixel-level classification for precise event detection and temporal localization
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
                        <PreciseSketchyCircle num="3" />
                    </div>
                </div>

            </div>

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <div className="py-5" style={{ backgroundColor: '#D4E6FF' }}>
                <div className="container py-4 text-center">
                    <h2 className="fw-bold" style={{ color: '#004990', fontSize: '3rem', fontFamily: 'Outfit, sans-serif' }}>Technical Specifications</h2>
                    <SuperThickScribble />

                    <div className="row g-5 mt-5 text-start justify-content-center">
                        <div className="col-lg-5">
                            <h3 className="fw-bold mb-4 d-flex align-items-center" style={{ color: '#004990' }}>
                                <span className="me-3" style={{ width: '25px', height: '25px', backgroundColor: '#6366F1', borderRadius: '50%' }}></span>
                                Model Architecture
                            </h3>
                            <ul className="list-unstyled ps-4" style={{ color: '#004990', fontWeight: '600', lineHeight: '2.4', fontSize: '1.25rem' }}>
                                <li>• Network Type: Efficient U-Net (EFUNet)</li>
                                <li>• Input: Mel-spectrograms (128 × time bins)</li>
                                <li>• Encoder Depth: 5 levels with skip connections</li>
                                <li>• Activation: ReLU and Sigmoid output</li>
                                <li>• Optimization: Adam with learning rate scheduling</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <h3 className="fw-bold mb-4 d-flex align-items-center" style={{ color: '#004990' }}>
                                <span className="me-3" style={{ width: '25px', height: '25px', backgroundColor: '#6366F1', borderRadius: '50%' }}></span>
                                Training Details
                            </h3>
                            <ul className="list-unstyled ps-4" style={{ color: '#004990', fontWeight: '600', lineHeight: '2.4', fontSize: '1.25rem' }}>
                                <li>• Dataset: 10,000+ annotated recordings</li>
                                <li>• Training Duration: 150 epochs</li>
                                <li>• Loss Function: Binary cross-entropy with Dice loss</li>
                                <li>• Validation: 5-fold cross-validation</li>
                                <li>• Framework: TensorFlow 2.x / PyTorch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* HOW THE MODEL WORKS SECTION */}
            <div className="py-5 bg-white" style={{ backgroundColor: '#D4E6FF !important' }}>
                <div className="container py-4 text-center">
                    <h2 className="fw-bold" style={{ color: '#004990', fontSize: '3rem', fontFamily: 'Outfit, sans-serif' }}>How the Model Works</h2>
                    <SuperThickScribble />

                    <div className="row justify-content-center g-5 mt-5">
                        <div className="col-md-3">
                            <div
                                className="mx-auto mb-4 d-flex align-items-center justify-content-center shadow-lg"
                                style={{
                                    width: '120px', height: '120px', backgroundColor: '#6366F1', borderRadius: '30px', transform: 'rotate(15deg)'
                                }}
                            >
                                <i className="bi bi-mic-fill text-white fs-1" style={{ transform: 'rotate(-15deg)' }}></i>
                            </div>
                            <h4 className="fw-bold mb-3" style={{ color: '#004990' }}>Audio Input</h4>
                            <p className="small text-muted fw-bold px-4" style={{ color: '#004990' }}>Raw bowel sound recordings captured via acoustic sensor</p>
                        </div>
                        <div className="col-md-3">
                            <div
                                className="mx-auto mb-4 d-flex align-items-center justify-content-center shadow-lg"
                                style={{
                                    width: '120px', height: '120px', backgroundColor: '#6366F1', borderRadius: '30px', transform: 'rotate(-15deg)'
                                }}
                            >
                                <i className="bi bi-cpu-fill text-white fs-1" style={{ transform: 'rotate(15deg)' }}></i>
                            </div>
                            <h4 className="fw-bold mb-3" style={{ color: '#004990' }}>Feature Extraction</h4>
                            <p className="small text-muted fw-bold px-4" style={{ color: '#004990' }}>Convolutional layers for hierarchical pattern recognition</p>
                        </div>
                    </div>

                    <div className="mx-auto mt-5 pt-5">
                        <div style={{ height: '8px', width: '95%', maxWidth: '1200px', backgroundColor: '#004990', borderRadius: '10px' }}></div>
                    </div>
                </div>
            </div>

        </div>
                 {/* FOOTER */}
<footer style={{ background: "#2d4bb8", padding: "40px" }}>
  <hr className="border-white opacity-25 my-5" />

  <div className="row text-white small">
    <div className="col-lg-4">
      <p className="mb-4 fw-bold fs-5">Smart Gut Monitor</p>
      AI-Driven Bowel Sound Analysis<br />
      for Advanced Medical<br />
      Diagnostics
    </div>

    <div className="col-lg-4">
      <p className="mb-4 fw-bold fs-5">Quick Links</p>
      <p className="mb-1">Home</p>
      <p className="mb-1">About Model</p>
      <p className="mb-1">Team</p>
      <p className="mb-1">Live Recording</p>
    </div>

    <div className="col-lg-4 text-lg-end">
      <p className="mb-4 fw-bold fs-5">Contact Us</p>
      <p className="mb-1">contact@smartgutmonitor.com</p>
      <p className="mb-1">+1 (555) 123-4567</p>
      <p className="mb-1">Medical Innovation Center, USA</p>

      <div className="d-flex gap-3 justify-content-lg-end justify-content-center mt-3">
        <a href="#" className="text-white fs-4">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="text-white fs-4">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" className="text-white fs-4">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="#" className="text-white fs-4">
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </div>
  </div>
</footer> 
    </div>

    );
};

export default AboutModel;
