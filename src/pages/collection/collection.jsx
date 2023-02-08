import React from "react";
import './collection.scss';
import { connect } from "react-redux";
import { selectCollection } from "../../redux/selectors/shop-selector";
import { Outlet, useLocation, useMatches, useParams } from "react-router-dom";
import Collectioncards from "../../components/collectionitems/collectioncards";
import ShopData from '../../redux/reducers-stores/reducers/shopdata';
import { useSelector } from "react-redux";






const CollectionPage = ({collection, collectionId }) => {
    console.log(collection);
    const {items, id, title} = collection;

    return (
             <div className="collection-page">
            <h1 className="title">{collectionId.toUpperCase()}</h1>

            <div className="items">
            {
                items.map(( item ) => (<Collectioncards key ={item.id} item={item}/> ) )
            }
            </div>

            
            <Outlet />
        </div>
    );

};
const mapStateToProps = (state,ownProps)=> ({
    collection: selectCollection(ownProps.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);

