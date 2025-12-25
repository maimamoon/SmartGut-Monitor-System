import React from "react";
import { FaUserMd, FaUserInjured } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div
      style={{display: "flex",height: "100vh", fontFamily: "Arial, sans-serif"}}
    >

      {/* LEFT BLUE SECTION */}
    <div
  style={{
    width: "40%",
    height: "100%",
    background: "#334EAC",
    clipPath: "ellipse(85% 70% at 0% 50%)",
    position: "relative",
    color: "white",
  }}
>
  <div
    style={{
      position: "absolute",       
      top: "50%",                 
      transform: "translatey(-50%)", 
      textAlign: "left",
      width: "80%",           
      padding: "0 10px" 
      
    }}
  >
    <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
      Welcome Back
    </h2>
    <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
      Access your Smart Gut Monitor dashboard and continue monitoring your
      digestive health with AI-powered precision.
    </p>
  </div>
</div>

      {/* RIGHT FORM SECTION */}
      <div
        style={{
          width: "500px",
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 50px 30px rgba(0, 71, 158, 0.47)",
    margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Login To Smart{" "}
          <span style={{ color: "#334EAC" }}>Gut</span> Monitor
        </h2>

        <label style={{ color: "#334EAC", fontWeight: "600" }}>Email</label>
        <input
          type="text"
          placeholder="************@gmail.com"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            backgroundColor: "#E7F1FF",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.border = "5px solid #D0E3FF")}
          onBlur={(e) => (e.target.style.border = "none")}
        />

        <label style={{color: "#334EAC", fontWeight: "600" }}>Password</label>
        <input
          type="password"
          placeholder="**********"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            backgroundColor: "#E7F1FF",
            outline: "none",
            
          }}
          onFocus={(e) => (e.target.style.border = "5px solid #D0E3FF")}
          onBlur={(e) => (e.target.style.border = "none")}
        />

        {/* Roles */}
        <div className="d-flex align-items-center justify-content-center gap-4 mt-2">

  {/* Patient */}
  <div className="role-option d-flex align-items-center gap-1">
    <input type="radio" name="role" style={{ accentColor: "#334EAC" }} />
    <FaUserInjured size={20} color="#334EAC" />
    <span><label style={{color: "#334EAC", fontWeight: "600", }}>Patient</label></span>
  </div>

  {/* Doctor */}
  <div className="role-option d-flex align-items-center gap-1">
    <input type="radio" name="role" style={{ accentColor: "#37383dff" }} />
    <FaUserMd size={20} color="#37383dff" />
    <span>Doctor</span>
  </div>

</div>

   <Link to="/Home" style={{ textDecoration: "none" }}>
        <button
          style={{
            marginTop: "25px",
            width: "100%",
            padding: "12px",
            backgroundColor: "#334EAC",
            border: "none",
            borderRadius: "6px",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        </Link>

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          <a href="/Forget" style={{ color: "#334EAC", fontWeight: "600" }}>
                Forget Password?
              </a>
        </p>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <a href="/Register" style={{ color: "#334EAC", fontWeight: "600" }}>
                  Register
              </a>
        </p>
      </div>
    </div>
  );
}
