import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const inputRef = useRef(null);
  const inputHandler = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "yellow";
  }
  const toggleHandler = () => {

    if (inputRef.current.style.display != 'none') {
      inputRef.current.style.display = 'none';
    }
    else {
      inputRef.current.style.display = 'inline';
    }
  }

  const userRef = useRef();
  const passwordRef = useRef();


  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    console.log(user, password);

  }

  const handleFormRef = (event) => {
    event.preventDefault()
    const user = userRef.current.value
    const password = passwordRef.current.value

    console.log("handleFormRef", user, password);
  }
  return (
    <div>
      <h1>Hello</h1>
      <input ref={inputRef} type="text" placeholder="Enter username" />
      <button onClick={inputHandler}>Focus on Input field</button>
      <button onClick={toggleHandler}>Toggle</button>


      <br /><hr />

      <h1>Uncontrolled Component</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="enter user name" />
        <br />
        <input type="password" id="password" placeholder="enter user password" />
        <br /><br />
        <button>
          Submit
        </button>
      </form>

      <hr />

      <h1>Uncontrolled Component with useRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id="userRef" placeholder="enter user name" />
        <br />
        <input type="password" ref={passwordRef} id="passwordRef" placeholder="enter user password" />
        <br /><br />
        <button>
          Submit with Ref
        </button>
      </form>

    </div>
  )
}

export default App
