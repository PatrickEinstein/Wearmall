import React from 'react';
import ReactDOM from 'react-dom';
import './collections.css'

const CollectionsItems = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='items-images'>
            
            {
                <div key={items.id}> {items.filter((items, idx) => (idx < 4)).map((item) => (item.name))}</div> 
         }     
        
        </div>

        
        
</div>
)



export default CollectionsItems;