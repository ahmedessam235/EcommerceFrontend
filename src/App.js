import React,{useState} from "react";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
export var userDetailContext = React.createContext(null);
function App() {
  var [userDetails] = useState({
    email: "ahmedessam@gmail.com",
    passoword: "12345678"
  });

  return (
    <div className="App">
    <userDetailContext.Provider value={userDetails}>
      <WelcomePage />
      </userDetailContext.Provider>
    </div>
  );
}

export default App;
