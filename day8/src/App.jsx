import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserInput from './UserInput'
// import './App.css'
import {useFormStatus} from 'react-dom'

function App() {
  const [count, setCount] = useState(0)
  const inputRef=useRef(null)

  const updateInput=()=>{
    inputRef.current.value=1000;
    inputRef.current.focus();
    inputRef.current.style.color="red";
  }
  const handlesubmit=async()=>{
    await new Promise(res=>setTimeout(res,2000));
    console.log("submitted");
  }

  function CustomerForm(){
    const {pending}=useFormStatus();
    console.log(pending);
    return(
      <div>
        <input type="text" placeholder='Enter Name' />
        <br />
        <input type="text" placeholder='Enter password' />
        <br />
        <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
      </div>
    )
  }

  return (
    <div>
      <h2>Forward Ref</h2>
      <UserInput ref={inputRef}/>
      <button onClick={updateInput}>Update</button>


      <br /><br />
      <hr />
      

      <h2>useFormStatus hook</h2>
      <form action={handlesubmit}>
       <CustomerForm />
      </form>

    </div>
  )
}

export default App



// import {useFormStatus} from 'react-dom'
// function App() {


//   const handleSubmit=async ()=>{
//     await new Promise(res=>setTimeout(res,5000));
//     console.log("submit");
    
//   }

//   function CustomerForm(){
//     const {pending,data,method} =useFormStatus();
//     console.log(pending,data,method);
    
//     return(
//       <div>
//         <input type="text" placeholder="Enter Name" />
//       <br />
//       <br />
//       <input type="text" placeholder="Enter Password" />
//       <br />
//       <br />
//       <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>

//       </div>
//     )
//   }
//   return (
//    <div>
//     <h1>useFormStatus Hook in React js 19</h1>
//     <form action={handleSubmit} method='post'>
//       <CustomerForm />
//     </form>
//    </div>

//   );
// }

// export default App;