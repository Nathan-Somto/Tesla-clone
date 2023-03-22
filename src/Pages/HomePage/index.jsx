import React from "react";
import Header from '../../components/Header';
import NavBar from '../../components/Navbar';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import hmy from '../../../assets/h-my.webp';
import ms from '../../../assets/ms.jpg';
import hmx from '../../../assets/h-mx.webp';
import solarPanel from '../../../assets/solar-panel.jpg';
import solarRoof from '../../../assets/solar-roof.jpg';
import acc from '../../../assets/accessories.jpg';
function HomePage() {
  const sectionData=[
    {
      heading:'Model Y',
      para:'',
      src:hmy,
      btnText:['Order now','Custom drive']
    },
    {
      heading:'Model S',
      para:'Schedule a Demo Drive',
      src:ms,
      underline:true,
      btnText:['Custom order','View Inventory']

    }
    ,{
      heading:'Model X',
      para:'Schedule a Demo Drive',
      src:hmx,
      underline:true,
      btnText:['Custom order','View Inventory']
    },
    {
      heading:'Solar Panels',
      para:'Lowest Cost Solar Panels in America',
      src:solarPanel,
      underline:false,
      btnText:['Order now','Learn More']
    },{
      heading:'Solar roof',
      para:'Produce clean energy from your roof',
      src:solarRoof,
      underline:false,
      btnText:['Order now','Learn More']
    },{
      heading:'Accessories',
      src:acc,
      para:'',
      underline:false,
      btnText:['Shop now']

    }
  ];
  return (
    <>
    <div className=" text-gray-700  snap-mandatory snap-y  h-screen overflow-y-scroll ">
      <NavBar color={'text-gray-700'} logoColor={'#000'}/>
      <Header/>
      <main>
        {
          sectionData.map( data=><Section key={data.heading} heading={data.heading} src={data.src} para={data.para} underline={data.underline} btnText={data.btnText}/>)
        }
      </main>
      <Footer/>
    </div>
   
    </>
  );
}
export default HomePage;
