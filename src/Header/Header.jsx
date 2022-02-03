import React from "react";
import HeaderImg from "../images/Vectorheader.svg";
import "./Header.scss";

const Header = ({ text }) => {
  return (
    <div className="header">
      <img src={HeaderImg} alt="" />
      <h1>{text}</h1>
    </div>
  );
};

export default Header;
