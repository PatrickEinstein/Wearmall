import React from "react";
import { defaultEqualityCheck } from "reselect";
import { connect} from "react-redux";
import Button from '../button/button';
import './cartmenu-dropdown.scss';
import CartItem from "../cart-items/cart-item";
import { selectCartItems } from "../../redux/selectors/cart-selector";
import {toggleCartHidden} from '../../redux/actions/cart-action'
import { Link } from "react-router-dom";


const CartDropdown = ({cartItems, history, dispatch}) =>(
    <div className="cart-dropdown">

        <div className="cart-items">
         {(cartItems.length)
            ?
         (cartItems.map((cartItem) => (<CartItem key={cartItem.id} item={cartItem} />)))
         :
         <div className="empty-cart">Your Cart Is Empty</div>
         }
        </div>

      <Link to='/checkout'  className='links'>
      <Button Children="CHECKOUT" onClick ={ () => {dispatch(toggleCartHidden())}} />
     </Link>        
    </div>
);

const mapStateToProps = ( state) =>({
    cartItems : selectCartItems(state) 
})

export default connect(mapStateToProps)(CartDropdown);