function User( props /* or we can pass {name} */ ){
    return(
        <div>
            <h1>This is coming from user componenet</h1>
            <h2>{props.name} </h2> 
            <h2>{props.email}</h2>
            <h2>{props.age}</h2>

        </div>
    )
}

export function Userobj({user}){
    return(
        <div>
            <h2>{user.username}</h2>
            <h2>{user.userage}</h2>
        </div>
    )
}

export default User