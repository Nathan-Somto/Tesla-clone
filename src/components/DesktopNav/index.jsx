import React from 'react'
import { Link } from 'react-router-dom'

function DesktopNav({setDisplay}) {
  return (
    <div className="w-[80%] flex-shrink-0 hidden lg:flex">
    <ul className='flex space-x-6 items-center mx-auto  desktopNav'>
        <li><Link to='/models'>Model S</Link></li>
        <li><Link to='/model3'>Model 3</Link></li>
        <li> <Link to="/modelx">Model X</Link></li>
        <li> <Link to='/modely'>Model Y</Link></li>
        <li><Link to='/solarroof'>Solar Roof</Link></li>
        <li><Link to="/solarpanels">Solar Panels</Link></li>
    </ul>
    <ul className='flex space-x-6 items-center cursor-pointer desktopNav'>
        <li>Shop</li>
        <li>Account</li>
        <li onClick={()=> setDisplay(prevState => !prevState)}>Menu</li>
    </ul>
    </div>
  )
}

export default DesktopNav