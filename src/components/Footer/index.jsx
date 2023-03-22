import React from 'react'

function Footer() {
  return (
   <footer className='flex w-full md:flex-row text-gray-500 flex-col px-3 snap-start snap-always items-center space-x-6 justify-center'>
    <p>Tesla  © 
 {new Date().getFullYear()}</p>
    <p>Privacy & Legal</p>
    <p>Vehicle Recalls</p>
    <p>Careers</p>
    <p>News</p>
   </footer>
  )
}

export default Footer