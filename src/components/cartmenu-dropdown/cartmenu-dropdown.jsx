import React from "react";
import { defaultEqualityCheck } from "reselect";
import { connect, Connect } from "react-redux";
import Button from '../button/button';
import './cartmenu-dropdown.css';

const CartDropdown = () =>(
<div className="cart-dropdown">
<div className="cart-items"/>
<Button Children ={"CHECKOUT"}/>
</div>
);

export default CartDropdown;