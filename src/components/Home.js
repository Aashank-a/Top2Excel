import React from "react";
import "./Home.css";
import Logo from "./Img/Logo.png";

export default function Home() {
  return (
    <>
      <div class="login">
        <center>
          <img src={Logo} />
        </center>
        <link to="/Login">
          <button class="signin">Sign In/Sign up</button>
        </link>
      </div>
    </>
  );
}
