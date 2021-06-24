import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
function Categories(props) {
  return (
    <div id="Category">
      <Link
        className="btn btn-light btn-lg"
        to={"categories/categoryid=" + props.ID}
      >
        {props.categoryName}
      </Link>
    </div>
  );
}

export default Categories;
