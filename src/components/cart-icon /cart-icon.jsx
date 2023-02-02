import React from "react";
 import './cart-icon.css';
 import { ReactComponent as ShoppingIcon } from '../../assets/shoppingbag.svg'
 import { toggleCartHidden } from "../../redux/actions/cart-action";
 import { connect } from "react-redux";
 import { selectCartItemsCount } from "../../redux/selectors/cart-selector";



 const CartIcon =({toggleCartHidden ,itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {itemCount}</span>
    </div>
 )



 const mapDispatchToProps = ( dispatch) =>({
    toggleCartHidden: ( ) => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
itemCount: selectCartItemsCount(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 