import Restrocard from "./Restrocard"
import { restaurantList } from "./config"
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import Noresult from "./Noresult";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline";
import { UserContext } from "./utils/UserContext";


const Body = ({ user }) => {
  //what is react hooks= they are functions
  const [allRestaurant, setAllRestaurant] = useState([]);
  //searchtext is a local state variable
  const [searchtext, setSearchtext] = useState(""); //use state is a function that returns an array pf a variable and
  // a function to update the variable
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);
  console.log("render");

  const { usero, setUsero } = useContext(UserContext);

  // const online= useOnline();
  // if(online){
  //   return <h1>Youre offline now!!!!</h1>
  // }

  useEffect(() => {
    console.log("useeffect1");
    getchcall();
    console.log("useeffect2");
  }, [])

  console.log("render2");
  async function getchcall() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0117104&lng=80.1777417&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log("helloo", json);

    const arrayOfCards = json?.data?.cards;
    const restaurantListing = "restaurant_grid_listing";

    for (const cardObj of arrayOfCards) {
      if (cardObj?.card?.card && cardObj?.card?.card?.id === restaurantListing) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurant(resData);
        setFilteredRestaurant(resData);
      }
    }
    console.log("rednder3", filteredrestaurant); //the filtered restaurant shows only an empty array 
    //since useeffect runs on the initial render and it only displays the empty initial array value always

  }

  //   function filterData(searchtext, allRestaurant) {

  //     const filter= allRestaurant.filter(res=>
  //         res.data.name.toLowerCase().includes(searchtext.toLowerCase())
  //     );

  //     return filter;
  // }


  return (!filteredrestaurant?.length != 0) ? <Shimmer /> : (
    <>
      <div className="search-container p-5 mt-2">
        <input type="text"
          placeholder="Search"
          className="focus:bg-green-200"
          value={searchtext}
          onChange={(e) => setSearchtext(e.target.value)} />

        <button className="search-btn p-2 m-2 bg-purple-700 hover:bg-gray-400 text-white rounded-md"
          onClick={() => {
            // if(filteredrestaurant?.length ===0){

            //   <Noresult/>

            //  }
            const data = filterData(searchtext, allRestaurant);
            setFilteredRestaurant(data);
          }}>Search</button>
        <input value={usero.name} onChange={e => setUsero({
          ...usero,
          name: e.target.value

        })}></input>
        <input value={usero.email} onChange={e => setUsero({
          ...usero,
          email: e.target.value,
        })}></input>
      </div>
      <div className="flex flex-wrap bg-orange-400">
        { /* <Restrocard {...restaurantList[0].data}/>
              <Restrocard {...restaurantList[1].data}/>
              <Restrocard {...restaurantList[2].data}/> can also be written as <Restrocard restaurant= {restaurantList[2]}/>*/}

        {filteredrestaurant.map(restauran => {
          return (
            <Link key={restauran?.info.id} to={"/restaurant/" + restauran?.info.id}><Restrocard {...restauran.info} user={user} /></Link>
          )
        })}

      </div>
    </>
  )
}

export default Body