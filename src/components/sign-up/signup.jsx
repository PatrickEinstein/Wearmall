import React from "react";
import ReactDOM from "react-dom";

import FormInput from "../form/form";
import Button from "../button/button";

import {
  createUserData,
  auth,
} from "../collectionitems/firebase/firebase.utils";

import "./signup.css";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
    }

    try {
      createUserWithEmailAndPassword()
        .then((userCredential) => {
          const user = userCredential.user;
        })

        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserData(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signup">
        <h1 className="title"> I do not have an account </h1>
        <span>Sign up with your email and password</span>
        <form className="signupform" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <Button type="submit" Children="SIGN UP" />
        </form>
      </div>
    );
  }
}

export default SignUp;
