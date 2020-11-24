import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import Login from "../Login";
import '../home.css'
import './LoginModal.css' 
import FormLogin from "../FormLogin";

function LoginModal() {
  const [modal, handleModal] = useState(true);
  const openModal = () => {
    handleModal(!modal);
    console.log(modal);
  };

  const onCloseModal = () => {
    handleModal(!modal);
    console.log(modal);
  };

  return (
    <div>
      {modal ? (
        <button className="login__button" onClick={openModal}>
          Login
        </button>
      ) : (
        <div className="login__modal" >
         <Login onCloseModal={onCloseModal}/>
         {/**create the login page with CSS baadmein!  */}
        
          
        </div>
      )}
    </div>
  );
}

export default LoginModal;
