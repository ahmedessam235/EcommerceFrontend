import React from "react";
import "./Product.css";
import Card from 'react-bootstrap/Card';
function Product(props){
    return (
/* <div className="Product">
<img className= "productImage" src={props.ImageURL} alt=''></img>
<div className="productText">
<p >Product: {props.ProductName}</p>
<p>price: {props.price}</p>
</div>
</div>
<div> */
<div className="Product" >
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.ImageURL} />
  <Card.Body>
    <Card.Title>Product: {props.ProductName}</Card.Title>
    <Card.Text>
    price: {props.price}
    </Card.Text>
  </Card.Body>
</Card>
</div>
    );
}

export default Product;