import axios from "axios";

async function getCategories() {
  let response = await axios.get("https://ecommerce-app-everst-minds.herokuapp.com/category");
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
}
export default getCategories;
