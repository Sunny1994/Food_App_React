import { useContext } from "react";
import { IMG_CDN_URL } from "./config";
import { UserContext } from "./utils/UserContext";

const Restrocard=({name, cuisines, lastMileTravelString, cloudinaryImageId, user})=>{ // instead of destructuring restaurant from props, we can also just give (props) in the parameters
    //and then pass below inside as props.name and it will work
  
    //const {name, cuisines, lastMileTravelString, cloudinaryImageId}= restaurant.data
    
    const {usero}= useContext(UserContext)
      
      return(
          <div className="w-[200px] p-2 m-2">
              <img src= {IMG_CDN_URL+cloudinaryImageId
              }/>
               <h2 className="font-bold text-2px">{name}</h2>
               <h3>{cuisines.join(', ')}</h3>
               <h4>{lastMileTravelString}</h4>
               <h3>{user.name}</h3>
               <h4>{user.email}</h4>
               <span>{usero.name} - {usero.email}</span>
  
          </div>
      )
  }
  
  export default Restrocard