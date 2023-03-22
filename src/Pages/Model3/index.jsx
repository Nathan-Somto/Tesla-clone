import React from 'react'
import Hero from '../../components/Hero';
import HeroData from '../../Data/HeroData';
import NavBar from '../../components/Navbar';

function Model3() {
  return (
    <>
    <NavBar color={'text-[#fff]'} logoColor={'#fff'}/>
    {
      HeroData['model 3'].map( item=>(
        <Hero key={'model 3'} heading={item.heading} dark={item.dark} para={item.para} src={item.src} Cta={item.Cta} underline={item.underline} topStats={item.topStats} btmStats={item.btmStats}/>
      ))
    }
   </>
  )
}

export default Model3;