import { useContext } from "react"
import { UserContext } from "./utils/UserContext"
const Footer=()=>{
    const {usero}= useContext(UserContext)
    return(
        <h4 className="p-10 m-10">This site is developed by {usero.name}</h4>
    )
}

export default Footer