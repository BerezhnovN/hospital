import "./App.scss";
import React, { useState } from "react";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Header from "./Header/Header";
import MainBlock from "./MainBlock/MainBlock";
import { Route, Routes } from "react-router-dom";

//testUser12

const App = () => {
  const [signIn, setSignin] = useState(false);
  const [mainblock, setMainblock] = useState(false);

  const changePage = () => {
    console.log("object");
    setSignin(!signIn);
  };

  const reg = "Зарегистрироваться в системе";
  const logIn = "Войти в систему";

  return (
    <div className="App">
      <Routes>
        <Route
          path="login"
          element={
            <>
              <Header text={logIn} />
              <Login
                changePage={changePage}
                mainblock={mainblock}
                setMainblock={setMainblock}
              />
            </>
          }
        />
        <Route
          path="registration"
          element={
            <>
              <Header text={reg} />
              <Registration changePage={changePage} />
            </>
          }
        />
        <Route path="mainBlock" element={<MainBlock />} />
      </Routes>

      {/* {mainblock ? (
        <>
          <Routes>
            <Route path="/api/patients/" element={<MainBlock />} />
          </Routes>
        </>
      ) : signIn ? (
        <>
          <Header text={logIn} />
          <Login
            changePage={changePage}
            mainblock={mainblock}
            setMainblock={setMainblock}
          />
        </>
      ) : (
        <>
          <Header text={reg} />
          <Registration changePage={changePage} />
        </>
      )} */}
    </div>
  );
}

export default App;
