import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [pending1,setPending1]=useState(false);

  const handleButton1=async()=>{
    setPending1(true);
    await new Promise(response=>setTimeout(response,2000));
    setPending1(false);
  }

  const [pending2,startTransition]=useTransition();

  const handleButton2=()=>{
    startTransition(async()=>{
      await new Promise(response=>setTimeout(response,5000));
    })
    
    
  }

  return (
    <div>
      <h2>Using state</h2>
      <button disabled={pending1} onClick={handleButton1}>Click</button>
      <br /><hr />
      <h2>Using transition hook</h2>
      {
        pending2?<img style={{width:"100px"}} src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" srcset="" />
        :null
      }
      <button disabled={pending2} onClick={handleButton2}>Click</button>
    </div>
  )
}

export default App




