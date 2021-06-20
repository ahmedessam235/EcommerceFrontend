import React from "react";
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function Login() {
  return (
    <div className="Login">
    <Container>
      <form className="form-signin text-center">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail " className="sr-only">
          Email address
        </label>
        <Row>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        </Row>
        <label for="inputPassword" className="sr-only">
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
        <button className="btn btn-lg btn-primary btn-block" type="submit">
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
