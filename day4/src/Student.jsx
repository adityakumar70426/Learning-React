function Student({student}){
    return(
        <div>
            <h3>Students</h3>
                    {
                        student.map((student,index) => (
                            <div key={index}>
                                <ul>
                                    <li><h4>{student.name}</h4></li>
                                </ul>
                            </div>
                        ))
                    }
        </div>
    )
}
export default Student