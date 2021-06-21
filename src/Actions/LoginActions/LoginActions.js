import axios from "axios";

export async function RegisterUserData(contextData) {
  const userData = { email: contextData.email, password: contextData.password };
  var status = 0;

  await axios
    .post("http://localhost:5000/user", userData)
    .then(function (response) {
      status = response.status;
      if (response.status !== 200) {
          console.log(response.err,"erorrr in user");
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
  } else {

  }

}

export async function getUsertoken(email,password){
  let response = await axios.post("http://localhost:5000/login", {email:email,password:password});
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


export async function getUserInfo(token){
  let response = await axios.get("http://localhost:5000/user",
      {
        headers:{
          token: token
        }
      }
    );
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
  
}


