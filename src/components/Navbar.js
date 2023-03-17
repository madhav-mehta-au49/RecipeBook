import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { faHome , faList  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Links = [
    {
        name:"Home",
        path:"/",
        icon:faHome
    },
    {
        name:"Recipes",
        path:"/recipes",
        icon:faList
    }
    
]

function Navbar() {

  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();

const [showSidebar, setShowSidebar] = useState(false)

  function closeSidebar(){
    setShowSidebar(false)
  }  

  return (
    <>
      <div className='navbar container'>
        <a href='#!' className='logo'>F<span>oo</span>diesHub</a>
        <div className='nav-links'>
          {Links.map(link => (
            <Link to={link.path} key={link.name}>{link.name}</Link>

          ))}

          {isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>) : (<button onClick={() => loginWithRedirect()}>Log In</button>)}

        </div>
        <div className='sidebar-btn' onClick={() => setShowSidebar(!showSidebar)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} Links={Links} />}

    </>
  )
}

export default Navbar
