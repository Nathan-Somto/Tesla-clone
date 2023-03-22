import React from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import HomePage from './Pages/HomePage';
import Model3 from './Pages/Model3';
import ModelS from './Pages/ModelS';
import SolarRoof from './Pages/SolarRoof';
import ModelX from './Pages/ModelX';
import ModelY from './Pages/ModelY';
import SolarPanel from './Pages/SolarPanel';

const router = createBrowserRouter([
{
	path:'/',
	element:<HomePage/>
}
,{
	path:'/model3',
	element:<Model3/>
}
,{
	path:'/models',
	element:<ModelS/>
}
,{
	path:'/solarroof',
	element:<SolarRoof/>
}
,{
	path:'modelx',
	element:<ModelX/>
}
,{
	path:'/modely',
	element:<ModelY/>
}
,{
	path:'solarpanels',
	element:<SolarPanel/>
}
])
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router}/>);
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
