import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar'; 
import Fashion from './components/Pages/Fashion';
import Mobilität from './components/Pages/Mobilität';
import Ernährung from './components/Pages/Ernährung';
import Wohnen from './components/Pages/Wohnen';




function App() {
  return (
    <>
    <BrowserRouter>
   
      <Navbar />
  
      <Routes>
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/wohnen' element={<Wohnen/>}/>
        <Route path='/mobilität' element={<Mobilität/>}/>
        <Route path='/ernährung' element={<Ernährung/>}/>
      </Routes>
     </BrowserRouter>
     </>
  );
}
export default App;