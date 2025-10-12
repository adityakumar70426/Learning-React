function User({displayName}){
    const name="Ak";
    return(
        <div>
            <button onClick={()=>displayName(name)}>Display Name</button>
        </div>
    )
}
export default User