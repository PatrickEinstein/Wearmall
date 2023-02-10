import React from 'react';
import ReactDOM from 'react-dom';
import './shop-page.css';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { Route, Routes, Outlet, useMatches } from 'react-router-dom';
import CollectionPage from '../collection/collection';
import { useParams } from 'react-router-dom';
//import { useLocation, matchPath, matchRoutes} from 'react-router-dom';
import { useMatch} from 'react-router-dom';
import ShopData from '../../redux/reducers-stores/reducers/shopdata';
import { Link } from 'react-router-dom';




const ShopPage = () => {
  
  
 return (
    <div className='shop-page'>
      <CollectionOverview />
    </div>
  ) ;
  
};




export default ShopPage;
  

/*
return (
  <div className='shop-page'>
    <Routes>
    <Route exact path='/' element = {<CollectionOverview/>} >
    <Route path = '/:collections.id' element = {<CollectionPage/> }/>
    </Route>
    </Routes>
  </div>
) ;
*/