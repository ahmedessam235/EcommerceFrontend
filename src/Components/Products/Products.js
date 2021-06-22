import React from 'react';
import {useParams} from 'react-router-dom';
export const productssList = [
    {
      id: 1,
      name: "tshirts puma",
      price:100,
      subCategoryID:1
    },
    {
      id: 2,
      name: "vnecks nike",
      price: 200,
      subCategoryID:2
    },
    {
      id: 3,
      name: "cutshirts addidas",
      price: 300,
      subCategoryID:3
    },
  ];
  var result = {};
function getProductsbysubcategory(subCategoryID){
 let counter = 0;
 
 for (counter=0; counter<productssList.length;counter++){
     if (productssList.subCategoryID === subCategoryID){
            result.name = productssList[counter].name;
            result.price = productssList[counter].price;
           
     }
 }
 console.log(result," aho el result");
 return result;

}
function Products (){
    var { subcategoryid } = useParams();
    var subCategoryID =  subcategoryid.charAt(subcategoryid.length - 1); //parsing the id of subcategories t
    console.log(subCategoryID);
    getProductsbysubcategory();
return (
    <div>
     <p>
         {result.name}
         {result.price}
     </p>
      
    </div>
)

}

export default Products;