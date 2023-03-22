import React from 'react'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import HeroData from '../../Data/HeroData'

function SolarRoof() {
  return (
    <>
     <Navbar color={'text-[#fff]'} logoColor={'#fff'}/>
    {
      HeroData['solar roof'].map( item=>(
        <Hero key={'solar roof'} heading={item.heading} para={item.para} src={item.src} Cta={item.Cta} underline={item.underline} topStats={item.topStats} btmStats={item.btmStats}/>
      ))
    }
    </>
  )
}

export default SolarRoof