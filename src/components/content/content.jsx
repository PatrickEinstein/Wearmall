import React from 'react';
import ReactDOM from 'react-dom';

import './content.css';


const Content = ({ title }) => (
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'> Shop Now</span>
    </div>
);

export default Content;