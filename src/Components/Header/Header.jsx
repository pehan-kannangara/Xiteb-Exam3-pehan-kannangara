import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CargoTon</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#pages">Pages</a>
        <a href="#tracking">Tracking</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
      </nav>
      <div className="actions">
        <button className="quote-btn">Get a Quote</button>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
