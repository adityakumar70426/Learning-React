import { useEffect, useState } from "react";

import './App.css'
export default function App() {

  const [userData,setUserData]=useState([]) 
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    getUserData();
  },[])

  const getUserData = async()=>{
    const url="https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response.users);
    setUserData(response.users)
    setLoading(false)
    
  }
  return (
    <div>
      <h1>Integrate JSON Server API and Loader</h1>
      <ul className="user-list user-list-head">
          <li>Name</li>
          <li>Age</li>
          <li>Email</li>

         </ul>
      {
        !loading?
        userData.map((user)=>(
         <ul key={user.name} className="user-list">
          <li>{user.firstName}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>

         </ul>
        ))
        :<h1>Data Loading...</h1>
      }
   
    </div>
  )
}
