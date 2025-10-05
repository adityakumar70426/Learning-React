import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import College from './College'
import CountComp from './CountComp'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

  const [counter,setCounter]= useState(0)

  useEffect(()=>(
    callOnce()
  ),[count])

  function callOnce(){
    console.log("callOnce function called")
  }
  

  const collegeData = [
    {
      name: "IIT",
      city: "Delhi",
      website: "iitdelhi.com",
      student: [
        {
          name: "Akiitd",
          age: "22",
          email: "Akiitd@gmail.com"
        },
        {
          name: "Bkiitd",
          age: "24",
          email: "Bkiitd@gmail.com"
        },
        {
          name: "Ckiitd",
          age: "21",
          email: "Ckiitd@gmail.com"
        }
      ]
    },
    {
      name: "NIT",
      city: "Trichy",
      website: "nittrichy.com",
      student: [
        {
          name: "Aknitt",
          age: "25",
          email: "nittd@gmail.com"
        },
        {
          name: "Bknitt",
          age: "22",
          email: "Bknitt@gmail.com"
        },
        {
          name: "Cknitt",
          age: "26",
          email: "Cknitt@gmail.com"
        }
      ]
    },
    {
      name: "IIIT",
      city: "Bhopal",
      website: "iiitbhopal.com",
      student: [
        {
          name: "Akiiitb",
          age: "23",
          email: "Akiiitb@gmail.com"
        },
        {
          name: "Bkiiitb",
          age: "21",
          email: "Bkiiitb@gmail.com"
        },
        {
          name: "Ckiiitb",
          age: "23",
          email: "Ckiiitb@gmail.com"
        }
      ]
    }
  ]

  return (
    <div>
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college}/>
        </div>
      ))}


      <br /><hr />
      <h2>UseEffect Hooks</h2>
      <button onClick={()=>setCount(count+1)}>Counter : {count}</button>
      <button onClick={()=>setData(data+1)}>Data : {data}</button>

      <br /><hr />
       
      <h1>Handle prop</h1> 
      <CountComp counterdata={counter}/>
      <button onClick={()=>setCounter(counter+1)}>Counter : {counter}</button>

    </div>
  )
}

export default App
