import React from "react";
import ReactDOM from "react-dom";
import "./sign-in-and-sign-up.css";
import SignIn from "../../components/signin/signin";
import SignUp from "../../components/sign-up/signup";

const SignInSignUp = () => (
  <div className="signinandup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
