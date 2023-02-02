import React from "react";
import ReactDOM from "react-dom";
import "./collectioncards.scss";
import Button from "../button/button";
import {connect} from 'react-redux';
import { addItem } from "../../redux/actions/cart-action";

const Collectioncards = ({ item , addItem}) => {
const { name, price, imageUrl} =item;

 return (
 <div className="collection-item ">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
    
    </div>
    
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <Button Children = "ADD TO CART" inverted onClick={() => addItem(item)} />
  </div>
  )
};


const mapDispatchToProps = (dispatch) =>({
addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Collectioncards);
 