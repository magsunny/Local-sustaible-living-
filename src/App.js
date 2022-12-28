import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar'; 
import Dashboard from './components/Pages/Dashboard';
import Projects from './components/Pages/Projects';
import Calendar from './components/Pages/Calendar';
import Team from './components/Pages/Team';




function App() {
  return (
    <>
    <BrowserRouter>
   
      <Navbar />
  
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
     </BrowserRouter>
     </>
  );
}
export default App;