import React from 'react';
import ReactDOM from 'react-dom';
import './form.css'

const FormInput = ({handleChange, label, ...others}) => (
   <div className='form'>
        <input className='input' onChange={handleChange} {...others}/>

        {
            label ? (
                <label className = 'label'>
                    { label }
                </label>
                )
                : null
        }
        
        
   </div> 
);

//{`${others.value.length ? 'shrink' : ''}label`}
export default FormInput;


