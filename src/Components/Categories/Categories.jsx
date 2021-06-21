import React from 'react';

export const categoriesList = [
    {
        id:1,
        name:"Ay7aga"
    },
    {
        id:2,
        name:"Clothes"
    },
    {
        id:3,
        name:"Shoes"
    },
]
function Categories (props){

    return (
   <a href={"subcategories/categoryid=" + props.ID}>{props.categoryName}</a>
   
    );
}

export default Categories;