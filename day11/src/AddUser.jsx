function AddUser({setUser}){
   
    return(
        <div>
            <h1>Add User </h1>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter User name" />
            <hr />
        </div>
    )
}


export default AddUser