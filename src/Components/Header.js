import React, { useState } from "react";
import "./home.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Router, Link } from "@reach/router";
import LoginModal from "./LoginComponent/LoginModal";
function Header() {
  return (
    <div className="header__body">
      <div>
       
        <a
          style={{
            fontSize: "60px",
            marginRight: "50px",
            marginLeft: "30px",
            padding: "5px",
          }}
        >
          W {"         "}
        </a>
        WOODIFY...!
        <div className="links">
          <Link className="header_links " to="/">
            HOME
          </Link>
          <Link className="header_links " to="contactUs">
            CONTACT US
          </Link>
          <Link className="header_links" to="checkout">
            CHECKOUT
          </Link>
          
        </div>
        
      </div>
    </div>
  );
}

export default Header;
