import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = ()=>{
  const {id} = useParams();
  // const [resId, setResId] = useState(null); //we give dfault value as an empty object because in the api we have the data in an object
  // const [menu, setMenu] = useState(null);
   
const {restaurant, resmenu} = useRestaurant(id);
console.log(restaurant);
//   useEffect(()=>{
//     getRestaurantInfo();
//   }, []);

//   async function getRestaurantInfo(){
//     const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0117104&lng=80.1777417&restaurantId='+id);
//     const read = await data.json();
//     console.log(read.data);
  
    
//    // console.log(read.data.cards[0].card.card.info.cloudinaryImageId);

//    //console.log(read.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);

//    setMenu(read?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card);
//    setResId(read?.data?.cards[0]?.card?.card?.info);
//  }
const dispatch= useDispatch()

// const handleAddItem=()=>{
//   dispatch(addItem('Grapes'))   //{payload: "Grapes"}

// }

const addFoodItem=(item)=>{
  dispatch(addItem(item)) 
  console.log(item);       //{payload: item}
}

 return (!restaurant || !resmenu) ? <Shimmer/> : (
       <div> 
         <div className="menu">
              <h1>Restaurant id: {id}</h1>
              <h1>{resmenu.name}</h1>
              <img src= {IMG_CDN_URL+ resmenu.cloudinaryImageId }/>
              <h1>{resmenu.area}</h1>
              <h1>{resmenu.city}</h1>
              <h1>{resmenu.avgRating}</h1>
              <h1>{resmenu.costForTwo}</h1>
              <h2>Namaste</h2>
          </div>
          {/* <div>
             <button className="p-2 m-5 bg-green-100" onClick={()=>handleAddItem()}>Add Item</button>
          </div> */}
          <div className="flex">
              <h1>Menu</h1>
              <br></br>
              <ul>
                {(restaurant.itemCards?.map(item=>{
                    return(
                        <li key ={item?.card?.info?.id}>{item?.card?.info?.name}- <button 
                        className="p-1 bg-green-50" onClick={()=>addFoodItem(item)}>Add Item</button></li>
                    )
                }))}
              </ul>
            </div>
       </div>
    )
}

export default RestaurantMenu;