import React, { useState } from "react";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
export var userDetailContext = React.createContext(null);
function App() {
  const [userDetails,setUser] = useState({
    email: "ahmedessam@gmail.com",
    passoword: "12345678",
  });
  const value = {userDetails,setUser}; //passing the values of usestate hook in order to change the global user data anywhere in the children
  return (
    <div className="App">
      <userDetailContext.Provider value={value}>
        <WelcomePage />
      </userDetailContext.Provider>
    </div>
  );
}

export default App;
