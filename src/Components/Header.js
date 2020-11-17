import React from "react";
import "./home.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Router, Link } from "@reach/router";
function Header() {
  return (
    <div className="header__body">
      <div>
        <a
          style={{
            fontSize: "50px",
            marginRight: "30px",
            marginLeft: "30px",
            padding: "5px",
            
          }}
           
        >
          W
        </a>{" "}
           WOODIFY
        <Link className="header_links " to="login">
          <ArrowForwardIcon />
        </Link>
        <Link className="header_links " to="contactUs">
          CONTACT US
        </Link>
        <Link className="header_links" to="checkout">
          CHECKOUT
        </Link>
        <Link className="header_links " to="/">
          HOME
        </Link>
      </div>
    </div>
  );
}

export default Header;
