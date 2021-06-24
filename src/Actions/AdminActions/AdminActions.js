import axios from "axios";

export async function CreateNewAdmin(email, password, token) {
  const userData = { email: email, password: password };
  var status = 0;
  let response = await axios.post("http://localhost:5000/admin", userData, {
    headers: {
      "admin-token": token,
    },
  });
  status = response.status;
  console.log(status);
  if (status !== 200) {
    throw new Error("here");
  } else {
    console.log("we have saved user data");
    return;
  }
}

export default CreateNewAdmin;
