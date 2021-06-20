import React from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login"; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function WelcomePage() {
  return (
    <div>
   
    <Navbar />
     <Router>
     <Switch>
     <Route  exact path="/">
    <ul><li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    </ul>
     </Route>
     <Route path="/login">
     <Login />
  </Route>
      
      </Switch>
      </Router>
    </div>
  );
}
export default WelcomePage;
