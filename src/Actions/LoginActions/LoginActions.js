import axios from "axios";

export async function RegisterUserData(email, password) {
  const userData = { email: email, password: password };
  var status = 0;

  let response = await axios.post("http://localhost:5000/user", userData);

  status = response.status;
  if (response.status !== 200) {
    console.log(response.err, "erorrr in user");
    return;
  }
  if (status === 200) {
    console.log("we have saved user data");
  } else {
  }
}

export async function getUsertoken(email, password) {
  let response = await axios.post("http://localhost:5000/login", {
    email: email,
    password: password,
  });
  if (response.status === 200) {
    return response.data.token;
  } else {
    return null;
  }

  // .then(function (response) {
  //   status = response.status;
  //   if (response.status !== 200) {
  //       console.log(response.err,"erorrr in user");
  //     return;
  //   }
  // });
}

export async function getUserInfo(token) {
  let response = await axios.get("http://localhost:5000/user", {
    headers: {
      token: token,
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
}
