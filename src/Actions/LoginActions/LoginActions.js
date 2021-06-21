
import axios from 'axios';


 async function RegisterUserData (contextData){
    const userData = { email: contextData.email,password:contextData.password };
 await axios.post('http://localhost:5000/user', userData)
        .then(response => console.log(response,"aho aho"));

        console.log("here iam ");
}
export default RegisterUserData;