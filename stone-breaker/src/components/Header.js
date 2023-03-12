import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import '../styles/Header/Header.css'
import '../styles/Header/sidemenu.css'
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClick = (e) => {
    setShowDropdown(!showDropdown);
  };

  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.clear();
    navigate("/login")
  }
  const closeSideMenu = () => {
    setShowDropdown(!showDropdown)
  }
  return (
    <div className='header'>
      <h1 className='header__logo'><Link to="/" className='header__logo_link corsor-pointer'>Logo</Link></h1>
      <input className='header_search'></input>

      <div className='header__list d-flex'>

        <Link to="/cart" className='header-item header_to_cart mr-2'> <Icon.ShoppingCart size={20}/></Link>
        <Link to="/user-profile" className='header-item header_to_cart mr-2'><Icon.User size={25}  className='header-item' /></Link>
        <Icon.List size={25} onClick={handleDropdownClick} className="header-item open_side_menu cursor-pointer" />
          {showDropdown && (
            <div className="side-menu-container" id='dropdownList'>
              <span className="close_sidemenu cursor-pointer" onClick={closeSideMenu}>
                <Icon.X size={20}
                />
              </span>
              <span className="menu-item cursor-pointer">
                <Icon.User size={20} className="mr-2" />
                User Profile
              </span>
              <span className="menu-item cursor-pointer" onClick={logout}>
                <Icon.LogOut className="mr-1" size={20} />
                Logout
              </span>
            </div>

          )}
      </div>

    </div>
  )
}

export default Header