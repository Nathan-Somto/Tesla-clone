import React from 'react'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import HeroData from '../../Data/HeroData'

function ModelX() {
  return (
    <>
     <Navbar color={'text-[#000]'} logoColor={'#000'}/>
    {
      HeroData['model x'].map( item=>(
        <Hero heading={item.heading} key={'model x'} dark={item.dark} para={item.para} src={item.src} Cta={item.Cta} underline={item.underline} topStats={item.topStats} btmStats={item.btmStats}/>
      ))
    }
    </>
  )
}

export default ModelX