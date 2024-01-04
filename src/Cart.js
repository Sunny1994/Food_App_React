import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart,removeItem } from "./utils/cartSlice";

const Cart=()=>{
  
   const cartItems= useSelector(store=>store.cart.items);

   const cartid= useSelector(store=>store.cart.items[store.id])

   // const store= useSelector(store=>store) we don't use this because of performance issue as 
   //with this type of selector, we access the whole store and the Cart component gets re rendered everytime 
   //store gets updated and its a heavy performance issue so we subscribe to only a specific portion of the store
   
   const dispatch= useDispatch();
   const handleCLearCart=()=>{
      dispatch(clearCart());
   }
    
  
   const dispatch2= useDispatch();
  //  const removeItem=(item)=>{
  //     cartItems.filter(it=>it.card.info.id!==item.card.info.id)
  //     console.log("item",item.id)
  //  }
    return(
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
          
          <div className="flex">
            {cartItems.map(item=>{
                return(
                <li key={item.card.info.id}><button onClick={()=>dispatch2(removeItem(item))}>Remove</button><FoodItem key={item.card.info.id} {...item.card.info}/></li>)}
                )
            }
          </div>
             
          <button onClick={()=>handleCLearCart()} className="bg-red-600 p-2">Clear Cart</button>
        </div>
    )
}

export default Cart;