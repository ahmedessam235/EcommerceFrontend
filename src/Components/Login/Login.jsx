import React, { useState } from "react";
import "./Login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { userDetailContext } from "../../App";
import RegisterUserData from '../../Actions/LoginActions/LoginActions';
function Login() {
  var contextData = React.useContext(userDetailContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  function handleEmail(event){     //handles the email input from form
    setEmail(event.target.value);
  } 
  function handlePassword(event){
    setPassword(event.target.value);   //handles the password input from form
  }
async   function HandleSignUp(event) {   //save to the global context (user data ) for the sign up
    contextData.email = email;
    contextData.password = password;
    contextData.setUser(contextData);  
    event.preventDefault();
   await RegisterUserData(contextData);
    event.preventDefault();
  }

  function HandleSignIn(event) {    //  //save to the global context (user data ) for the sign in
    contextData.email = email;
    contextData.password = password;
    contextData.setUser(contextData);
    event.preventDefault(); 
  }
  return (
    <div className="Login">
      <Container>
        <form className="form-signin text-center">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail " className="sr-only">
            Email address
          </label>
          <Row>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autoFocus=""
              onChange={handleEmail}
              value={email}
            />
          </Row>
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <Row>
            <input
              type="password"
              id="inputPassword"
              className="form-control "
              placeholder="Password"
              required=""
              value={password}
              onChange={handlePassword}
            />
          </Row>

          <Row>
            <button
              className="btn btn-lg btn-primary btn-block "
              type="submit"
              onClick={HandleSignUp}
            >
              Sign up
            </button>
          </Row>
          <Row>
            <button
              className="btn btn-lg btn-primary btn-block "
              type="submit"
              onClick={HandleSignIn}
            >
              Sign in
            </button>
          </Row>
          <p className="mt-5 mb-3 text-muted">© 2021-2022</p>
        </form>
      </Container>
    </div>
  );
}

export default Login;
