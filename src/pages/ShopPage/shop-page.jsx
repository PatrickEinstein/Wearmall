import React from 'react';
import ReactDOM from 'react-dom';
import './shop-page.css';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { Route, Routes } from 'react-router-dom';
import CollectionPage from '../collection/collection';


const ShopPage = ({context}) => {
 console.log(context);
    return (
      <div className='shop-page'>
        <Routes>
        <Route exact path='/' element = {<CollectionOverview/>} />
        <Route path = '/:collections.id' element = {<CollectionPage/> }/>
        </Routes>
      </div>
    ) ;
  };




export default ShopPage;
  