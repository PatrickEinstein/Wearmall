import React from "react";
import { defaultEqualityCheck } from "reselect";
import { connect} from "react-redux";
import Button from '../button/button';
import './cartmenu-dropdown.scss';
import CartItem from "../cart-items/cart-item";
import { selectCartItems } from "../../redux/selectors/cart-selector";

const CartDropdown = ({cartItems}) =>(
    <div className="cart-dropdown">

        <div className="cart-items">
            {cartItems.map((cartItem) => (<CartItem key={cartItem.id} item={cartItem} />))}
        </div>

            <Button Children="CHECKOUT"/>
        
    </div>
);

const mapStateToProps = ( state) =>({
    cartItems : selectCartItems(state) 
})

export default connect(mapStateToProps)(CartDropdown);