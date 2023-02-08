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
    return (
             <div className="collection-page">
            <h1 className="title">{collectionId}</h1>
            
            <Outlet />
        </div>
    );

};
const mapStateToProps = (state,ownProps)=> ({
    collection: selectCollection(ownProps.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);

/*

const mapStateToProps = ( state, ownProps) => ({
    collection : selectCollection( ownProps.match.params.collectionid)(state)
});
*/ /*return (
    <div className="collection-page">
    <h2 className="title"> {title} {collectionId}</h2>

<div className="items">
{ items.map( (item )  => (<Collectioncards key={item.id} item={item}  /> ) )}
</div>

</div>

);

/*const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage); */