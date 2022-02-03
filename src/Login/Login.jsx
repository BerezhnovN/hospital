import React, { useState } from "react";
import MainPage from "../images/Vectormainpage.svg";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import Registration from "./../Registration/Registration";
import axios from "axios";
const link = "http://localhost:8000/api/users/";

const Login = ({ changePage }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const logIn = async () => {
    await axios
      .post(`${link}login`, {
        login: login,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("login");
          navigate("/mainBlock");
        }
      })
      .catch((err) => {
        alert("Пользователь не найден!");
      });
  };

  const checkInputs = (event) => {
    event.preventDefault();
    let reg = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
    if (reg.test(password) && login.length > 5) {
      logIn();
    } else {
      alert(
        "Пароль/Логин не корректный. Длина логина и пароля должна быть не меньше 6 символов"
      );
    }
  };

  return (
    <div className="loginPage">
      <main className="mainlog">
        <img src={MainPage} alt="главное изображение" />
        <form className="loginForm" onSubmit={checkInputs}>
          <h1>Войти в систему</h1>
          <label>Login:</label>
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />

          <label>Password:</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit">Войти</button>
          <Link
            to="/registration"
            element={<Registration />}
            onClick={() => changePage()}
            className="btn"
          >
            Зарегистрироваться
          </Link>
        </form>
      </main>
    </div>
  );
};

export default Login;
