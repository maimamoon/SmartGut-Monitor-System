import React, { useEffect, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
// Images
import dashed from "./assets/dashed.png";
import logo from "./assets/logo.png";
import gut from "./assets/gut.png";
import Healing from "./assets/Healing.png";
import doctor from "./assets/doctor.png";
import Bloating from "./assets/Bloating.png";
import patient1 from "./assets/patient1.png";
import patient2 from "./assets/patient2.png";
import patient3 from "./assets/patient3.png";
import traingle from "./assets/traingle.png";

export default function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
          // مش هنشيل الكلاس عشان الانيميشن ميتكررش لما نرجع فوق، بس لو عايز تكراره غير false لـ true
          // else { entry.target.classList.remove("show"); }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Asap:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>
        {`
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s ease-out, transform 1s ease-out;
          }

          .animate-on-scroll.fade-left {
            transform: translateX(-50px);
          }

          .animate-on-scroll.fade-right {
            transform: translateX(50px);
          }

          .animate-on-scroll.scale-in {
            transform: scale(0.85);
          }

          .animate-on-scroll.float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }

          .animate-on-scroll.show {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        `}
      </style>

      <div style={{ fontFamily: "Roboto, sans-serif" }}>
        {/* NAVBAR */}
        <nav
          className="navbar navbar-expand-lg sticky-top"
          style={{
            backgroundColor: "#ffffffff",
            boxShadow: "0 7.5px 15px rgba(2, 29, 53, 0.08)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div className="container-fluid px-4 px-lg-5 py-3">
            <a className="navbar-brand d-flex align-items-center gap-3" href="#">
              <img src={logo} alt="Logo" height="55" />
              <div>
                <div className="fw-bold" style={{ color: "#004990", fontSize: "0.9rem" }}>
                  Smart GUT
                </div>
                <div className="fw-semibold" style={{ color: "#004990", fontSize: "0.9rem" }}>
                  Monitor
                </div>
              </div>
            </a>

            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto fw-semibold">
                <li className="nav-item mx-4">
                  <a
                    className="nav-link position-relative"
                    href="#"
                    style={{
                      color: "#004990",
                      paddingBottom: "8px",
                      fontWeight: 700,
                    }}
                  >
                    Home
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        backgroundColor: "#004990",
                        borderRadius: "2px",
                      }}
                    ></span>
                  </a>
                </li>

                {[
                  "Live Recording",
                  "History",
                  "Reports",
                  "About Model",
                  "Team",
                  "Login",
                ].map((item) => (
                  <li className="nav-item mx-4" key={item}>
                    <a className="nav-link" href="#" style={{ color: "#004990" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                className="btn rounded-pill px-5 py-3 fw-bold"
                style={{
                  backgroundColor: "#014990",
                  color: "#DAEDFF",
                  border: "none",
                  boxShadow: `
                    0 6px 14px #AFC2D3,
                    inset 0 -4px 6px rgba(0, 0, 0, 0.25)
                  `,
                  transition: "0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = `
                    0 8px 18px #AFC2D3,
                    inset 0 -2px 4px rgba(0, 0, 0, 0.35)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = `
                    0 6px 14px #AFC2D3,
                    inset 0 -4px 6px rgba(0, 0, 0, 0.25)
                  `;
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>

        <section
          style={{
            backgroundColor: "#F8FCFF",
            minHeight: "75vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* dashed image layer */}
          <img
            src={dashed}
            alt="decorative dashed lines"
            className="animate-on-scroll"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "80%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
              pointerEvents: "none"
            }}
          />

          <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row align-items-center">
              {/* النص */}
              <div className="col-lg-6 animate-on-scroll fade-left">
                <h1
                  style={{
                    fontSize: "3.2rem",
                    fontWeight: 700,
                    fontFamily: "Open Sans, sans-serif",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span style={{ color: "#0B1F33" }}>Smart </span>
                  <span style={{ color: "#0B63CE" }}>Gut </span>
                  <span style={{ color: "#0B1F33" }}>Monitor</span>
                </h1>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    color: "#4A5D73",
                    maxWidth: "520px",
                  }}
                >
                  AI-Driven Bowel Sound Analysis<br />
                  Revolutionary deep learning platform for real-time digestive health monitoring.<br />
                  Analyze bowel sounds with medical-grade precision, generate comprehensive reports,<br />
                  and track your digestive wellness over time.
                </p>

                {/* الأزرار */}
                <div className="d-flex gap-4 mt-4">
                  <button
                    style={{
                      background: "linear-gradient(180deg, #5EC9FF 0%, #2EA8FF 100%)",
                      color: "#fff",
                      border: "none",
                      padding: "14px 38px",
                      borderRadius: "999px",
                      fontWeight: 600,
                      boxShadow: "0 10px 25px rgba(46,168,255,0.45)",
                    }}
                  >
                    Get Started
                  </button>

                  <button
                    style={{
                      background: "linear-gradient(180deg, #2E6FD9 0%, #1E4FA3 100%)",
                      color: "#fff",
                      border: "none",
                      padding: "14px 38px",
                      borderRadius: "999px",
                      fontWeight: 600,
                      boxShadow: "0 10px 25px rgba(30,79,163,0.45)",
                    }}
                  >
                    Learn more
                  </button>
                </div>
              </div>

              {/* الصورة */}
              <div className="col-lg-6 text-end animate-on-scroll fade-right">
                <img
                  src={doctor}
                  alt="Doctor"
                  className="float"
                  style={{
                    maxWidth: "90%",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* WE HELP TO GET SOLUTIONS */}
        <section
          className="py-5"
          style={{
            fontFamily: "Inter, sans-serif",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="container py-4">
            <div className="row g-4 align-items-start">
              <div className="col-lg-8 animate-on-scroll fade-left">
                <h2 className="display-5 fw-bold mb-3" style={{ color: "#004990" }}>
                  We Help To Get <br />
                  Solutions
                </h2>

                <p
                  className="fs-4"
                  style={{
                    fontSize: "1.3rem",
                    lineHeight: "1.65",
                    marginBottom: "1rem",
                    fontWeight: 600,
                    color: "#1C2F41",
                  }}
                >
                  We help to get solutions by providing accurate, non-invasive<br />
                  analysis of gastrointestinal sounds, offering clear clinical<br />
                  insights that support early detection and better<br />
                  digestive-health decisions.
                </p>
              </div>

              <div className="col-lg-4 d-flex justify-content-start animate-on-scroll fade-right scale-in">
                <img
                  src={Healing}
                  alt="Healing"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    maxWidth: "260px",
                    marginLeft: "-20px",
                  }}
                />
              </div>
            </div>

            <div className="row g-4 align-items-center mt-4">
              <div className="col-lg-5 d-flex justify-content-start animate-on-scroll fade-left scale-in">
                <img
                  src={gut}
                  alt="Gut"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    maxWidth: "260px",
                    marginTop: "-35px",
                  }}
                />
              </div>

              <div className="col-lg-7 animate-on-scroll fade-right scale-in">
                <div
                  className="text-white rounded-4 p-4 shadow-lg d-flex flex-column align-items-center text-center"
                  style={{ backgroundColor: "#7096D1" }}
                >
                  <h3 className="fw-bold fs-3 mb-3">Our mission is simple</h3>

                  <p className="fs-5 mb-0" style={{ maxWidth: "580px" }}>
                    We aim to transform gut-health assessment through smart acoustic
                    analysis – providing real-time insights, personalized tracking, and
                    scientific monitoring that puts patients in control of their
                    digestive well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section
          className="py-5"
          style={{
            backgroundColor: "#DBE5FF",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div
                className="col-lg-5 position-relative animate-on-scroll fade-left"
                style={{
                  backgroundImage: `url(${traingle})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center left",
                  backgroundSize: "cover",
                  minHeight: "100%",
                  padding: "120px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(219, 229, 255, 0.35)",
                    zIndex: 0,
                  }}
                ></div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <h2
                    className="display-4 fw-bold mb-4"
                    style={{ color: "#1C2F41", fontFamily: "Outfit, sans-serif" }}
                  >
                    Key Features
                  </h2>
                  <p
                    className="lead"
                    style={{
                      color: "#1C2F41",
                      fontWeight: 500,
                      fontFamily: "Asap, sans-serif",
                    }}
                  >
                    Comprehensive tools for digestive health monitoring powered by state-of-the-art AI technology
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="row g-4">
                  {[
                    { num: 1, title: "Real-time AI Detection", desc: "Advanced deep learning algorithms<br />analyze bowel sounds in real-time<br />for immediate insights." },
                    { num: 2, title: "Medical Reports", desc: "Generate comprehensive PDF<br />reports for medical professionals<br />and patient records." },
                    { num: 3, title: "Historical Insights", desc: "Track trends and patterns<br />over time with detailed<br />analytics and visualizations." },
                    { num: 4, title: "Smart Alerts System", desc: "Instant notifications for<br />abnormal bowel sound<br />patterns." },
                  ].map((card) => (
                    <div className="col-12 col-md-6" key={card.num}>
                      <div className="bg-white rounded-4 shadow p-4 h-100 animate-on-scroll scale-in">
                        <div className="mb-3">
                          <div
                            className="d-flex align-items-center justify-content-center mb-2"
                            style={{
                              width: "50px",
                              height: "50px",
                              backgroundColor: "#0155A5",
                              color: "#fff",
                              fontWeight: "bold",
                              fontSize: "1.2rem",
                              borderRadius: "10px",
                            }}
                          >
                            {card.num}
                          </div>
                          <h4 className="fw-bold mb-2" style={{ color: "#1C2F41", fontFamily: "Outfit, sans-serif" }}>
                            {card.title}
                          </h4>
                        </div>
                        <p
                          className="text-muted small mb-0"
                          style={{
                            fontWeight: 500,
                            fontFamily: "Asap, sans-serif",
                            lineHeight: "1.5",
                          }}
                          dangerouslySetInnerHTML={{ __html: card.desc }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEAR THE SENSOR */}
        <section className="py-5 bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-5 text-center animate-on-scroll fade-left">
                <img
                  src={Bloating}
                  alt="Bloating"
                  className="img-fluid rounded-circle shadow-lg float"
                  style={{ maxWidth: "380px" }}
                />
              </div>
              <div className="col-lg-7 animate-on-scroll fade-right">
                <div className="position-relative">
                  {[
                    { num: "01", title: "Wear the Sensor", text: "Put on the comfortable smart sensor T-shirt designed for extended wear." },
                    { num: "02", title: "Start Recording", text: "Begin live recording session and watch real-time waveform visualization." },
                    { num: "03", title: "AI Analysis", text: "Our EFUNet model analyzes the audio and detects significant bowel events." },
                    { num: "04", title: "Review Results", text: "View detailed analysis, generate reports, and track your digestive health trends." },
                  ].map((step) => (
                    <div className="d-flex align-items-start mb-5 animate-on-scroll" key={step.num}>
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-4 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#FFFFFF",
                          color: "#004990",
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          border: "2px solid #004990",
                        }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <h4 className="fw-bold mb-2" style={{ color: "#004990" }}>
                          {step.title}
                        </h4>
                        <p style={{ color: "#004990", fontWeight: 500 }}>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SMART GUT MONITOR */}
        <section className="py-5">
          <div className="container py-5">
            <div
              className="rounded-5 p-5 p-lg-5 text-white position-relative overflow-hidden animate-on-scroll"
              style={{
                backgroundColor: "rgba(8, 109, 170, 0.69)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Why choose Smart Gut Monitor</h2>
                <p className="lead opacity-90 mb-0">
                  Advanced technology meets clinical precision for comprehensive digestive health insights
                </p>
              </div>

              <div className="row g-4">
                {[
                  { title: "Clinical Precision", desc: "Medical-grade accuracy with EFUNet architecture trained on extensive datasets", img: patient1 },
                  { title: "Real-time Monitoring", desc: "Continuous monitoring with instant notifications for detected events.", img: patient2 },
                  { title: "Non-invasive", desc: "Comfortable wearable sensor technology for extended monitoring sessions", img: patient3 },
                ].map((item) => (
                  <div className="col-md-4" key={item.title}>
                    <div className="rounded-4 shadow p-4 h-100 animate-on-scroll scale-in" style={{ backgroundColor: "#FFFFF5" }}>
                      <h5 className="fw-bold mb-3" style={{ color: "#020043" }}>
                        {item.title}
                      </h5>
                      <p className="small mb-4" style={{ color: "#020043" }}>
                        {item.desc}
                      </p>
                      <div className="d-flex align-items-center justify-content-start gap-3">
                        <img src={item.img} alt="Patient" className="rounded-circle float" width="50" height="50" />
                        <div style={{ color: "#004990", fontSize: "1.5rem" }}>★★★★★</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-5">
                <div className="d-inline-flex gap-2">
                  <div className="bg-white rounded-circle" style={{ width: "10px", height: "10px", opacity: 0.5 }}></div>
                  <div className="bg-white rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                  <div className="bg-white rounded-circle" style={{ width: "10px", height: "10px", opacity: 0.5 }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="py-5"
          style={{
            backgroundColor: "#004990",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div className="container py-5 text-white">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 animate-on-scroll fade-left">
                <h2 className="display-5 fw-bold mb-3">Ready to Get Started?</h2>
                <p className="lead mb-4 opacity-90">
                  Join healthcare professionals and patients<br />
                  using Smart Gut Monitor for advanced<br />
                  digestive health monitoring
                </p>
              </div>

              <div className="col-lg-6 text-lg-end animate-on-scroll fade-right">
                <div className="d-flex flex-column flex-lg-row gap-3 justify-content-end">
                  <button
                    className="btn rounded-pill fw-bold text-white"
                    style={{
                      minWidth: "240px",
                      padding: "14px 32px",
                      background: "linear-gradient(to right, #00A4F4, #D9F3FF)",
                      border: "none",
                      boxShadow:
                        "0 6px 18px rgba(0, 164, 244, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.15)",
                      transition: "0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow =
                        "0 8px 22px rgba(0, 164, 244, 0.45), inset 0 -4px 6px rgba(0, 0, 0, 0.18)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow =
                        "0 6px 18px rgba(0, 164, 244, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.15)";
                    }}
                  >
                    Create Free Account
                  </button>

                  <button
                    className="btn rounded-pill fw-bold text-white"
                    style={{
                      minWidth: "240px",
                      padding: "14px 32px",
                      background: "linear-gradient(to right, #014990, #DAEDFF)",
                      border: "none",
                      boxShadow:
                        "0 6px 18px rgba(1, 73, 144, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.15)",
                      transition: "0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow =
                        "0 8px 22px rgba(1, 73, 144, 0.45), inset 0 -4px 6px rgba(0, 0, 0, 0.18)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow =
                        "0 6px 18px rgba(1, 73, 144, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.15)";
                    }}
                  >
                    Try Live Demo
                  </button>
                </div>
              </div>
            </div>

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
                Home<br />
                About Model<br />
                Team<br />
                Live Recording
              </div>

              <div className="col-lg-4 text-lg-end">
                <p className="mb-4 fw-bold fs-5">Contact Us</p>
                contact@smartgutmonitor.com<br />
                +1 (555) 123-4567<br />
                Medical Innovation Center, USA
                <div className="d-flex gap-3 justify-content-end mt-3">
                  <a href="#" className="text-white"><i className="bi bi-facebook fs-4"></i></a>
                  <a href="#" className="text-white"><i className="bi bi-instagram fs-4"></i></a>
                  <a href="#" className="text-white"><i className="bi bi-linkedin fs-4"></i></a>
                  <a href="#" className="text-white"><i className="bi bi-youtube fs-4"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}