import React from "react";
import { FiBell, FiMail, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#ffffff",
        boxShadow: "0 2px 8px rgba(62, 53, 189, 0.05)",
      }}
    >
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

      {/* Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#E7F1FF",
          padding: "8px 15px",
          borderRadius: "20px",
          width: "300px",
        }}
      >
        <FiSearch />
        <input
          type="text"
          placeholder="Search patient"
          //color="#E7F1FF"
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            marginLeft: "10px",
            width: "100%",
          }}
        />
      </div>

      {/* Right icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <FiBell size={20} color="#004990"/>
        <FiMail size={20} color="#004990"/>
        <img
          src="/images/doctordash1.jpg"
          alt="profile"
          style={{ width: "35px", height: "35px", borderRadius: "50%" }}
          
        />
        {/*Name*/}
  <span style={{ fontWeight: 600, color: "#004990", fontSize: "16px" }}>
    Kim
  </span>
      </div>
    </div>
  );
}

export default Navbar;
