import { Navigate, Route, Router, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'
import PageNotFound from './PageNotFound'
import College from './College'
import Student from './Student'
import Department from './Department'
import Details from './Details'
import UserList from './UserList'
import UserDetail from './UserDetail'

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <Routes>

        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/users/:id' element={<UserDetail />} />
         

         <Route path='in'>
         <Route path='/in/user'>
         <Route path="/in/user/login" element={<Login />} />
         <Route path="/in/user/about" element={<About />} />
         </Route>
         </Route>

        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='detail' element={<Details />} />

        </Route>

        <Route path='/*' element={<PageNotFound />} />
        {/* <Route path='/*' element={<Navigate to="/" />} /> */}




      </Routes>
    </>
  )
}

export default App