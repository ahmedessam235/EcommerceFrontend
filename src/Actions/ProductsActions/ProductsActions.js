import axios from "axios";

async function getProducts(productyQuery) {
  let response = await axios.get(
    "http://localhost:5000/product/" + productyQuery
  );
  if (response.status === 200) {
    console.log(response.data, "resposne el products");
    return response.data;
  } else {
    return null;
  }
}
export default getProducts;
