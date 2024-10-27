import React from 'react'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'

export const NavItems = () => {
  return (
    
    <nav className='navbar'>
        <a href="/" className='navBar-title'>
        Portfolio
        </a>
            <ul className='navbar-list'>
                <ItemNavbar content='Home'/>
                <ItemNavbar content='AboutMe'/>
                <ItemNavbar content='Projects'/>
                <ItemNavbar content='ContactMe'/>
                <ItemNavbar content='OtherRoutes'/>

            </ul>

        </nav>
        
  )
}

