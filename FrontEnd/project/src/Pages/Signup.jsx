import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import API from "../api/axios";
import "../App.css";


function Signup(){

const navigate = useNavigate();


const [user,setUser]=useState({

    username:"",
    email:"",
    phone:"",
    password:""

});


const handleChange=(e)=>{

setUser({

...user,

[e.target.name]:e.target.value

});

};




const createAccount=async(e)=>{

e.preventDefault();


try{


const res = await API.post(
    "/auth/signup",
    user
);


alert(res.data.message);


navigate("/login");



}
catch(error){

console.log("ERROR:",error);

console.log(
"BACKEND:",
error.response?.data
);

alert(
error.response?.data?.message ||
error.message
);

}


};




return (

<div className="auth-page">


<form 
className="auth-box"
onSubmit={createAccount}
>


<h1>Create Account</h1>


<input

name="username"
placeholder="Username"
onChange={handleChange}

/>


<input

name="email"
placeholder="Email"
onChange={handleChange}

/>


<input

name="phone"
placeholder="Phone Number"
onChange={handleChange}

/>


<input

name="password"
type="password"
placeholder="Password"
onChange={handleChange}

/>


<button>
Create Account
</button>


<p>
Already have account?

<Link to="/login">
 Login
</Link>

</p>


</form>


</div>

);


}


export default Signup;