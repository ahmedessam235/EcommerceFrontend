import React from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { userDetailContext } from "../../App";

function WelcomePage() {
  var contextData = React.useContext(userDetailContext);
  const[ renderedData,UpdateRendereduser] = React.useState(contextData.email);
  function updateWelcomePage(){
    UpdateRendereduser(contextData.email);
  }
  console.log(contextData,"x=context data in app is");
  return (
    <div>
      <Navbar  />
      <Router>
        <Switch>
          <Route exact path="/">
              <h1>welcome {renderedData}</h1> 
            
        
          
          </Route>
          <Route path="/login">
            <Login userUpdated={updateWelcomePage} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default WelcomePage;
