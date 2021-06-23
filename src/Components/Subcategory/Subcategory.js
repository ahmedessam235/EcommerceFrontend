import React from "react";
import { Link } from "react-router-dom";



function Subcategory(props){
console.log(props.ID,"subcategory ID aho");
    return (
<div>

      <Link
        to={"/subcategories/subcategoryid=" + props.ID}
      >
        {props.subCategoryName}
      </Link>
    </div>
    );
}

export default Subcategory;