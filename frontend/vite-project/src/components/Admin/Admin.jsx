import React from 'react'
import { Link } from 'react-router-dom'
import Divider from '../Divider'
import Hdivider from '../Hdivider'

const Admin = () => {
  return (

    <div className='w-[200px] h-[730px] flex flex-col items-center border-r-2 border-r-slate-700 mt-0'>
    <div className='h-[32px] w-full flex items-center justify-center hover:bg-indigo-500'><Link to="/profile">Profile</Link></div>
     <div className='bg-slate-700 h-[2px] w-full mt-0'> </div>
     <div className='h-[32px] w-full flex items-center justify-center hover:bg-indigo-500'><Link to="/notification">Notification</Link></div>
     <div className='bg-slate-700 h-[2px] w-full'> </div>
     <div className='h-[32px] w-full flex items-center justify-center hover:bg-indigo-500'><Link to="/student">All Student</Link></div>
     <div className='bg-slate-700 h-[2px] w-full'> </div>
     <div className='h-[32px] w-full flex items-center justify-center hover:bg-indigo-500'><Link to="/admin">Create Admin</Link></div>
     <div className='bg-slate-700 h-[2px] w-full'> </div>
     <div className='h-[32px] w-full flex items-center justify-center hover:bg-indigo-500'><Link to="/comapny">Comapny List</Link></div>
     <div className='bg-slate-700 h-[2px] w-full'> </div>
     <div className='h-[32px] w-full flex items-center justify-center hover:bg-indigo-500'><Link to="/logout">Logout</Link></div>
    </div>
   
   

  )
}

export default Admin
