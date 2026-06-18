import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import "../App.css";


function Login(){

const navigate = useNavigate();


const [login,setLogin] = useState({

    email:"",
    password:""

});


const [loading,setLoading] = useState(false);



const handleChange = (e)=>{

    setLogin({

        ...login,

        [e.target.name]:e.target.value

    });

};




const signIn = async(e)=>{

e.preventDefault();


if(!login.email || !login.password){

    alert("Please fill all fields");
    return;

}


try{


setLoading(true);


const res = await API.post(
    "/auth/login",
    login
);



if(res.data.token){


localStorage.setItem(
    "token",
    res.data.token
);


alert("Login successful");


navigate("/dashboard");


}
else{

alert("Token not received");

}



}
catch(error){


console.log(error.response?.data);


alert(

error.response?.data?.message ||

"Login failed"

);


}
finally{


setLoading(false);


}


};




return(

<div className="auth-page">


<form 
className="auth-box"
onSubmit={signIn}
>


<h1>Login</h1>


<p>Welcome back 🚀</p>


<input

name="email"

type="email"

placeholder="Email"

value={login.email}

onChange={handleChange}

/>



<input

name="password"

type="password"

placeholder="Password"

value={login.password}

onChange={handleChange}

/>



<button disabled={loading}>

{
loading
?
"Logging in..."
:
"Login"
}

</button>



<p>

No account?

<Link to="/signup">

Create Account

</Link>


</p>


</form>


</div>

);


}


export default Login;