import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Dashboard from './components/Pages/Dashboard';
import Team from './components/Pages/Team';




function App() {
  return (
    <>
    <BrowserRouter>
   
      <Navbar />
  
    <Routes>
        <Route path='/dashboard' element={Dashboard}/>
        <Route path='/team' element={Team}/>
      </Routes>
     </BrowserRouter>
     </>
  );
}
export default App;