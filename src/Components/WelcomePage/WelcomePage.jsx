import React from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login"; 
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
function WelcomePage() {
  return (
    <div>
   
    <Navbar />
     <Router>
     <Switch>
     <Route  exact path="/">
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
