import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About=()=>{

return(
    <div>
       <h1>About Us Page</h1>
       <p>This is Namaste React Live Course- finding the path</p>
       <Profile name={"Akshay"}/>    {/* or you can also write a <Outlet/> Component instead of profile */}
       <ProfileClass name={"Akshay Class"}/>
    </div>
)
}

export default About;