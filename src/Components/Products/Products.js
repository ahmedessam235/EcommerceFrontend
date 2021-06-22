import React from 'react';
import {useParams,Router,Link} from 'react-router-dom';
function Products (){
    const { subcategoryid } = useParams();
    console.log(window.location.pathname);

return (
    <div>
    <h1> here is the list of products</h1>
     <h1> here is the list of products</h1>
     <h1> here is the list of products</h1>
     <h1> here is the list of products</h1>
     <h1> here is the list of products</h1>

      <h1> here is the list of products</h1>
      
      </div>
)

}

export default Products;