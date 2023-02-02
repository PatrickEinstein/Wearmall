import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './button.scss';

const Button = ({Children,inverted, ...otherProps}) => (
    <button className={ `${inverted? 'inverted' : ''} button`} {...otherProps}> { Children }</button>
);


export default Button; 