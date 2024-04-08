import React from 'react'
import { Link } from 'react-router-dom'
import Navcard from './Navcard'
import Admin from './Admin/Admin'

const Navbar = () => {
  return (
    <div className='flex flex-col'>
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full min-h-14 m-0 flex'>
    <div className='w-[1050px] m-auto flex items-center'>
      <div className='text-cyan-950 flex w-full justify-between text-xl flex-wrap'>
         <div className=''>
          img
         </div>
         <div className='flex gap-11 flex-wrap'>
           <Link to="/Home" >Home</Link>
           <Link to="/AboutUs" >About</Link>
           <Link to="/contact" >Contact</Link>
           <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button border-none">Notification</label>
           </div> 
           
         </div>
         <div className=''>
          <div><Link to="/login" >Login</Link></div>
         </div>
         <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-4">
                  {/* Sidebar content here */}
                  <Navcard/>
                  <Navcard/>
                  <Navcard/>
                  <Navcard/>
                  <Navcard/>
                  <Navcard/>
                  <Navcard/>
                </ul>
              </div>
          </div>
      </div>
      </div>
     
    </div>
    
    </div>
  )
}

export default Navbar