import React, { useState } from "react";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
export var userDetailContext = React.createContext(null);
function App() {
  const [userDetails,setUser] = useState({
    email: "ahmedessam@gmail.com",
    passoword: "12345678",
  });
  const value = {userDetails,setUser};
  return (
    <div className="App">
      <userDetailContext.Provider value={value}>
        <WelcomePage />
      </userDetailContext.Provider>
    </div>
  );
}

export default App;
