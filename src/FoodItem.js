

import { IMG_CDN_URL } from "./config";


const FoodItem=({name, description, cloudinaryImageId, price})=>{ // instead of destructuring restaurant from props, we can also just give (props) in the parameters
    //and then pass below inside as props.name and it will work
  
    //const {name, cuisines, lastMileTravelString, cloudinaryImageId}= restaurant.data

    
  
      
      return(
          <div className="w-[200px] p-2 m-2">
              <img src= {IMG_CDN_URL+cloudinaryImageId
              }/>
               <h2 className="font-bold text-2px">{name}</h2>
               
               <h4>{description}</h4>
               <h4>Cost: {price/100}</h4>
               
              
               
               
  
          </div>
      )
  }
  
  export default FoodItem;