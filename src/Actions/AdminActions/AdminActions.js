import axios from "axios";

export async function CreateNewAdmin(email, password, token) {
  const userData = { email: email, password: password };
  var status = 0;
  let response = await axios.post("https://ecommerce-app-everst-minds.herokuapp.com/admin", userData, {
    headers: {
      "admin-token": token,
    },
  });
  status = response.status;
  
  if (status !== 200) {
    throw new Error("here");
  } else {
    
    return;
  }
}

export default CreateNewAdmin;
