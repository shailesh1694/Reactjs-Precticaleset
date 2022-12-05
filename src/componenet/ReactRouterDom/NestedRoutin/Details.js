import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Details() {
  return (
    <div>
        <h1>Details Us</h1>
            <Link to='profile'>Profile</Link> <br />    
            <Link to='channel'>Channel</Link> <br />    
            <Link to='other'>Other</Link> <br />  
            <Outlet />  

        
        
    </div>
  )
}
