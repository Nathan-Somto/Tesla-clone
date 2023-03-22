import React from "react";
import Header from '../../components/Header';
import NavBar from '../../components/Navbar';
import Section from '../../components/Section';
import Footer from '../../components/Footer';

function HomePage() {
  const sectionData=[
    {
      heading:'Model Y',
      para:'',
      src:'../../../assets/h-my.webp',
      btnText:['Order now','Custom drive']
    },
    {
      heading:'Model S',
      para:'Schedule a Demo Drive',
      src:'../../../assets/ms.jpg',
      underline:true,
      btnText:['Custom order','View Inventory']

    }
    ,{
      heading:'Model X',
      para:'Schedule a Demo Drive',
      src:'../../../assets/h-mx.webp',
      underline:true,
      btnText:['Custom order','View Inventory']
    },
    {
      heading:'Solar Panels',
      para:'Lowest Cost Solar Panels in America',
      src:'../../../assets/solar-panel.jpg',
      underline:false,
      btnText:['Order now','Learn More']
    },{
      heading:'Solar roof',
      para:'Produce clean energy from your roof',
      src:'../../../assets/solar-roof.jpg',
      underline:false,
      btnText:['Order now','Learn More']
    },{
      heading:'Accessories',
      src:'../../../assets/accessories.jpg',
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