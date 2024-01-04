import { useEffect, useState } from "react";

const useOnline=()=>{

    const [isOnline, setIsOnline] = useState(false);
    
    const handleOnline=()=>{
        setIsOnline(true);
        console.log("sdgsdg");
        
    }

    const handleOffline=()=>{
      setIsOnline(false);
    }

    useEffect(()=>{

     
        document.addEventListener('click', handleOnline);
        
        document.addEventListener('offline', handleOffline)

        return ()=>{
            document.removeEventListener('click', handleOnline);
            document.removeEventListener('offline', handleOffline);
        }
    },[])
    
    

    return isOnline;

}

export default useOnline;