import React from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Categories(props) {
  let history = useHistory();

  function handleRoutinToSubcategories() {
    history.push("categories/" + props.ID);
  }
  return (
    <Router>
      <Link
        to={"categories/categoryid=" + props.ID}
        onClick={handleRoutinToSubcategories}
      >
        {props.categoryName}
      </Link>
    </Router>
  );
}

export default Categories;
