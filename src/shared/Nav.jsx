import React from 'react'
import '../styles/Nav.scss'

const Nav = () => {
  return (
    <nav className='main-nav'>
        <ul className='nav-menu'>
            <li><a href='#'>Mi negocio</a></li>
            <li><a href='#'>ayuda</a> &nbsp; <i className="fas fa-question-circle" style={{color:'#fff'}}></i> </li>
        </ul>
    </nav>
  )
}

export default Nav