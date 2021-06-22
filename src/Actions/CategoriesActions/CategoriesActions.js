import axios from "axios";

async function getCategories() {
  let response = await axios.get("http://localhost:5000/category");
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
}
export default getCategories;
