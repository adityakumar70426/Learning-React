
import { useState } from "react";

export default function App() {
const [data,setData]=useState([
  'anil','sam','peter','tony'
])

const [dataDetails,setDataDetails]=useState([
  { name:'anil',age:'29'},
  { name:'sam',age:'25'},
  { name:'peter',age:'33'},
])

const handleUser=(name)=>{

 data[data.length-1]=name;
 console.log(data);
 setData([...data])
 
}

const handleAge=(age)=>{

  dataDetails[dataDetails.length-1].age=age;
  console.log(dataDetails);
  setDataDetails([...dataDetails])
  
 }
  return (
    <div>
      <h1>Updating Array in State</h1>
      <input type="text" placeholder="enter last user name"
      onChange={(e)=>handleUser(e.target.value)}
       />
      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }
     
     <hr />

     <input type="text" placeholder="enter last user age"
      onChange={(e)=>handleAge(e.target.value)}
       />
     {
      dataDetails.map((item,index)=>(
        <h4 key={index}>{item.name}, {item.age}</h4>
      ))
     }
    </div>
  );
}
