import React from 'react'
import Logo from '../shared/Logo'
import logoBold from '../assets/logo.svg'
import Nav from '../shared/Nav'

import '../styles/Header.scss'

const Header = () => {
  return (
    <header className="header">
        <Logo 
            image={logoBold} 
            width={83} 
            height={'auto'} 
            alt={'boldco'}/>
        
        <Nav />
    </header>
  )
}

export default Header