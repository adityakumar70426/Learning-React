import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User, { Userobj } from './User'
import College from './College'
import Student from './Student'
import Wrapper from './Wrapper'

function App() {
  const [student, setstudent] = useState()

  let name="Aditya Kumar"
  let age=25


  let userobj={
    username:"Ashish",
    userage:"24"
  }

  let userobj2={
    username:"Anish",
    userage:"29"
  }

  let collegenames=["IIT","NIT","IIIT","VIT","NSUT","DTU"]

  return (
      <div>
        <User name="Anurag Kumar" email="ak123@gmail.com"
        age={age}
        user={userobj}/>

        <hr />

        <h2>{name}</h2>
        <hr />

        <Userobj user={userobj} />
        <hr />
        <Userobj user={userobj2} />

        <hr />

        <College names={collegenames} />

        <hr />

        {student && <Student name={student}/>}
        <button onClick={()=>setstudent("Bhaskar")}>Update student name</button>

        <hr />
        <Wrapper color="green">
          <h1>Wrapper Component 1</h1>
        </Wrapper>


        <Wrapper>
          <h1>Wrapper Component 2</h1>
        </Wrapper>

      </div>
  )
}

export default App
