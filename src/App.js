import React from "react";
import Home from "./Components/Home.js";
import "./App.css";
import Login from "./Components/Login.js";

import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import Header from "./Components/Header.js";
import Checkout from "./Components/Checkout.js";
import ContactUs from "./Components/ContactUs.js";

function App() {
  return (
    <div className="App">
    <Header/>
    <Router>
    
    <Home path="/" />
    <Login path="login" />
    <Checkout path="checkout"/>
    <ContactUs path="contactUs"/>
  </Router>
  </div>
  );
}

export default App;
