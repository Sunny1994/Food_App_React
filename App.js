import React,{lazy, Suspense, useState} from "react";
import ReactDom from "react-dom/client";
import * as Head from "./src/Header"; //or you can write as import {title, HeaderComponent} from "./src/Header"
import About from "./src/About";
import Body from "./src/Body";
import Footer from "./src/Footer";
import { createBrowserRouter, Outlet, RouterProvider,Outlet } from "react-router-dom";
import ErrorPage from "./src/ErrorPage";
import Contact from "./src/Contact";
import RestaurantMenu from "./src/RestaurantMenu";
import Profile from "./src/Profile";
import Shimmer from "./src/Shimmer";
import { UserContext } from "./src/utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/Cart";
//import Instamart from "./src/Instamart";

//config driven UI
// const burgerKing = [{
// name: "Burger King",
// image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/b/t/p3683-164007826661c19bba6cb1d.jpg?tr=tr:n-xlarge",
// cuisines: ['Americano', 'Cheese'],
// rating: "4.2"
// }]

//Dynamic Import/ Lazy Import
//Lazy loading
//Chunking
//Dynamic bundling or on demand loading

const Instamart = lazy(()=> import("./src/Instamart")) // this is a promise
//upon on demand loading -> upon render -> suspend loading instamart
//dont lazy load instamart in a component, that's a crime

const AppLayout=()=>{

  const [user, setUser] = useState({
    name: "Roshan daw",
    email: "joshagmail.com"
  })
/* the context provider overrides the default values of the user as per above of whatever user details you give
and if you set a component outside Provider, the user details will get filled with default context values */
    return(
    <Provider store={store}>
     <UserContext.Provider value={{
      usero: user,
      setUsero: setUser,
      }}>   
     
        <Head.HeaderComponent/>
        <Outlet/>
        <Footer/>
    </UserContext.Provider>
    </Provider>
    )
   
}

const appRouter= createBrowserRouter([

  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children : [

      {
        path: "/",
        element: <Body user={{ name: "Namaste Roshan",
    email: "roshangmail.com",
    age: 28,}}/>
      },
      {
        path: "/about", //you can also write as "about"
        element: <About/>,
        children: [
          {
            path: "profile",  //it'll get converted to localhost:134/about/profile and it should only be written without the "/"
            element: <Profile/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact/>
      },
     {
      path: "/restaurant/:id",
      element: <RestaurantMenu/>
    },
    {
      path: "/instamart",
      element: (<Suspense fallback={<Shimmer/>}>
                  <Instamart/>
                  </Suspense>),
    },
    {
      path:"/cart",
      element: <Cart/>
    }
    ]
  },




]);

const root= ReactDom.createRoot(document.getElementById("root"));

//root.render(<AppLayout/>); We change the root render into the below line because we
//want the landing page based on how we route and hence we render the routeprovider config. 
//The Routerprovider provides the routing config

root.render(<RouterProvider router={appRouter}/>);