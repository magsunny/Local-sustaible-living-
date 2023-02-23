import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import Home from './Pages/Home';
import Fashion from './Pages/Fashion';
import Mobilität from './Pages/Mobilität';
import Ernährung from './Pages/Ernährung';
import Wohnen from './Pages/Wohnen';
import Community from './Pages/Community';
import Footer from "./components/footer/Footer";
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute'



function App() {
 
  return (
    <>
    
    <BrowserRouter>
   
      <Navbar />
   
      <Header />
  
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/wohnen' element={<Wohnen/>}/>
        <Route path='/mobilität' element={<Mobilität/>}/>
        <Route path='/ernährung' element={<Ernährung/>}/>
        <Route path='/community' element={<ProtectedRoute ><Community /></ProtectedRoute>} />
      </Routes>
      
    </BrowserRouter>

      <Footer />
  
     </>

  );
}
export default App;