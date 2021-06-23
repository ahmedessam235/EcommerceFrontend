import React from "react";
import getSubCategories from "../../Actions/SubcategoriesActions/SubcategoriesActions";
import Subcategory from "../Subcategory/Subcategory";

function Subcategories(props) {
 
  const [subcategories, getsubcategories] = React.useState("");
  const subcategoryid  = window.location.pathname  ;  //get the ID of categories through URL.
  var subCategoryResult = subcategoryid.split("=");  //sprlit url string using split function to get the ID.
  const subCategoryQuery = subCategoryResult[1];     // prepare the value to send it to database.


  React.useEffect(() => {
    async function fetchData() {
      const requestedSubCategories = await getSubCategories(subCategoryQuery);
      getsubcategories(requestedSubCategories); 
    }
    fetchData();
  }, []);

if(subcategories) {
  console.log(subcategories,"subcategories");
  return (
    <div>
      {subcategories.map((subCategoryItem, index) => {
     return (
       <Subcategory
         key={index}
         id={index}
         subCategoryName={subCategoryItem.name}
         ID={subCategoryItem.subcategoryId}
       />
     );
   })}
    </div>
  );
} else {
return (
  <div> 
  <h1>.......Loading Subcategories</h1>
  </div>
);
}
}

export default Subcategories;
