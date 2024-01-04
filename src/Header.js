import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import { UserContext } from "./utils/UserContext";
import { useSelector } from "react-redux";

export const Title=()=>{
  return(
    <div>
    <a href="/"> 
      <img className="h-28 pl-2 pr-2" alt="logo" 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsoqGYTrFOoGB3_iW8jUCzyeAq-_tb7VfE4lNgvV2rA&s" 
       />
     </a>
     </div>
  )
}


export const HeaderComponent=()=>{
 const [isLoggedIn, setIsLoggedIn] = useState(true);

 const {usero}= useContext(UserContext) //writing the destructured way {user} will help you extract user from the Usercontext file
 
 const isOnline = useOnline();

 const cartItems = useSelector(store => store.cart.items) //this gives access to the store and we need cart items from that store
 console.log(cartItems)
 return(
     <div className="flex justify-between bg-amber-600">
         <Title/>
         {/* <h1>{title}</h1>
         <button onClick={()=>setTitle("New Title")}>Change Title</button> */}
         <div className="nav-items">
            <ul className="flex py-10">
             <li className="px-2 font-bold"><Link to={"/"}>Home</Link></li>
             <li className="px-2 font-bold"><Link to={"/about"}>About</Link></li>
             <li className="px-2 font-bold"><Link to ={"/contact"}>Contact</Link></li>
             <li className="px-2 font-bold"><Link to ={"/instamart"}>Instamart</Link></li>
             <li className="px-2 font-bold"><Link to ="/cart">Cart - {cartItems.length} items</Link></li>
            </ul>
         </div>
        <h1>{(isOnline ? '✅' : '🔴')}</h1>
        <span className="p-5 font-bold text-red-900">{usero.name}</span>
         {
          isLoggedIn? <button className="p-2 m-2 text-white rounded-md border-r-amber-200" onClick={()=>setIsLoggedIn(false)}>Login</button> : <button onClick={()=>setIsLoggedIn(true)}>Logout</button>
         }
         
         
     </div>
 )
 
 }

