import React from "react";
import logo from "assets/logo.svg";
import loginImg from "assets/login-img.svg";

export const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login__left d-flex align-items-center justify-content-center flex-column">
          <img className="login__logo" src={logo} alt="logo" />
          <div className="d-flex flex-column gap-2 align-items-center justify-content-center">
            <span>Healthassure</span>
            <span>Good Life</span>
          </div>
          <img className="login__img" src={loginImg} alt="" />

          <p className="h4 px-5 mx-5 text-center">
            2500+ Strong Diagnostic Partner Network across the country
          </p>
        </div>
        <div className="login__right">
          <form className="login__form">
            <div class="">
              <label
                for="loginEmail"
                class="form-label login__email  text-green"
              >
                Enter Registered Mobile Number/Email ID
              </label>
              <input type="text" class="form-control" id="loginEmail" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
