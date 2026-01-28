import React from "react";
import Navbar from "./Navbarfordash";
import Chart from "./Chart";

export default function Dashboard() {
  return (
     <div style={{ background: "#eef5ff", minHeight: "100vh", fontFamily: "Poppins, sans-serif" }}>
      
      {/* NAVBAR */}
      <Navbar />

      <div style={{ padding: "0 30px" }}> {/* Container padding */}

        {/* TOP CARD */}
        <div
          style={{
            background: "linear-gradient(90deg, #7dd3fc, #6366f1)",
            borderRadius: "20px",
            padding: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            marginBottom: "30px",
            marginTop: "30px"
          }}
        >
          <div>
            <h2 style={{color: "#1d4ed8", marginBottom: "10px" }}>
              Good Morning <span style={{color: "#1d4ed8", fontWeight: 700 }}>Dr. Kim!</span>
            </h2>
            <p style={{ color: "#1d4ed8",fontWeight: 400 }}>Here's a quick overview of today's patient and task.</p>
          </div>

          <img
            src="/images/doctordash1.jpg"
            alt="Doctor"
            style={{ width: "200px" ,
              borderRadius: "20px",

            }}
          />
        </div>

        {/* STAT + CHART */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "30px",
            display: "flex",
            gap: "20px",
          }}
        >
          {/* LEFT TEXT */}
          <div style={{ width: "30%" }}>
            <h4 style={{ color: "#6b7280", marginBottom: "10px" }}>New Patient</h4>

            <p style={{ color: "#1d4ed8", fontWeight: 600, marginBottom: "20px" }}>
              +25% High then last month
            </p>

            <div style={{ marginBottom: "15px" }}>
              <p style={{ fontSize: "13px", color: "#6b7280" }}>Overall Growth</p>
              <strong style={{ color: "#1d4ed8" }}>35.80%</strong>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <p style={{ fontSize: "13px", color: "#6b7280" }}>Monthly</p>
              <strong style={{ color: "#1d4ed8" }}>45.20%</strong>
            </div>

            <div>
              <p style={{ fontSize: "13px", color: "#6b7280" }}>Day</p>
              <strong style={{ color: "#1d4ed8" }} >5.50%</strong>
            </div>
          </div>

          {/* RIGHT CHART */}
          <div style={{ width: "70%" }}>
            <Chart />
          </div>
        </div>


        {/* PATIENT TABLE */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "20px",
            marginTop: "30px",
            marginBottom: "30px"
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  textAlign: "left",
                  color: "#6b7280",
                  fontSize: "14px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Date Of Admit</th>
                <th>Status</th>
                <th>Reports</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Jens Brincker", 23, "27/05/2016", "NORMAL"],
                ["Mark Hay", 30, "26/05/2017", "NORMAL"],
                ["Anthony Davie", 29, "21/05/2016", "UPNORMAL"],
                ["David Perry", 22, "20/04/2016", "NORMAL"],
                ["Anthony Davie", 26, "24/05/2016", "NORMAL"],
                ["Alan Gilchrist", 35, "22/05/2016", "UPNORMAL"],
                ["Mark Hay", 24, "18/06/2016", "NORMAL"],
                ["Sue Woodger", 19, "17/05/2016", "UPNORMAL"],
              ].map((row, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #f1f5f9",
                    fontSize: "14px",
                  }}
                >
                  <td style={{ padding: "12px 0" }}>{index + 1}</td>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>
                    <span
                      style={{
                        background:
                          row[3] === "NORMAL" ? "#3b82f6" : "#1d4ed8",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 600,
                      }}
                    >
                      {row[3]}
                    </span>
                  </td>
                  <td>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#2563eb",
                        cursor: "pointer",
                        fontSize: "13px",
                      }}
                    >
                      view report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div> {/* End container padding */}

      {/* FOOTER */}
      <footer style={{ background: "#3b82f6", padding: "40px" }}>
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