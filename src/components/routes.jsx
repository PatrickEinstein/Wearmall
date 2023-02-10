import Homepage from "../pages/Homepage/homepage";
import ShopPage from "../pages/ShopPage/shop-page";
import CheckOutPage from "../pages/checkout-page/checkout-page";
import CollectionPage from "../pages/collection/collection";
import SignInSignUp from "../pages/sing-in-and-sign-up/sign-in-and-sign-up";
import ContactForm from "../components/contact-form/contact-form";
import { Navigate } from "react-router-dom";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
    RouterProvider
  } from "react-router-dom";

export const MyRouter =() => (
   createBrowserRouter(
    createRoutesFromElements(
       <Routes>
            
            <Route index element={<Homepage />} />
  
            <Route  path ="/shop">
                <Route index element ={ <ShopPage />} />
                <Route path =":collectionId" element ={ <CollectionPage/>} />
            </Route>
  
  
            <Route exact path="/signin" 
            element = {this.props.currentUser ? ( <Navigate to='/' />) : (<SignInSignUp/>)}/>
            <Route exact path="/contact" element={<ContactForm />} />
            <Route exact path="/checkout" element={<CheckOutPage />} />
          
          </Routes>
        )
      )
      );