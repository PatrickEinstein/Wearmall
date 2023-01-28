import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage/homepage";
import ShopPage from "./pages/ShopPage/shop-page";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/assets.svg";
import "./components/header/header.css";
import SignInSignUp from "./pages/sing-in-and-sign-up/sign-in-and-sign-up";
import {
  auth,
  createUserData,
} from "./components/collectionitems/firebase/firebase.utils";
//import { Signinorout } from './components/collectionitems/firebase/firebase.utils';
import { render } from "@testing-library/react";
import React from "react";
import signInWithGoogle from "./components/collectionitems/firebase/firebase.utils";
import { SignOut } from "./components/collectionitems/firebase/firebase.utils";
import { getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "./components/collectionitems/firebase/firebase.utils";
import { doc } from "firebase/firestore";
import ContactForm from "./components/contact-form/contact-form";
import Header from "./components/header/header.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log(userAuth); //monitor what the userAuth is like

        const userReference = await createUserData(userAuth);

        console.log(userReference); //monitor the userReference created

        const userSnap = await getDoc(userReference);

        console.log(userSnap.data()); //monitor the snapshot created

        this.setState(
          {
            currentUser: { id: userSnap.id, ...userSnap.data() },
          },
          () => {
            console.log(this.state);
          }
        );
      } else {
        this.setState({ currentUser: userAuth });
        console.log(this.state);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentuser={this.state.currentUser} signOut={SignOut} />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInSignUp />} />
          <Route exact path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
