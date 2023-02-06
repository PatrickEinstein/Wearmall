import React from "react";
import './collection.scss';
import { connect} from "react-redux";
import { selectCollection } from "../../redux/selectors/shop-selector";

import Collectioncards from "../../components/collectionitems/collectioncards";


const CollectionPage = ({collection}) => {
    const  { title, items } = collection;
   return ( 
   <div className="collection-page">
        <h2 className="title"> {title}</h2>
        <div className="items">
        {
            items.map( (item )  => (<Collectioncards key={item.id} item={item}  /> ) )
        }
        </div>
    </div>
    );
    
   };

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.shop.collections.id)(state)
});

export default connect(mapStateToProps)(CollectionPage);


/*

const mapStateToProps = ( state, ownProps) => ({
    collection : selectCollection( ownProps.match.params.collectionid)(state)
});
*/