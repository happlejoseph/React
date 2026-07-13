import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (

    <div>

    <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'gray', padding:'20px'}}>
        <Link>Logo</Link>
    
        <div>

        <Link to={'/nav'}>Home</Link>
        <Link to={'user-context'}>Usercontext</Link>
        <Link to={'fun-comp'}>Funcomp</Link>

        </div>
    </div>

    <Outlet/>
    </div>
    
  )
}

export default Navbar
