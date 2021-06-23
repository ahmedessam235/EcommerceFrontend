import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CreateNewAdmin from '../../Actions/AdminActions/AdminActions';
import { useHistory } from "react-router-dom";


export function AdminPanel(props){
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let user = props.user.userDetails;

    async function HandleCreateAdmin(event) {
        //save to the global context (user data ) for the sign up
        event.preventDefault();
        if (email === "" ||password === ""){
          alert("please add Email and Password");
        } else {
        //1- Send email,password,token to a function
        await CreateNewAdmin(email, password,user.token);
      }
      if(user.isAdmin !== true){
            return (
                <h1>Unavailable</h1>
            );
      }
    }
    return(
        <div>
            <h1>Welcome to admin panel - {user.email}</h1>

            <Container>
        <form className="form-signin text-center">
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
              onChange={(event)=>{setEmail(event.target.value)}}
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
              onChange={(event)=>{setPassword(event.target.value)}}
            />
          </Row>

          <Row>
            <button
              className="btn btn-lg btn-primary btn-block "
              type="submit"
              onClick={HandleCreateAdmin}
              to="/"
            >
              Create New Admin
            </button>
          </Row>
          <p className="mt-5 mb-3 text-muted">© 2021-2022</p>
        </form>
      </Container>

        </div>
    );
}

export default AdminPanel;