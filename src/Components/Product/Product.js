import React from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { userDetailContext } from "../../App";
import Cart from "../../Data/cart";

function Product(props) {
  let isLoggedIn = props.isLoggedIn;
  var contextData = React.useContext(userDetailContext);

  function onAddToCart(event) {
    //1-Add to cart
    Cart.addProduct(props.ID);

    //2-Update global variable from welcome page
    let user = contextData.userDetails;
    user.cart = Cart.getProducts();
    contextData.setUser(user);
    window.location.reload(); //addinga forced refresh to render the latest number of cart elements
  }
  return (
    <div className="Product">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.ImageURL} />
        <Card.Body>
          <Card.Title>Product: {props.ProductName}</Card.Title>
          <Card.Text>Price: {props.price}</Card.Text>
          {isLoggedIn === true ? (
            <Button variant="primary" onClick={onAddToCart}>
              Add to cart
            </Button>
          ) : (
            <></>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
