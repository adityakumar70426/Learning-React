import Student from "./Student"

function College({ college }) {
    return (
        <div>
            <h2>Name : {college.name}</h2>
            <ul>
                <li><h3>City : {college.city}</h3></li>
                <li><h3>Website : {college.website}</h3></li>
                <li>
                    <Student student={college.student}/>
                </li>

            </ul>
        </div>
    )
}
export default College