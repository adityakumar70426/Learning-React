import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Skills from './Skills'
import User from './User'

function App() {
  const [name, setName] = useState("Username")
  const [gender, setGender] = useState('male')
  const [city, setCity] = useState('delhi')

  const username = ["userA", "userB", "userC"];
  const userobj = [
    {
      name: 'Akumar',
      age: '24',
      email: 'ak123@gmail.com'
    },
    {
      name: 'Bkumar',
      age: '27',
      email: 'bk123@gmail.com'
    },
    {
      name: 'Ckumar',
      age: '22',
      email: 'ck123@gmail.com'
    }
  ]

  return (
    <>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name" />

      <h3>{name}</h3>
      <button onClick={() => setName("")}>Clear</button>

      <br />
      <hr />

      <Skills />

      <br /><hr />

      <h2>Select Gender : {gender}</h2>
      <input onChange={(event) => setGender(event.target.value)} checked={gender == 'male'} type="radio" name="gender" id="male" value="male" />
      <label htmlFor="male"> Male</label>
      <br />
      <input onChange={(event) => setGender(event.target.value)} checked={gender == 'female'} type="radio" name="gender" id="female" value="female" />
      <label htmlFor="female"> Female</label>

      <br />
      <h2>Select City : {city}</h2>
      <select name="" id="" defaultValue={"delhi"} onChange={(event) => setCity(event.target.value)} >
        <option value="gurugram">Gurugram</option>
        <option value="delhi">Delhi</option>
        <option value="noida">Noida</option>

      </select>


      <br /><hr />


      <h2>{username[1]}</h2>

      <table border="1px">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {
            userobj.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>

      </table>


      <br /><hr />

      

      {
        userobj.map((user)=>(
          <div key={user.email}>
             <User data={user}/>
          </div>
        ))
      }
    </>
  )
}

export default App
