function Wrapper({children,color="red"}){
    return(
        <div style={{color:color,border:"5px solid black",backgroundColor:"grey",margin:"10px 5px"}}>
            {children}
        </div>
    )
}
export default Wrapper