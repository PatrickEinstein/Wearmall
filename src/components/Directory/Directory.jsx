import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from '../menu-items/menu-items';
import './Directory.css';
import { connect, Connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/selectors/directory-selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => {
return (
  <div className='directory-menu'>
    {sections.map
    (({title, id, imageUrl}) => (
    <MenuItem title={title.toUpperCase()} key={id} imageUrl={imageUrl} />))} 
  </div> 
     ) 
};


   const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections
   });

export default connect(mapStateToProps)(Directory);

//the  props here is the 'sections' object because is inside the map fuction that is iterating over 'sections' object
//it is akin to '...map( (section) => ( <MenuItem title={section.title} key = {section.id} />))'