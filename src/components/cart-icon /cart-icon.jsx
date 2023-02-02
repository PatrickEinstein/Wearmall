import React from "react";
 import './cart-icon.css';
 import { ReactComponent as ShoppingIcon } from '../../assets/shoppingbag.svg'
 import { toggleCartHidden } from "../../redux/actions/cart-action";
 import { connect } from "react-redux";



 const CartIcon =({toggleCartHidden}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> 0</span>
    </div>
 )



 const mapStateToProps =( dispatch) =>({
    toggleCartHidden: ( ) => dispatch(toggleCartHidden())
})

export default connect(null, mapStateToProps)(CartIcon);