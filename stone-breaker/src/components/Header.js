import React from 'react'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import '../styles/Header/Header.css'
const Header = () => {
  return (
    <div className='header'>
        <h1 className='header__logo'><Link to="/" className='header__logo_link corsor-pointer'>Logo</Link></h1>
        <input className='header_search'></input>
        
        <div className='header__list d-flex'>
            
            <Icon.User size={25}/>
          
            <Icon.List size={25}/>

        </div>
    
    </div>
  )
}

export default Header