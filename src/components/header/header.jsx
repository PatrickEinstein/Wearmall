import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './header.css';
import { ReactComponent as Logo} from '../../assets/assets.svg';



const Header = () => (
    <div className='logo-container'>
        <Link to ="/"> <Logo className='logo'/> </Link>

        <div>
            <Link to="/shop"> SHOP </Link>
            
            <Link to="/contact"> CONTACT </Link>

        </div>

        
    </div>


)



export default Header;

