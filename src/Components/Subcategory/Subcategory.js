import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";



function Subcategory(props){

function handleRoutinToproducts() {
    window.location.replace("/subcategories/subcategoryid=" + props.ID);
    console.log(props.ID,"props ID aheh");
    }

    return (
<div>

<Router>
      <Link
        to={"subcategories/subcategoryid=" + props.ID}
        onClick={handleRoutinToproducts}
      >
        {props.subCategoryName}
      </Link>
    </Router>
    </div>
    );
}

export default Subcategory;