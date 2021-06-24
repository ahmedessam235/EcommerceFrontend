import axios from "axios";

async function getSubCategories(categoryId) {
  let response = await axios.get(
    "https://ecommerce-app-everst-minds.herokuapp.com/subcategory/" + categoryId
  );
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
}
export default getSubCategories;
