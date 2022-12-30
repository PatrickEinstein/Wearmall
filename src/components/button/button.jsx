import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './button.css';

const Button = ({Children, ...otherProps}) => (
    <button className='button' {...otherProps}> { Children }</button>
);


export default Button; 