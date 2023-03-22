import React from 'react';
import model3 from '../../../assets/m3.jpg';
import Button from '../Buttons';
import DownArrow from '../DownArrow';
function Header() {
  return (
    <header className=' max-h-screen w-full snap-start snap-always'>
        <div className='relative'>
        <div className='top-[15%] left-0 right-0 m-auto bottom-0 text-center absolute'>
            <h1 className=' text-[2rem] md:text-[2.8rem] text-gray-900'>Model 3</h1>
            <p>Order Online for <span className='underline'>Touchless Delivery</span></p>
        </div>
        <img src={model3} alt="model 3"  className='h-screen w-full object-cover'/>
        <div className='absolute bottom-[10%] md:bottom-[20%] flex  flex-col md:flex-row  items-center justify-center w-full space-y-4 md:space-x-5 md:space-y-0'>
            <Button color='btn-dark-gray' text="custom order"/>
            <Button color='btn-light-gray' text="Existing Inventory"/>
        </div>
        <DownArrow color={'#000'} size={'20px'}/>
        </div>
    </header>
  )
}

export default Header