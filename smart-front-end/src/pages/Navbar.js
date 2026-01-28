import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar sticky-top"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 7.5px 15px rgba(2, 29, 53, 0.08)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="container-fluid px-3 px-lg-4 py-1 align-items-center">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
          style={{ textDecoration: "none" }}
        >
          <img
            src="/logo.jpg"
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <div style={{ color: "#004990", fontWeight: 700 }}>Smart GUT</div>
            <div style={{ color: "#004990", fontWeight: 600 }}>Monitor</div>
          </div>
        </Link>

        {/* Links */}
        <ul
          className="d-flex list-unstyled mb-0 mx-auto"
          style={{ gap: "32px" }}
        >
          {[
            "Home",
            "Live Recording",
            "History",
            "Reports",
            "About Model",
            "Team",
          ].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/home" : `/${item.replace(" ", "").toLowerCase()}`}
                style={{
                  color: "#004990",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
       <Link
  to="/login"
  className="btn rounded-pill px-5 py-3 fw-bold"
  style={{
    backgroundColor: "#014990",
    color: "#DAEDFF",
    textDecoration: "none",
    display: "inline-block",
  }}
>
  Get Started
</Link>
      </div>
    </nav>
  );
}
