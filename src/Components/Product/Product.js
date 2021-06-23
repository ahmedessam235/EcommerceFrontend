import React from "react";

function Product(props){
    return (
<div>
<p>{props.ProductName}</p>
<p>{props.price}</p>
<img src={props.ImageURL} alt=''></img>
</div>
    );
}

export default Product;