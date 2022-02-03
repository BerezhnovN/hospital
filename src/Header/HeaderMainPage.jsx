import React from "react";
import HeaderImg from "../images/Vectorheader.svg";
import "./HeaderMainPage.scss";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const HeaderMainPage = () => {
  const navigate = useNavigate();

  const onClickExit = () => {
    Cookies.remove("jwt");
    console.log("exit");
    navigate("/login");
  };

  return (
    <div className="header">
      <img src={HeaderImg} alt="" />
      <h1>Приемы</h1>
      <button onClick={() => onClickExit()}>Выход</button>
    </div>
  );
};

export default HeaderMainPage;
