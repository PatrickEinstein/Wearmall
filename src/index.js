import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from 'react-dom/client';
import store from "./redux/reducers-stores/store/store";
import persistore from  "./redux/reducers-stores/store/store"
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { setCurrentUser } from "./redux/actions/setcurrentuser";
import { PersistGate } from "redux-persist/integration/react";
import{ persistor }from "./redux/reducers-stores/store/store";



const container = document.getElementById('root');
const root = createRoot(container); 
root.render(  
  <Provider store={store}>
  <BrowserRouter>
  <PersistGate persistor={persistor}>
        <App />
 </PersistGate>
  </BrowserRouter>  

  </Provider>
  
);

//<PersistGate loading={null} persistor={persistor}>
// </PersistGate>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

*/