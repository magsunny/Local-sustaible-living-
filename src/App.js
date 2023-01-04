import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home';
import Fashion from './Pages/Fashion';
import Mobilität from './Pages/Mobilität';
import Ernährung from './Pages/Ernährung';
import Wohnen from './Pages/Wohnen';






function App() {
 
  return (
    <>
    <BrowserRouter>
   
      <Navbar />
  
      <Routes>
        <Route path='/' element={<Home/>}/> 
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