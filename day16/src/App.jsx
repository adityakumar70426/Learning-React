import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";
import Home from "./Home";
import About from "./About";

export default function App() {

  return (
    <div>
      <h2>React router setup</h2>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/about">About</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>

    </div>
  )

}
