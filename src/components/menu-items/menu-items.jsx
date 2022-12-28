import React from 'react';
import ReactDOM from 'react-dom';
import './menu-items.css'
import Content from '../content/content';

const MenuItem = ({title, imageUrl}) => (
    <div className='menu-item'>
        <div className='test' style={{backgroundImage:`url(${imageUrl})`}}>
            <Content title={title}/>
        </div>
        
    </div>
); 

export default MenuItem;

