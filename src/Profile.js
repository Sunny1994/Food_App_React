import { useState } from "react";

const Profile=(props)=>{

    const [count, setCount] = useState(0);
    const [count2] = useState(0);

return(
    <div>
         <h2>Profile Component</h2>
        <h1>Name is {props.name}</h1>
        <h2>Count is {count}</h2>
        <h3>Count 2 is {count2}</h3>
        <button onClick={()=> setCount(100)}>Count</button>
       
    </div>
)

}

export default Profile;
