import React from "react";
import ReactDOM from "react-dom";

import "./signin.css";

import FormInput from "../form/form";

import Button from "../button/button";

import signInWithGoogle from "../collectionitems/firebase/firebase.utils";
import { auth } from "../collectionitems/firebase/firebase.utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event, userAuth) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      signInWithEmailAndPassword()
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log(error);
        });

      await signInWithEmailAndPassword(auth, email, password);

      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      alert("incorrect password");
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h1> I already have an account </h1>
        <span> Sign in with email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />

          <div className="clicks">
            <Button type="submit" Children="Sign in" />

            <Button
              className="google"
              onClick={signInWithGoogle}
              Children=" Sign In With Google"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
//Verygood123
