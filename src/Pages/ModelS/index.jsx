import React from 'react'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import HeroData from '../../Data/HeroData'
function ModelS() {
  return (
    <>
    <Navbar color={'text-[#000]'} logoColor={'#000'}/>
    {
      HeroData['model s'].map( item=>(
        <Hero key={'model s'} heading={item.heading} dark ={item.dark} para={item.para} src={item.src} Cta={item.Cta} underline={item.underline} topStats={item.topStats} btmStats={item.btmStats}/>
      ))
    }
   </>
  )
}

export default ModelS