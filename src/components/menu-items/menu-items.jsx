import React from 'react';
import ReactDOM from 'react-dom';
import './menu-items.css'
import Content from '../content/content';

const MenuItem = ({title, imageUrl}) => (
    <a href={`/shop/${title.toLowerCase()}`} className='menu-item'>
        <div className='test' style={{backgroundImage:`url(${imageUrl})`}}>
            <Content title={title}/>
        </div>
        
    </a>
); 

export default MenuItem;

