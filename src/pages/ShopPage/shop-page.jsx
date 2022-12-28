import React from 'react';
import ReactDOM from 'react-dom';
import ShopData from './shopdata';
import Preview from '../../components/collections/preview';

class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
            collections: ShopData
        }
    }



  render() {
    const { collections} = this.state
    return (
      <div className='shop-page'>
        {
         collections.map(({ id, ...collections }) => ( <div key ={id}> <Preview {...collections} /> </div> ))
        }
     </div>
    ) 
  }
}



export default ShopPage;
 