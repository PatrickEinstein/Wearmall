import React from "react";
import './collection-overview.scss';
import { connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import Preview from "../collections/preview";
import { selectCollections } from '../../redux/selectors/shop-selector';

const CollectionOverview = ({ collections}) =>(
    <div className="collections-overview">
         {
         collections.map(({ id, ...collections }) => ( <div key ={id}> <Preview {...collections} /> </div> ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
  });
  
export default connect(mapStateToProps)(CollectionOverview);  