import React from "react";


class ProfileClass extends React.Component{
     
    constructor(props){
        super(props);
        //create state
        this.state= {
            count: 0,
            count2: 0,
            userInfo: {
                name: "Dummy values",
                location: "Dummy location"
            }
        };
        console.log("constr")
    }
   async componentDidMount(){
    console.log("ComponentDidMount1")
        const api_Data= await fetch("https://api.github.com/users/roshan");
        const json_Data = await api_Data.json();
        console.log(json_Data);
        this.setState({
            userInfo: json_Data,
        })
        console.log("ComponentDidMount2")
    }

    componentDidUpdate(){
        console.log("Update")
    }

    componentWillUnmount(){
        console.log("Unmounted")
    }


    render(){
        console.log("render")
        return(
          <div>  
            <h1>Profile CLass Based component</h1>
            <h2>{this.props.name}</h2>
            <h2>Class count is: {this.state.count}</h2>
            <h2>Class count 2 is: {this.state.count2}</h2>
            <h2>Userinfo: {this.state.userInfo.name}</h2>
            <h2>User_Location: {this.state.userInfo.location}</h2>
           <img src= {this.state.userInfo.avatar_url    }/>
            <button onClick={()=>this.setState({
                count : 1,
            })}>Count</button>
           
            </div> 
        )
    }
}

export default ProfileClass;