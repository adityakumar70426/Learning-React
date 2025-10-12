import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserInput from './UserInput'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef=useRef(null)

  const updateInput=()=>{
    inputRef.current.value=1000;
    inputRef.current.focus();
    inputRef.current.style.color="red";
  }

  return (
    <div>
      <h2>Forward Ref</h2>
      <UserInput ref={inputRef}/>
      <button onClick={updateInput}>Update</button>

    </div>
  )
}

export default App
