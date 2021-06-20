import React from "react";
import "./Login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { userDetailContext,setUser } from "../../App";

function Login() {
  var contextData = React.useContext(userDetailContext);
  console.log(contextData, "data before press");

  function HandleSignUp(event) {
    contextData.email = "test";
    contextData.password = "testest";
    contextData.setUser(contextData);
    event.preventDefault();
  }

  function HandleSignIn(event) {
    event.preventDefault();
    console.log(contextData, "data yoooooo");
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
