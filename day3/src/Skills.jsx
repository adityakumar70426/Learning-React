import { useState } from "react";

function Skills() {
    const [skills, setSkills] = useState([])
    const handleSkills = (event) => {
        if (event.target.checked) {
            setSkills([...skills, event.target.value])
        }
        else {
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return (
        <div>
            <h2>Select your Skills</h2>
            <input onChange={handleSkills} type="checkbox" name="C++" id="cpp" value="cpp" />
            <label htmlFor="cpp"> C++</label>
            <br />
            <input onChange={handleSkills} type="checkbox" name="python" id="python" value="python" />
            <label htmlFor="python"> Python</label>
            <br />
            <input onChange={handleSkills} type="checkbox" name="dsa" id="dsa" value="dsa" />
            <label htmlFor="dsa"> DSA</label>

            <h2>{skills.toString()}</h2>
        </div>
    )
}
export default Skills