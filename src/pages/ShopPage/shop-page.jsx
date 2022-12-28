import React from 'react';
import ReactDOM from 'react-dom';
import ShopData from './shopdata';
import CollectionsItems from '../../components/collections/CollectionsItems';

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
          collections.map(({ id, ...collections }) => (<CollectionsItems key={id} {...collections} />) )
        }
      </div>

    ) 
  }
}

console.log(ShopData);


export default ShopPage;
 