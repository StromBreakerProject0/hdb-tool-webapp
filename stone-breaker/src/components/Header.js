import React from 'react'
import * as Icon from 'react-feather'
const Header = () => {
  return (
    <div>
        <h1>Logo</h1>
        <ul>
            <li>
                listItem1
            </li>
            <li>
                listItem2
            </li>
            <li>
                listItem3
            </li>
        </ul>
        <div>
            <Icon.List size={20}/>
        </div>
    </div>
  )
}

export default Header