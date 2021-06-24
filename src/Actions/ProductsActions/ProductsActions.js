import axios from "axios";

async function getProducts(productyQuery) {
  let response = await axios.get(
    "https://ecommerce-app-everst-minds.herokuapp.com/product/" + productyQuery
  );
  if (response.status === 200) {
    
    return response.data;
  } else {
    return null;
  }
}
export default getProducts;
