import React, { useState } from "react";
import "./Login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { userDetailContext } from "../../App";
import {
  RegisterUserData,
  getUserInfo,
  getUsertoken,
} from "../../Actions/LoginActions/LoginActions";
import { useHistory } from "react-router-dom";

function Login(props) {
  let history = useHistory();
  var contextData = React.useContext(userDetailContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginstate, updateloginstate] = useState(false); // rendring state for the login text
  function handleEmail(event) {
    //handles the email input from form
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value); //handles the password input from form
  }
  async function HandleSignUp(event) {
    //save to the global context (user data ) for the sign up

    event.preventDefault();
    await RegisterUserData(email, password);

    contextData.setUser(contextData);
    updateloginstate(true);
    history.push("/login");
    // event.preventDefault();
  }

  async function HandleSignIn(event) {
    event.preventDefault();

    //1- Call the backend to exchange the email,password for a token
    let token = await getUsertoken(email, password);

    //2- Call the backend again to exchange token for userinfo.
    let userInfo = await getUserInfo(token);

    //3- Update global variable with the userinfo.
    let globalUser = {
      email: userInfo.userEmail,
      token: token,
      isAdmin: userInfo.isadmin,
    };

    console.log(globalUser);
    contextData.email = globalUser.email;
    contextData.token = globalUser.token;
    contextData.isAdmin = globalUser.isAdmin;
    // contextData.userDetails = globalUser;

    contextData.setUser(contextData);

    console.log(contextData, "context data update is");
    updatedata();
    history.push("/");

    //save to the global context (user data ) for the sign in
    //const userCheckResult =   await checkUser(email,password);
    //console.log(userCheckResult);
  }

  function updatedata() {
    props.userUpdated(props.updateWelcomePage);
  }
  return (
    <div className="Login">
      <Container>
        <form className="form-signin text-center">
          <h1 className="h3 mb-3 font-weight-normal">
            {loginstate
              ? "Thank you for registering with us please sign in"
              : "Please sign in"}
          </h1>
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
              to="/"
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
