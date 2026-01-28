import React from "react";

export default function ForgetPassword() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
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
            transform: "translateY(-50%)",
            width: "80%",
            padding: "0 10px",
          }}
        >
          <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
            Reset Your Password
          </h2>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            Don't worry! It happens. Enter your email address and we’ll send you
            instructions to reset your password.
          </p>
        </div>
      </div>

      {/* RIGHT WHITE SECTION */}
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
        <h6
          style={{
            marginTop: "20px",
            color: "#334EAC",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          Forget password?
        </h6>

        <p style={{ color: "#6c757d", fontSize: "14px" }}>
          Enter your email to receive reset instructions
        </p>

        <label style={{color: "#334EAC", fontWeight: "600", marginBottom: "2px" }}>
          Email / Username
        </label>

        <br />

        <input
          type="text"
          placeholder="Enter your email"
          style={{
            width: "300px",
            height: "45px",
            backgroundColor: "#E7F1FF",
            border: "none",
            borderRadius: "6px",
            paddingLeft: "10px",
            marginBottom: "15px",
            boxShadow: "2px 5px 4px rgba(5, 60, 127, 0.47)",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.border = "5px solid #D0E3FF")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <br />

        <button
          style={{
            width: "200px",
            height: "45px",
            backgroundColor: "#334EAC",
            border: "none",
            borderRadius: "6px",
            color: "white",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
         Reset Password
        </button>

        <p style={{ fontSize: "14px" }}>
          Remember your password?{" "}
          <a href="/" style={{ color: "#334EAC", fontWeight: "600" }}>
                  Login
              </a>
        </p>
      </div>
    </div>
  );
}
