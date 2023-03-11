import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Header/Header.css'
import '../styles/Header/sidemenu.css'
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClick = (e) => {
    setShowDropdown(!showDropdown);
  };
  
  const navigate = useNavigate();
  const logout=()=>{
    window.localStorage.clear();
    navigate("/login")
  }
  return (
    <div className='header'>
      <h1 className='header__logo'><Link to="/" className='header__logo_link corsor-pointer'>Logo</Link></h1>
      <input className='header_search'></input>

      <div className='header__list d-flex'>

        <Icon.User size={25} />
        <div className="dropdown_container">
          <Icon.List size={25} onClick={handleDropdownClick} className="cursor-pointer" />
          {showDropdown && (
            <div className="side-menu-container" id='dropdownList'>
              <Icon.User className="menu-item text-primary cursor-pointer" size={20} color="white"/>
              <Icon.LogOut className="menu-item text-primary cursor-pointer" onClick={logout} size={20}/>
            </div>

          )}
        </div>
      </div>

    </div>
  )
}

export default Header