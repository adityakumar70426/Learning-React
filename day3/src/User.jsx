function User({data}){
    return(
        <div style={{border:"5px solid black",margin:"5px"}}>
            <h3>Name:{data.name}</h3>
            <h3>Age:{data.age}</h3>
            <h3>email:{data.email}</h3>
            <br />
        </div>
    )
}
export default User