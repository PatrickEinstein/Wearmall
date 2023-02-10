import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.css';
import MenuItem from '../../components/menu-items/menu-items';
import Directory from '../../components/Directory/Directory.jsx';
import { render } from '@testing-library/react';
import {ImageCarousel} from '../../components/carousel/carousel';

const Homepage = () => {
  return(


    <div className='home-conatiner'>

          <ImageCarousel/>

          
        <div className='homepage'>
        <Directory />
        </div>
        
    </div>
    
  )
}
  
    
  
  

  
    
  
  export default Homepage;
  