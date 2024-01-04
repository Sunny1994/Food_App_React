import {useRouteError} from "react-router-dom";


const ErrorPage=()=>{
    const err = useRouteError();
    const {status, statusText} = err
    console.log(err);
return(
    <div>
        <h2>Ooops!! Something went wrong Baby!!</h2>
        <h2>{status + ":"+ statusText}</h2>
    </div>
)

}

export default ErrorPage