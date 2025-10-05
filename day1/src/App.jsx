import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components'
import {Footer} from './components'
import {Counter} from './components'


function App() {
  const [count, setCount] = useState(0)
  const name="AKumar";
  let x=10;
  let y=20;
  function sum(){
    return(
      x+y+20
    )
  }

  const userobj={
    name:"Ak",
    email:"ak123@gmail.com",
    contact:"12345567890"

  }
  const userarray=["1","2","3","4"]


  function operation(a,b,op){
    if(op=="+")return a+b;
    else if(op=="-")return a-b;
    else return a*b; 
  }

  const fruit=(name)=>{
    alert(name)
  }
  function oper(){
    return(
      2
    )
  }

  
  const [colour,setcolour]=useState("Red");

  
  const handlecolour=()=>{
    if(colour=="Red")setcolour("Blue")
    else setcolour("Red")
  }
  

  const [username,setusername]=useState("Aditya Kumar")
  const [display,setDisplay]=useState(true)

  return (
    <>
      <h1>Hello React</h1>
      <Header />
      <Footer />
      <Fruits />
      {sum()}
      <br />
      <button onClick={sum}>Click Here</button>
      <h3>{name?name:"User not found"}</h3>
      <h3>{x+y}</h3>
      <h3>{sum()}</h3>
      <h3>{operation(20,10,"+")}</h3>
      <h3>{userobj.name} , {userobj.email}</h3>
      <h3>{userarray[3]}</h3>
      <button onClick={()=>fruit("apple")}>Fruit1</button>
      <button onClick={()=>fruit("banana")}>Fruit1</button>
      <h3>{oper()}</h3>
      
      {colour}
      <br />

      <button onClick={handlecolour}>Change Colour</button>
      <br /><br />
      <Counter />


      <br/><br/>
    
      <button onClick={()=>username=="Aditya Kumar"?setusername("Anurag Kumar"):setusername("Aditya Kumar")}>Change</button>
      <button onClick={()=>setDisplay(!display)} >Hide and Show</button>
      {display? <h3>{username}</h3>:null}
      
    </>
  )
}

function Fruits(){
  return(
    <div>
      <h3>Fruits are healthy</h3>
    </div>
  )
}
function sum(){
  return(
    10+20+30
  )
}

function oper(){
    return(
      2
    )
}

export default App
