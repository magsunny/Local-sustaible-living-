import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar'; 
import Fashion from './Pages/Fashion';
import Mobilität from './Pages/Mobilität';
import Ernährung from './Pages/Ernährung';
import Wohnen from './Pages/Wohnen';
import NotFound from './Pages/NotFound';
import Loginbereich from './Pages/Loginbereich';




function App() {
  const [login, setLogin]=useState(false);

  return (
    <>
    <BrowserRouter>
   
      <Navbar />
      <button onClick={()=> setLogin(!login)}> {login?"logout":"login"} </button>
  
      <Routes>
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/wohnen' element={<Wohnen/>}/>
        <Route path='/mobilität' element={<Mobilität/>}/>
        <Route path='/ernährung' element={<Ernährung/>}/>
        <Route path='/loginbereich' /> <loginbereich login={login}/>
        <Route element={NotFound}/>
      </Routes>
     </BrowserRouter>
     </>
  );
}
export default App;