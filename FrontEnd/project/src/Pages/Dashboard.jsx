import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../api/axios";
import "../App.css";

function Dashboard(){

const navigate=useNavigate();

const [username,setUsername]=useState("");
const [email,setEmail]=useState("");
const [search,setSearch]=useState("");
const [cart,setCart]=useState([]);

useEffect(()=>{

const getUser=async()=>{

try{

const token=localStorage.getItem("token");

const res=await API.get("/auth/profile",{
headers:{
Authorization:`Bearer ${token}`
}
});

setUsername(res.data.username);
setEmail(res.data.email);

}
catch(err){
console.log(err);
}

};

getUser();

},[]);


const products=[
{
name:"Gaming Laptop",
price:"₹75000",
img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
},
{
name:"Headphones",
price:"₹2999",
img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},
{
name:"Smart Watch",
price:"₹5999",
img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
}
];


const addCart=(item)=>{

setCart([...cart,item]);

};


const removeCart=(id)=>{

setCart(cart.filter((_,i)=>i!==id));

};


const logout=()=>{

localStorage.removeItem("token");

navigate("/login");

};


return(

<div className="shop-page">


<nav className="shop-navbar">


<div className="shop-user">

<div className="user-logo">
{username ? username[0].toUpperCase():"U"}
</div>


<div className="user-box">

<div className="big-user">
{username ? username[0].toUpperCase():"U"}
</div>

<h3>{username}</h3>

<p>{email}</p>

<hr/>

<button onClick={logout}>
Logout
</button>

</div>

</div>



<h2 className="shop-logo">
🛍 ShopX
</h2>



<div className="cart-area">


<div className="cart">
🛒 Cart ({cart.length})
</div>



<div className="cart-box">


<h3>Your Cart</h3>


{
cart.length===0 ?

<p>No items</p>

:

cart.map((item,index)=>(


<div 
className="small-cart"
key={index}
>

<img src={item.img}/>


<div>

<h4>{item.name}</h4>

<p>{item.price}</p>

</div>


<button
onClick={()=>removeCart(index)}
>

X

</button>


</div>


))

}


</div>


</div>


</nav>





<div className="search-box">

<input

placeholder="Search products..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

</div>





<section className="shop-hero">

<h1>Summer Sale 🔥</h1>

<p>Best products with amazing offers</p>

</section>





<div className="products">


{

products

.filter(p=>
p.name.toLowerCase()
.includes(search.toLowerCase())
)

.map((item,index)=>(


<div 
className="product-card"
key={index}
>

<img src={item.img}/>

<h3>{item.name}</h3>

<h4>{item.price}</h4>


<button
onClick={()=>addCart(item)}
>

Add Cart

</button>


</div>


))

}


</div>


</div>

);

}

export default Dashboard;