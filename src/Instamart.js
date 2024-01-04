import { useState } from "react"

const Section=({title, description, isVisible, setIsVisible})=>{

   // const [isVisible, setIsVisible]= useState(false);

    return(
        <div className="border border-black">
        <h3 className="font-bold p- m-2">{title}</h3>
        {isVisible ? ( <button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button>)
        :(<button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">Show</button>)}
       
       { isVisible && <h1>{description}</h1>}
        </div>
    )
}

const Instamart=()=>{
  const [sectionConfig, setSectionConfig]= useState({
    showAbout: false,
    showTeam: false
  })
    return (
        
        <div>
            <Section title={"About INstamart"}
             description ={"This is the section page"} 
             isVisible={sectionConfig.showAbout}
             setIsVisible={()=>setSectionConfig({
                showAbout: true,
                showTeam: false
             })} />

            <Section title={"Second INstamart"}
             description ={"This is the section page of second one"} 
             isVisible={sectionConfig.showTeam}
             setIsVisible={()=>setSectionConfig({
                showAbout: false,
                showTeam: true
             })} />
        </div>
    )
}

export default Instamart;