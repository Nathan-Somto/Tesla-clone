import React from 'react'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import HeroData from '../../Data/HeroData'

function ModelY() {
  return (
    <>
    <Navbar color={'text-[#fff]'} logoColor={'#fff'}/>
   {
     HeroData['model y'].map( item=>(
       <Hero key={'model y'} heading={item.heading} dark={item.dark} para={item.para} src={item.src} Cta={item.Cta} underline={item.underline} topStats={item.topStats} btmStats={item.btmStats}/>
     ))
   }
   </>
  )
}

export default ModelY