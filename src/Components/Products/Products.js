import React from "react";
import getProducts from "../../Actions/ProductsActions/ProductsActions";
import Product from "../Product/Product";
  

  
function Products() {
  const [products, getproducts] = React.useState("");
  const productid  = window.location.pathname  ;  //get the ID of subcategories through URL.
  var productsResult = productid.split("=");  //sprlit url string using split function to get the ID.
  const productyQuery = productsResult[1];     // prepare the value to send it to database.
  console.log(productyQuery[1], "sucategories aho");

  React.useEffect(() => {
    async function fetchData() {
      const requestedProducts = await getProducts(productyQuery);
      getproducts(requestedProducts); 
      console.log(products, "result products");
    }
    fetchData();
  }, []);
  if (products){
  return (

    <div>
      {products.map((productItem, index) => {
     return (
       <Product
         key={index}
         id={index}
         subCategoryName={productItem.name}
         ID={productItem.id}
         price = {productItem.price}
       />
     );
   })}
    </div>
  );
}else {
  return (
<h1>Products are loading ......</h1>
  )
}
}

export default Products;
