import React from "react";
import { useParams } from "react-router-dom";
import CollectionPage from "./collection";


const TopLevelCollectionPage = () => {
    const {collectionId} = useParams();
    const params = useParams();
    return(
        <div>
       
        <CollectionPage params={params} collectionId={collectionId}/>
        </div>
    )
   
    
  };

  export default TopLevelCollectionPage;