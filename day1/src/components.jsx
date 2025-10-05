import { useState } from "react"

function Header(){
    return(
        <div>
            <h2>This is coming from Header</h2>
        </div>
    )
}

export function Footer(){
    return(
        <div>
            <h2>This is coming from footer</h2>
        </div>    
    )
}

export const Counter=()=>{

    const [counter,setcounter]=useState(0)
    return(
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={()=>setcounter(counter+1)}>Counter ++</button>
            <button onClick={()=>setcounter(counter-1)}>Counter --</button>
        </div>
    )
}



export default Header