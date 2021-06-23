import axios from "axios";

async function getProducts(subCategoryId) {
  let response = await axios.get(
    "http://localhost:5000//product/:subCategoryId"
  );
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
}
export default getProducts;
