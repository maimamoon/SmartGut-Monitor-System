import React from 'react';
import Navbar from "./Navbar.js";

const ReportsPage = () => {
    // Custom SVG Icon: Notebook and Pen
    const NotebookIcon = () => (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="25" width="50" height="60" rx="4" stroke="#004990" strokeWidth="3" />
            <path d="M20 35H70" stroke="#004990" strokeWidth="3" />
            <path d="M25 15V35 M35 15V35 M45 15V35 M55 15V35 M65 15V35" stroke="#004990" strokeWidth="3" strokeLinecap="round" />
            <path d="M30 50H60 M30 60H60 M30 70H50" stroke="#004990" strokeWidth="2" strokeLinecap="round" />
            {/* Pen */}
            <g transform="translate(60, 40) rotate(15)">
                <rect x="0" y="0" width="8" height="45" rx="2" fill="#004990" />
                <path d="M0 45 L4 52 L8 45 Z" fill="#004990" />
            </g>
        </svg>
    );

    // Custom SVG Icon: Monitor with Alert and Gear
    const MonitorAlertIcon = () => (
        <svg width="180" height="150" viewBox="0 0 180 150" fill="none">
            {/* Monitor Base */}
            <rect x="10" y="10" width="130" height="90" rx="8" stroke="#004990" strokeWidth="4" />
            <rect x="40" y="100" width="70" height="10" fill="#004990" />
            <path d="M55 110 L10 125 H140 L95 110" fill="#004990" opacity="0.3" />
            <rect x="50" y="110" width="50" height="8" rx="2" stroke="#004990" strokeWidth="3" />

            {/* Screen Alert */}
            <circle cx="75" cy="55" r="22" stroke="#004990" strokeWidth="3" />
            <path d="M75 42V60" stroke="#004990" strokeWidth="4" strokeLinecap="round" />
            <circle cx="75" cy="68" r="2.5" fill="#004990" />

            {/* Overlapping Gear */}
            <g transform="translate(120, 85)">
                <circle cx="25" cy="25" r="18" stroke="#004990" strokeWidth="4" fill="#EDF4FF" />
                <circle cx="25" cy="25" r="5" stroke="#004990" strokeWidth="3" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                    <rect key={deg} x="22" y="0" width="6" height="10" fill="#004990" transform={`rotate(${deg}, 25, 25)`} />
                ))}
            </g>
        </svg>
    );

    return (
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                      <Navbar />
        <div style={{ backgroundColor: '#EDF4FF', minHeight: '100vh', padding: '60px 0', fontFamily: 'Inter, sans-serif' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                {/* Header Section */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold mb-2" style={{ color: '#004990', fontSize: '2.5rem' }}>Medical Report Generation</h1>
                    <p className=" fs-5 fw-medium" style={{ color: '#004990',opacity: 0.7  }}>Create comprehensive PDF reports for medical professionals and patient records</p>
                </div>

                {/* Main White Box */}
                <div className="bg-white rounded-5 shadow-sm p-5 mb-5 text-center position-relative overflow-hidden" style={{ border: '1px solid rgba(0,73,144,0.1)' }}>
                    <div className="mb-4">
                        <h4 className="fw-bold mb-1" style={{ color: '#004990' }}>Generate Medical Report</h4>
                        <p className="small fw-semibold" style={{ color: '#004990', opacity: 0.7 }}>Comprehensive analysis report in PDF format</p>
                    </div>

                    <div className="position-absolute" style={{ top: '30px', right: '50px' }}>
                        <NotebookIcon />
                    </div>

                    {/* Blue Contents Card */}
                    <div className="mx-auto my-5 p-5 text-start" style={{
                        background: 'linear-gradient(135deg, #1553b8ff 0%, #2563EB 100%)',
                        borderRadius: '40px',
                        maxWidth: '750px',
                        boxShadow: '0 20px 40px rgba(37,99,235,0.15)'
                    }}>
                        <h3 className="text-white fw-bold mb-4">Report Contents</h3>
                        <ul className="text-white list-unstyled fs-5 fw-medium" style={{ lineHeight: '1.8' }}>
                            <li className="d-flex align-items-start gap-2"><span>•</span> Patient information and session details</li>
                            <li className="d-flex align-items-start gap-2"><span>•</span> Complete spectrogram analysis</li>
                            <li className="d-flex align-items-start gap-2"><span>•</span> Detected event timeline and classification</li>
                            <li className="d-flex align-items-start gap-2"><span>•</span> Statistical metrics (F1-Score, confidence levels)</li>
                            <li className="d-flex align-items-start gap-2"><span>•</span> Clinical summary and recommendations</li>
                            <li className="d-flex align-items-start gap-2"><span>•</span> Historical trend comparison</li>
                            <li className="d-flex align-items-start gap-2"><span>•</span> Technical notes and methodology</li>
                        </ul>
                    </div>

                    {/* Large Action Button */}
                    <button className="btn rounded-pill px-5 py-3 fw-bold text-white shadow-lg" style={{
                        backgroundColor: '#004990',
                        fontSize: '1.2rem',
                        border: 'none',
                        transition: 'transform 0.2s'
                    }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Generate Medical Report (PDF)
                    </button>
                </div>

                {/* Two Info Cards */}
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-5 border border-primary border-3 bg-transparent" style={{ borderColor: '#1553b8ff !important' }}>
                            <h4 className="fw-bold mb-4 text-center" style={{ color: '#004990' }}>Report Format</h4>
                            <p className="fs-5 fw-bold" style={{ color: '#004990', lineHeight: '1.5' }}>
                                Reports are generated in professional PDF format, optimized for medical use. All reports include patient privacy safeguards and meet healthcare documentation standards.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-5 border border-primary border-3 bg-transparent" style={{ borderColor: '#1553b8ff !important' }}>
                            <h4 className="fw-bold mb-4 text-center" style={{ color: '#004990' }}>Usage Guidelines</h4>
                            <p className="fs-5 fw-bold" style={{ color: '#004990', lineHeight: '1.5' }}>
                                These reports are designed to supplement clinical evaluation. Always consult with qualified healthcare professionals for medical interpretation and treatment decisions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Important Notice */}
                <div className="row align-items-center py-5">
                    <div className="col-md-8">
                        <h3 className="fw-bold mb-3" style={{ color: '#004990' }}>Important Notice</h3>
                        <p className="fw-bold" style={{ color: '#004990', fontSize: '1.05rem', lineHeight: '1.6' }}>
                            Smart Gut Monitor is a diagnostic assistance tool and should not replace professional medical advice. The AI analysis provides supportive data for healthcare decision-making. All medical decisions should be made in consultation with qualified healthcare providers. This platform is not intended to diagnose, treat, cure, or prevent any disease
                        </p>
                    </div>
                    <div className="col-md-4 text-end">
                        <MonitorAlertIcon />
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

export default ReportsPage;
