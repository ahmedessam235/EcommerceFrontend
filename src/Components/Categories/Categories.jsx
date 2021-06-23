import React from "react";
import {  Link, useHistory } from "react-router-dom";

function Categories(props) {

  return (
   
      <Link
        to={"categories/categoryid=" + props.ID}
      >
        {props.categoryName}
      </Link>
    
  );
}

export default Categories;
