import axios from "axios";

async function RegisterUserData(contextData) {
  const userData = { email: contextData.email, password: contextData.password };
  var status = 0;

  await axios
    .post("http://localhost:5000/user", userData)
    .then(function (response) {
      status = response.status;
      if (response.status !== 200) {
        return;
      }
    });
  if (status === 200) {
    await axios
      .post("http://localhost:5000/login", userData)
      .then(function (response) {
        if (response.status === 200) {
          contextData.token = response.data.token;  //validating and giving the user the required token 
          contextData.setUser(contextData);
        } else {
          return;
        }
      });
  }
}
export default RegisterUserData;
