import logo from './logo.svg';
import './App.css';

import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Clinics from './Components/Clinics/Clinics';
import Analysis from './Components/Analysis/Analysis';
import Radiolodgy from './Components/Radiolodgy/Radiolodgy';
import Results from './Components/Results/Results';
import Contact from './Components/Contact/Contact';
import Appointment from './Components/Appointment/Appointment';
import Reserve from './Components/Reserve/Reserve';


function App() {


  let routes=createBrowserRouter([
    { path:"/",element:<LayOut />,children:[
      {path:"",element:<Home />},
      {path:"home",element:<Home />},
      {path:"about",element:<About />},
      {path:"clinic",element:<Clinics />},
      {path:"analsis",element:<Analysis />},
      {path:"radiology",element:<Radiolodgy />},
      {path:"result",element:<Results />},
      {path:"contact",element:<Contact />},
      {path:"appointment",element:<Appointment />},
      {path:"reserve",element:<Reserve />},
     
      
      
  
      {path:"*",element:<NotFound />},
  
    ]}
  ])
  return (<>
    <RouterProvider router={routes}></RouterProvider>
    </>
    );
}

export default App;
