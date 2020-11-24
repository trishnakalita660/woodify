import React, { useState } from "react";
import styles from "styled-components";
import FormLogin from "./FormLogin";
import "./Login_test.css";
import { FacebookLoginButton } from "react-social-login-buttons";
import { SocialIcon } from "react-social-icons";
import Checkout from "./Checkout";

function Login({ onCloseModal }) {
  const credentials = {
    email: "tk@gmail.com",
    password: "test123",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(" ");

  const LoginCredentials = (details) => {
    console.log(details);
    if (
      details.email === credentials.email &&
      details.password === credentials.password
    ) {
      console.log("matched");
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      setError("Jaa Ghar jaa");
    }
  };

  const LoginHeader = () => {
    return <div>Woodify</div>;
  };

  const SocialLoginButtons = () => {
    return (
      <div>
        
          <SocialIcon url="https://www.facebook.com/" /> <a>OR</a>{" "}
          <SocialIcon url="http://google.com/" />
        </div>
      
    );
  };
  return (
    <div className="login__body">
      <button onClick={onCloseModal} className="loginmodal__close">
        X
      </button>
      <div className="login_input">
        <div className="login__welcome">
          <LoginHeader />
        </div>
        <div>
        <FormLogin LoginCredentials={LoginCredentials} error={error} /></div>
        
        <hr style={{marginTop:"1rem"}} />
        <div className="login__social" ><SocialLoginButtons /></div>
      </div>
    </div>
  );
}

export default Login;
