import axios from "axios";

async function getSubCategories(categoryId) {
  let response = await axios.get(
    "http://localhost:5000/subcategory/"+categoryId
  );
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
}
export default getSubCategories;
