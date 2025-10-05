import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import CountData from './CountData'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState(0);
  const [display,setDisplay]=useState(true)

  return (
    <div>
      {display? <CountData  counter={count} data={data} display={display}></CountData>:null}
      <button onClick={()=>setCount(count+1)}>Counter</button>
      <button onClick={()=>setData(data+1)}>Data</button>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </div>
  )
}

export default App
