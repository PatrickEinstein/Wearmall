import React from 'react';
import ReactDOM from 'react-dom';
import './preview.css';
import Collectioncards from '../collectionitems/collectioncards';



const Preview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview' >
            {
                items
                    .filter(
                        (items, idx) => (idx < 4)
                    )
                    .map(
                        (item) => (
                            <Collectioncards key={item.id} item={item}/>)
                    )
            }
        </div>

        
        
    </div>
);



export default Preview;