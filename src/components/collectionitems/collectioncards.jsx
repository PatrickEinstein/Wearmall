import React from 'react';
import ReactDOM from 'react-dom';
import './collectioncards.css'

const Collectioncards = ({ name, imageUrl, price, id }) => (
    <div className='card'>

        <div className ='cardpicture' style={{ backgroundImage:`url(${imageUrl})` }}>
           <button className='cartbutton'>Add to cart</button> 

        </div>



        <div className='footer'>
            <span className ='name'>{name}</span>
            <span className ='price'>{price}</span>
        </div>


    </div>
);



export default Collectioncards;