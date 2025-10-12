import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from './User'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const displayname=(name)=>{
    alert(name)
  }

  return (
    <div>
      <h2>Call parent component function from child component</h2>
      <User displayName={displayname}/>
    </div>
  )
}

export default App
