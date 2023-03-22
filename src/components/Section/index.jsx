import { motion } from 'framer-motion'
import React from 'react'
import Button from '../Buttons'

function Section({heading, para,src, btnText ,underline}) {
 
  return (
    <section className='relative snap-start snap-always'>
        <motion.div initial={{opacity:0, top:'0%'}} whileInView={{opacity:[0,0,0,0,1] ,top:['5%','7%','10%']}} transition={{ease:'easeIn', duration:0.3, delay:0.2}} className=' left-0 right-0 m-auto bottom-0 text-center absolute transition-[top] duration-300 ease-in'>
            <h1 className={` text-[2rem] md:text-[2.8rem] text-gray-900 `}>{heading}</h1>
            <p className={`${underline?'underline':''}`}>{para}</p>
        </motion.div>
        <img src={src} alt=""  className='h-screen w-full object-cover'/>
          <motion.div  initial={{opacity:0, bottom:'50%'}} whileInView={{opacity:[0,0,0.5,1] ,bottom:['40%','30%','20%','10%']}} className='absolute   flex  flex-col md:flex-row  items-center justify-center w-full space-y-4 md:space-x-5 md:space-y-0'>
          <Button color='btn-dark-gray' text={`${btnText[0]}`}/>
         {btnText[1] &&  <Button color='btn-light-gray' text={`${btnText[1]}`}/>}
        </motion.div>
    </section>
  )
}

export default Section