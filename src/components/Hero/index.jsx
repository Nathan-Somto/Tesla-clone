import React from 'react'
import Button from '../Buttons'
import { motion } from 'framer-motion'

function Hero({heading, para, src,Cta,underline, topStats, btmStats ,dark}) {
  return (
    <header className={`relative ${!dark ?'text-slate-200' :'text-[#000]'} h-screen`}>
    <img src={src} alt="model 3 "  className=' w-full lg:h-auto  min-h-full   object-cover lg:object-scale-down'/>
    <div className='absolute top-[10%] text-center left-0 right-0 m-auto bottom-0'>
        <h1 className='text-[2rem] md:text-[2.8rem]'>{heading}</h1>
        <p className={`${!dark ?'text-slate-200 hover:text-[#fff]':'text-black/50 hover:text-[#000]'} ${underline ? 'underline':''} text-[1.2rem]  cursor-pointer hover:text-opacity-100 transition-all ease-in`}>{para}</p>
    </div>
    <motion.div  initial={{left:'-500%'}} animate={{left:'0%'}} transition={{duration:0.5, delay:0.2 }} className='absolute bottom-[25%] lg:bottom-[15%] flex flex-col w-full '>
    <div className='flex flex-col justify-between items-center'>
        <div className="flex justify-center items-center space-x-[3rem] lg:space-x-[6rem] text-center text-[1.25rem] lg:text-[1.8rem]  p-0 w-[80%] mx-auto">
        {
            topStats.map( (stat,index)=> (<p key={`${stat}-${index}`} className='lg:w-[5rem] w-[3.5rem]'>{stat}</p>))
           }

           
   
        </div>
        <div className='flex justify-center space-x-[3rem] lg:space-x-[6rem] items-center text-center w-[80%] mx-auto  text-[0.75rem] lg:text-[0.9rem] p-0'>
           {
            btmStats.map( (stat,index)=> (<p key={`${stat}-${index}`}  className='lg:w-[5rem] w-[3.5rem]'>{stat}</p>))
           }
        </div>
      
    </div>
   
    </motion.div>
    <div className={`absolute bottom-[5%] left-0 right-0 mx-auto flex flex-col lg:flex-row items-center justify-center ${Cta.length > 1 ? 'lg:space-x-3 space-y-3 lg:space-y-0':''}`}>
       {Cta.map((item, index) =><Button text={item.text} key={`${item.text}-${index}`}     color={item.style}/>)
}
        </div>
   </header>
  )
}

export default Hero