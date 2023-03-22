import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/tesla.svg';
import DesktopNav from '../DesktopNav';
import MobileNav from '../MobileNav';

function Navbar({color,logoColor}) {
    const [display, setDisplay] = useState(false);
  return (
   <nav className={`flex absolute top-0 z-[10] w-full h-16 py-2 px-8 items-center justify-between lg:justify-start  font-semibold  lg:text-md ${color}`}>
   <Link to='/'>   <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon h-[8rem] w-[8rem] lg:mr-[10%]" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill={logoColor}></path></svg></Link>
      <DesktopNav setDisplay={setDisplay}/>
      <MobileNav display={display} setDisplay={setDisplay}/>
      <a onClick={()=>setDisplay(prevState=>!prevState)} className={`lg:hidden bg-[rgba(197,196,196,0.55)]  ${!display?'block ':'hidden'} rounded-[14px] px-3 py-[0.35rem] text-black/80 cursor-pointer backdrop-blur-lg`}>Menu</a>
   </nav>
  )
}

export default Navbar