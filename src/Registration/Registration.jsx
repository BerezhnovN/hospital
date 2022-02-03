import React, { useState } from "react";
import MainPage from "../images/Vectormainpage.svg";
import "./Registration.scss";
import { Link, useNavigate } from "react-router-dom";
import Login from "./../Login/Login";
import axios from "axios";
const link = "http://localhost:8000/api/users/";

const Registration = ({ changePage }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const registration = async () => {
    await axios
      .post(`${link}registration`, {
        login: login,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("Reg");
          navigate("/login");
        }
      });
  };

  const checkInputs = (event) => {
    event.preventDefault();

    let reg = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
    if (password === repeatPassword) {
      if (reg.test(password) && login.length > 6) {
        registration();
      } else {
        alert(
          "Пароль/Логин не корректный. Длина логина и пароля должна быть не меньше 6 символов"
        );
      }
    } else {
      alert("Пароли не совпадают!");
    }
  };

  return (
    <main className="mainReg">
      <img src={MainPage} alt="главное изображение" />
      <form className="RegistrationForm" onSubmit={checkInputs}>
        <h1>Регистрация</h1>
        <label>Login:</label>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Repeat password:</label>
        <input
          type="text"
          placeholder="Password"
          value={repeatPassword}
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
        />
        <button type="submit">Зарегистрироваться</button>

        <Link
          to="/login"
          element={<Login />}
          onClick={() => changePage()}
          className="btn"
        >
          Авторизоваться
        </Link>
      </form>
    </main>
  );
};

export default Registration;
