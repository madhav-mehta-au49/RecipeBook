import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

function Sidebar({Links , close}) {

  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();

  return (
    <div className='sidebar' onClick={close}>
        { Links.map(link =>(
                    <Link to={link.path} className='sidebar-link' key={link.name}>
                        <FontAwesomeIcon icon={link.icon} />
                        {link.name}</Link>
                  )) }
                    {isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>) : (<button onClick={() => loginWithRedirect()}>Log In</button>)}
    </div>
  )
}

export default Sidebar
