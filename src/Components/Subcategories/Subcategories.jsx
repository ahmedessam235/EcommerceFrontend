import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const subcategoriesList = [
  {
    id: 1,
    name: "tshirts",
  },
  {
    id: 2,
    name: "vnecks",
  },
  {
    id: 3,
    name: "cutshirts",
  },
];
function Subcategories(props) {
  function handleRoutinToproducts() {
    window.location.replace("/subcategories/subcategoryid=" + props.ID);
  }

  return (
    // <a href={"subcategories/categoryid=" + props.ID}>subcategories hena </a>
    <Router>
      <Link
        to={"subcategories/subcategoryid=" + props.ID}
        onClick={handleRoutinToproducts}
      >
        {props.subCategoryName}
      </Link>
    </Router>
  );
}

export default Subcategories;
