function College(props){
    return(
        <div>
            <h1>College component</h1>
            <h2>{props.names[0]},{props.names[1]},{props.names[2]}</h2>
        </div>
    )
}
export default College