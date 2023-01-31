import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./header.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux";



const Header = ({currentUser, signOut }) => {
  return (
    <div className="header">
      <div className="logo-container ">
        <Link to="/" className="links0">
          <span className="logo">Home</span>
        </Link>
      </div>

      <div className="links">
        <Link to="/shop" className="links0">
          {" "}
          SHOP{" "}
        </Link>

        <Link to="/contact" className="links0">
          {" "}
          CONTACT{" "}
        </Link>

        {currentUser ? (
          <div
            className="links0"
            onClick={signOut}
            style={{ cursor: "pointer" }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="links0">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps =(state ) =>({
currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);