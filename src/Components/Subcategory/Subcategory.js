import React from "react";
import { Link } from "react-router-dom";
import "./Subcategory.css";

function Subcategory(props) {
  
  return (
    <div className="Subcategory">
      <Link
        to={"/subcategories/subcategoryid=" + props.ID}
        className="btn btn-light btn-lg"
      >
        {props.subCategoryName}
      </Link>
    </div>
  );
}

export default Subcategory;
