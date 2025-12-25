import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserMd, FaUserInjured } from "react-icons/fa";



export default function Register() {
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
      Join Smart Gut Monitor
    </h2>
    <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
      Access your Smart Gut Monitor dashboard and continue monitoring your
      digestive health with AI-powered precision.
    </p>
  </div>
</div>


        {/* RIGHT SIDE FORM */}
<div
  style={{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",       
  }}
>
          <div className="container" style={{ 
            width: "430px",
            background: "white",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 0px 20px rgba(0, 71, 158, 0.47)",
            margin: "auto",
             }}>
            {/* Title */}
            <div className="d-flex align-items-center justify-content-center gap-1 mt-5">

              <label className="me-3 fw-bold"style={{ color: "#334EAC", fontWeight: "600" }}>Register as :</label>
 <input type="radio" name="role" style={{ accentColor: "#334EAC" }} />
    <FaUserInjured size={18} color="#334EAC" />
    <span>Patient</span> 
                 
    <input type="radio" name="role" style={{ accentColor: "#37383dff" }} />
    <FaUserMd size={18} color="#37383dff" />
            <span>Doctor</span>

            </div>

            {/* FORM */}
            <form>
              <input type="text" placeholder="First Name" className="form-control mb-3 bg-light" />     
              <input type="text" placeholder="Last Name" className="form-control mb-3 bg-light" />
              <input type="email" placeholder="Email Address" className="form-control mb-3 bg-light" />
              <input type="text" placeholder="Phone Number" className="form-control mb-3 bg-light" />
              <input type="number" placeholder="Age" className="form-control mb-3 bg-light" />
              {/* Gender */}
              <label className="fw-bold" style={{ color: "#2d4bb8", fontWeight: "600" }}>  Gender: </label>
              <div className="mb-3">
                <input type="radio" name="gender" className="me-1"  style={{ accentColor: "#2d4bb8" }}/> 
                <label style={{ color: "#2d4bb8", fontWeight: "600" }}>Female</label>
                <input type="radio" name="gender" className="ms-4 me-1" style={{ accentColor: "#2d4bb8" }}  />
                <label style={{ color: "#2d4bb8", fontWeight: "600" }}>Male</label>
              </div>

              <input type="password" placeholder="Password" className="form-control mb-3 bg-light" />

              <input type="password" placeholder="Confirm Password" className="form-control mb-3 bg-light" />

              <button
                type="submit"
                className="btn w-100 text-white"
                style={{ background: "#2d47b9" }}
              >
                Create Account
              </button>

              <p className="text-center mt-3" style={{ fontSize: "14px" }}>
                Already have an account?
                <a href="/" style={{ color: "#2d47b9", fontWeight: "600" }}>
                  Login
              </a>
                
              </p>
            </form>

          </div>
        </div>
      </div> 
  );
}
