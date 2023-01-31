import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from 'react-dom/client';
import store from "./redux/reducers-stores/store/store";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { setCurrentUser } from "./redux/actions/setcurrentuser";



const container = document.getElementById('root');
const root = createRoot(container); 
root.render(  
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>  
  </Provider>
  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









//Log the initial state
//console.log('Initial state: ', store.getState())
//{todos: [....], filters: {status, colors}}

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
//const unsubscribe = store.subscribe(() =>
//console.log('State after dispatch: ', store.getState())
/*Now, dispatch some actions*/

//store.dispatch(setCurrentUser);
/*
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

store.dispatch({ type: 'todos/todoToggled', payload: 0 })
store.dispatch({ type: 'todos/todoToggled', payload: 1 })

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' }
})
*/

// Stop listening to state updates
//unsubscribe()

// Dispatch one more action to see what happens

//store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

// Omit existing React rendering logic */