import React from 'react';
import ReactDOM from 'react-dom';
import './menu-items.css'
import Content from '../content/content';
import { Link } from 'react-router-dom';

const MenuItem = ({title, imageUrl, linkUrl}) => (
    <div className='menu-item'>
        <div className='test' style={{backgroundImage:`url(${imageUrl})`}}>
           <Link to ={`/${linkUrl}`}> <Content title={title}/> </Link>
        </div>
        
    </div>
); 

export default MenuItem;

