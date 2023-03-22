import { AnimatePresence ,motion} from 'framer-motion'
import React, { useRef ,useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
function MobileNav({display,setDisplay}) {

  return (
  
      <>
      <AnimatePresence>
      {display&&(
      <motion.div initial={{opacity:0,}} animate={{opacity:1}} exit={{ opacity:[0.7,0,0,0]}}  transition ={{type:'easeIn', delay:0.2 , duration:0.3}}className={'fixed top-0 left-0 lg:w-[50%] w-[20%] backdrop-blur-md bg-[rgba(255,255,255,0.5)] h-screen'}>
        </motion.div>)}
        </AnimatePresence>
        <AnimatePresence>
      {display&&(
        
    <motion.div initial={{opacity:0, x:'100%'}} animate={{opacity:1, x:0}} exit={{ x:'100%'}} transition={{ease:'easeIn',duration:0.3}} className={`fixed top-0 right-0 h-screen w-[80%] lg:w-[50%] text-gray-500     bg-[#fff] overflow-y-scroll`}>
      <div className='h-[70px]   z-[10] bg-[rgb(255,255,255)]  sticky top-0 left-0' onClick={()=> setDisplay(prevState=>!prevState)}>
      <span className='text-[30px] w-full block text-right px-4  font-extralight cursor-pointer'>x</span>
      </div>
   <ul className='space-y-2  p-6 mobileNav '>
  <ul className='lg:hidden block'> <li><Link to='/models'>Model S</Link></li>
        <li><Link to='/model3'>Model 3</Link></li>
        <li> <Link to="/modelx">Model X</Link></li>
        <li> <Link to='/modely'>Model Y</Link></li>
        <li><Link to='/solarroof'>Solar Roof</Link></li>
        <li><Link to="/solarpanels">Solar Panels</Link></li>
        </ul>
    <li>Existing Inventory</li>
    <li>Used Inventory</li>
    <li>Trade-In</li>
    <li>Test Drive</li>
    <li>Powerwall</li>
    <li>Commercial Energy</li>
    <li>Utilities</li>
    <li>Charging</li>
    <li>Find us</li>
    <li>Support</li>
    <li>Investor Relations</li>
    <li>Shop</li>
    <li>Account</li>
   </ul>
   </motion.div>
      )}
       </AnimatePresence>
      </>
  
  )
}

export default MobileNav