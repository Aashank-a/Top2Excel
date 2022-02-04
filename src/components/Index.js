import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function index() {
  return(
    <>
      <div className="login">
    <h2 className="active"> sign in </h2>


    <form method="post" action="/login">



      <input type="text" className="text" name="username"/>
      <span>username</span>

      <br/>

      <br/>

      <input type="password" className="text" name="password"/>
      <span>password</span>
      <br/>


      <a href="#">Forgot Password?</a>

      <button className="signin" type="submit">
        Sign In
      </button>


      <hr/>
      <a href="register.html">Register</a><br/><br/><br/>

    </form>
    <p style="margin-top: 62px;">New candidate</p>

  </div>
    </>
  );
}
