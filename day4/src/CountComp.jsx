import { useEffect } from "react";

function CountComp({counterdata}){

    function handlecounter(){
        console.log("handlecounter function called")
    }

    useEffect(()=>(
       handlecounter()
    ),[])
 
   
    return(
        <div>
            <h2>Counter Component Value : {counterdata}</h2>
        </div>
    )
}

export default CountComp