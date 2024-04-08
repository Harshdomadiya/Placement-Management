import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Drowar from './components/Drowar'
import Admin from './components/Admin/Admin'
import Notification from './components/Admin/Notification'
import Student from './components/Admin/Student'
import Compny from './components/Admin/Compny'
import Cadmin from './components/Admin/Cadmin'
import Profile from './components/Admin/Profile'
import Logout from './components/Admin/Logout'


function App() {

  return (
   <div className='h-full w-full'>
      <Navbar/>
      <div className='bg-slate-700 h-[2px] w-full'> </div>
      <div className='flex'>
      <Admin/>
      
      {/* <Admin/> */}
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/notification" element={<Notification/>}></Route>
        <Route path="/student" element={<Student/>}></Route>
        <Route path="/comapny" element={<Compny/>}></Route>
        <Route path="/admin" element={<Cadmin/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
     
   </div>
   </div>
  )
}

export default App
