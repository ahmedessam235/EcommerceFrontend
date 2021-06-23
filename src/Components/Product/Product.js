import React from "react";

function Product(props){
    return (
<div>
<p>{props.ProductName}</p>
<p>{props.price}</p>
</div>
    );
}

export default Product;