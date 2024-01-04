import { useState,useEffect } from "react";

const useRestaurant = (id) =>{

    const [restaurant, setRestaurant] = useState(null);
    const [resmenu, setResmenu] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo(){
        const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId='+id);
        const read = await data.json();
        console.log(read.data);
      
        
       // console.log(read.data.cards[0].card.card.info.cloudinaryImageId);
    
     //  console.log(read.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel[2].title) //card.info.name);
       console.log(read?.data?.cards[0]?.card?.card?.info);

       setRestaurant(read?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card);
       setResmenu(read?.data?.cards[0]?.card?.card?.info);

       console.log(read?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card);
      
     }
     return {restaurant, resmenu};
}

export default useRestaurant;