import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "16px",
        backgroundColor: "#f7f7f7",
        borderTop: "1px solid #ddd",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <p style={{ margin: 0, color: "#666" }}>© 2024 Admin Dashboard</p>
    </footer>
  );
};

export default Footer;
