import dollar from '../../assets/dollar.svg';
import solarPanel from '../../assets/solar-panel.svg';
import m3p from '../../../assets/m3-p.jpg';
import msp from '../../../assets/ms-p.webp';
import srStorm from '../../../assets/sr-storm.png';
import mxp from '../../../assets/mx.jpg';
import myp from '../../../assets/my-p.jpg';
import solarPanel from '../../../assets/solar-panel.jpg';
import React from 'react';
const HeroData ={
    'model 3':[
        {
            heading:'Model 3',
            para:'Schedule a Demo Drive',
            underline: true,
            src:m3p,
            topStats:['3.1s', '358mi','AWD'],
            btmStats:['0-60mph','Range(EPA est.)','Dual Motor'],
            Cta:[{text:'Order now',style:'btn-white-outline'}]
        }
    ],
    'model s':[
        {
            heading:'Model S',
            para:'Plaid',
            underline: false,
            src:msp,
            topStats:['396mi', '199s','200mph' ,'1,020hp'],
            btmStats:['Range (EPA est.)','0-60 mph*','Top Speed*','peak power'],
            Cta:[{text:'View Inventory',style:'btn-white-outline'},{text:'Order now',style:'btn-dark-gray'}]
        }
    ]
    ,  'solar roof':[
        {
            heading:'Solar Roof',
            para:'',
            underline: false,
            src:srStorm,
            topStats:[ React.createElement('img', { src: solarPanel, alt: 'solar Panel' }), '25-Year','24/7'],
            btmStats:['Beautiful \n Solar','Tile\nWarranty','Outage\nProtection'],
            Cta:[{text:'Order now',style:'btn-white-outline'}]
        }
    ],
    'model x':[
        {
            heading:'Model X',
            para:'Plaid',
            underline: false,
            src:mxp,
            topStats:['333mi', '2.5s','9.9s','1020hp'],
            btmStats:['Range (EPA est.)','0-60 mph*','1/4 Mile','peak power'],
            Cta:[{text:'View Inventory',style:'btn-white-outline'},{text:'Order now',style:'btn-dark-gray'}]
            
        }
    ]
    ,
    'model y':[
        {
            heading:'Model Y',
            para:'Schedule a Demo Drive',
            underline:true,
            src:myp,
            topStats:['76cuft', '330mi','AWD'],
            btmStats:['cargo Space', 'Range(EPA est.)', 'Dual Motor']
            , Cta:[{text:'Order now',style:'btn-white-outline'}]
        }
    ], 'solar panel':[
        {
            heading:'Solar For Existing Roofs',
            para:'',
            underline:false,
            dark:true,
            src:solarPanel,
            topStats:[ React.createElement('img', { src: solarPanel, alt: 'solar Panel' }),
            React.createElement('img', { src: dollar, alt: 'dollar sign' }),'24/7'],
            btmStats:['convert sunlight to energy', 'guaranteed lowest price for solar', 'Energy monitoring']
            , Cta:[{text:'Order now',style:'btn-white-outline'}]
        }
    ]
}
export default HeroData;
