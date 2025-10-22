
import { Link, NavLink, Outlet } from "react-router";

export default function College(){
    return<div  className="college" style={{textAlign:'center'}}>
        <h1>College Page</h1>
        <h3><Link to="/">Go Back to Home</Link></h3>
        <NavLink className="link" to="">Student</NavLink>
        <NavLink className="link" to="department">Departments</NavLink>
        <NavLink className="link" to="detail">College Details</NavLink>
        <Outlet />

    </div>
}