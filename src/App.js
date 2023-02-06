import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage/homepage";
import ShopPage from "./pages/ShopPage/shop-page";
import { BrowserRouter, Routes, Route, Link, Switch,Navigate } from "react-router-dom";
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
import { getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "./components/collectionitems/firebase/firebase.utils";
import { doc } from "firebase/firestore";
import ContactForm from "./components/contact-form/contact-form";
import Header from "./components/header/header.jsx";
//import { provider } from "react-redux";
import {connect} from "react-redux";
import { setCurrentUser } from "./redux/actions/setcurrentuser";
import store from "./redux/reducers-stores/store/store";
import CheckOutPage from "./pages/checkout-page/checkout-page";


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userReference = await createUserData(userAuth);
        const userSnap = await getDoc(userReference);
        setCurrentUser ({ id: userSnap.id, ...userSnap.data() })
        setCurrentUser(userAuth); 

      };
         
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      
      <div>
        <Header/>
          <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/shop/*" element={<ShopPage />} />
          <Route exact path="/signin" 
          element = {this.props.currentUser ? ( <Navigate to='/' />) : (<SignInSignUp/>)}/>
          <Route exact path="/contact" element={<ContactForm />} />
          <Route exact path="/checkout" element={<CheckOutPage />} />
        </Routes>
      
      </div>
        

        
    
    );
  }
}
const mapStateToProps  = ({user}) =>({
  currentUser: user.currentUser
});


const mapDispatchToProps =(dispatch)=>({
setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
console.log('State after dispatch: ', store.getState()));

export default connect(mapStateToProps, mapDispatchToProps)(App); 
