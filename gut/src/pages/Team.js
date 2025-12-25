import React from "react";
import Navbar from "./Navbar.js";


export default function Team() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />
      {/* MAIN DOCTOR SECTION */}
      <div
        style={{
          background: "#fafafaff",
          padding: "0px 0px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2d4bb8",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          Meet Our Team
        </h2>

        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 20px",
          }}
        >
          A multidisciplinary team of researchers, engineers, and medical professionals dedicated to advancing digestive health diagnostics through artificial intelligence.
        </p>

        <div
          style={{
            background: "linear-gradient(135deg, #3756c5, #1a3a97)",
            color: "white",
            borderRadius: "25px",
            padding: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ width: "50%", textAlign: "left" }}>
            <h1>Dr. Robert Anderson</h1>

            <h6
              style={{
                color: "#b2c2deff",
                fontWeight: 700,
              }}
            >
              Professional Gastroenterologist & Supervisor
            </h6>

            <p>
              Professor of Biomedical Engineering and Director of the Medical AI Research Lab.
              20+ years of experience in diagnostic technology development.
              Board-certified in gastroenterology with 50+ publications in AI-assisted medical diagnostics.
            </p>

            <div>
              {["Email", "Website", "LinkedIn"].map((item) => (
                <button
                  key={item}
                  style={{
                    marginRight: "10px",
                    border: "none",
                    padding: "8px 15px",
                    background: "white",
                    color: "#2d4bb8",
                    borderRadius: "8px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/images/doctor1.jpg"
              alt="doctor1"
              style={{
                width: "471px",
                height:"706",
                top:"6px",
                left:"1050",
                borderRadius:"188px",

              }}
            />
          </div>
        </div>
      </div>

      {/* Specialist SECTION */}
<h2
  style={{
    textAlign: "center",
    margin: "40px 0 20px",
    fontWeight: 700,
    color: "#1a3a97",
  }}
>
  Meet Our Specialist
</h2>

<div
  style={{
   background: "linear-gradient(135deg, #3756c5, #1a3a97)",
            color: "white",
            borderRadius: "25px",
            padding: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
  }}
>
  {/* Specialist1 */}
  <div
    style={{
      display: "flex",
      flexDirection: "row-reverse", 
      alignItems: "center",
      gap: "40px",
    }}
  >
    {/* IMAGE */}
    <div
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "#CCDFFF",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/doctor2.png"
        alt="Doctor"
        style={{
          width: "270px",
          height: "250px",
          //objectFit:"inherit"
        }}
      />
    </div>

    {/* TEXT */}
   <div style={{ 
            color: "white",
            padding: "30px",
            display: "flex",
           flexDirection: "column",
           alignItems: "flex-start",
            gap: "10px",}}>
    <h4 style={{ fontWeight: "600",marginBottom: "10px"  }}>john johnson</h4>
    <p style={{ fontWeight: "500", marginBottom: "5px" }}>Lead AI Engineer </p>
    <p style={{ fontSize: "15px", lineHeight: "1.2" }}>
      PhD Candidate in Biomedical Engineering.
       Specializes in deep learning for medical signal processing and has published 5+ papers on audio-based diagnostic systems.
    </p>
  </div>
  </div>

  {/* Specialist2 */}
  <div
    style={{
      display: "flex",
      flexDirection: "row-reverse", 
      alignItems: "center",
      gap: "40px",
    }}
  >
    {/* IMAGE */}
    <div
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "#CCDFFF",
        }}>
      <img
        src="/images/doctor5.png"
        alt="Doctor"
        style={{
          width: "270",
          height: "250px",
        }}
      />
    </div>

    {/* TEXT */}
    <div style={{ color: "white",
            padding: "30px",
            display: "flex",
           flexDirection: "column",
           alignItems: "flex-start",
            gap: "10px", }}>
    <h4 style={{ fontWeight: "600", marginBottom: "10px" }}> krisgin Chen </h4>
    <p style={{ fontWeight: "500", marginBottom: "5px" }}>
      Machine Learning Researcher
    </p>
    <p style={{ fontSize: "15px", lineHeight: "1.2" }}>
    MS Student in Computer Science focusing on healthcare AI.
    Developed the EffUNet architecture and optimization pipeline for real-time audio analysis.
    </p>
  </div>
  </div>
</div>
{/* ACKNOWLEDGMENTS */}
<div
  style={{
    background: "#d9e9ff",
    border: "3px solid #3b6dd8",
    borderRadius: "20px",
    padding: "30px",
    maxWidth: "900px",
    margin: "60px auto",
    textAlign: "center",
  }}
>
  <h3 style={{ color: "#2d4bb8", fontWeight: 700, marginBottom: "15px" }}>
    Acknowledgments
  </h3>

  <p style={{ color: "#2d4bb8", lineHeight: "1.6", fontWeight: 500 }}>
    This research was supported by the Medical Innovation Research Grant and the
    University Biomedical Engineering Department. We thank our clinical partners
    at the University Medical Center for their collaboration and feedback.
    Special thanks to all participants who contributed to our datasets and
    validation studies.
  </p>
</div>

      {/* CONTACT */}
      <div
        style={{
          color: "#2d4bb8",
          textAlign: "center",
          padding: "30px 20px",
        }}
      >
        <h3>Interested in Collaborating?</h3>
        <p>
          We welcome partnerships with healthcare institutions, research organizations, 
          and technology companies interested in advancing medical AI diagnostics.
        </p>
        <button
          style={{
            background: "#2d4bb8",
            border: "none",
            padding: "12px 25px",
            color: "white",
            fontWeight: 600,
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          Get in Touch
        </button>
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
}
