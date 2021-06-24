import React from "react";
import { Link } from "react-router-dom";
import "./Subcategory.css";

function Subcategory(props) {
  console.log(props.ID, "subcategory ID aho");
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
