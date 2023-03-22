import React from 'react'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import HeroData from '../../Data/HeroData'

function SolarPanel() {
  return (
    <>
    <Navbar color={'text-[#000]'} logoColor={'#000'}/>
   {
     HeroData['solar panel'].map( item=>(
       <Hero key={'solar panel'} dark={item.dark} heading={item.heading} para={item.para} src={item.src} Cta={item.Cta} underline={item.underline} topStats={item.topStats} btmStats={item.btmStats}/>
     ))
   }
   </>
  )
}

export default SolarPanel