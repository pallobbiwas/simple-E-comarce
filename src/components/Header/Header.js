import React from "react";
import logo from "../../images/Logo.svg";
import("./Header.css");

const Header = () => {
  return (
    <nav className="head">
      <div className="container nav-container">
        <img src={logo} alt="" />
        <div className="iteam-link">
            <a href="/order">Order</a>
            <a href="/home">Home</a>
            <a href="/manage">Manage</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
