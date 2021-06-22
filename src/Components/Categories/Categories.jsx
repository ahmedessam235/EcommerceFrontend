import React from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
export const categoriesList = [
  {
    id: 1,
    name: "Ay7aga",
  },
  {
    id: 2,
    name: "Clothes",
  },
  {
    id: 3,
    name: "Shoes",
  },
];
function Categories(props) {
  let history = useHistory();
  function handleRoutinToSubcategories() {
    history.push("subcategories/categoryid=" + props.ID);
  }
  return (
    <Router>
      <Link
        to={"subcategories/categoryid=" + props.ID}
        onClick={handleRoutinToSubcategories}
      >
        {props.categoryName}
      </Link>
    </Router>
  );
}

export default Categories;
