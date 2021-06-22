import React from "react";

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
  return (
    <a href={"subcategories/categoryid=" + props.ID}>subcategories hena </a>
  );
}

export default Subcategories;
