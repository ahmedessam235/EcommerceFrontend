import React from "react";
import {  Link, useHistory } from "react-router-dom";
import "./Category.css";
function Categories(props) {

  return (
    <div id = "Category">
      <Link
        className = "btn btn-light btn-lg"
        to={"categories/categoryid=" + props.ID}
        // style={{ color: '#000000' }}
      >
        {props.categoryName}
      </Link>
      </div>
  );
}

export default Categories;
