import {React} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import Home from './Pages/Home';
import Fashion from './Pages/Fashion';
import Mobilität from './Pages/Mobilität';
import Ernährung from './Pages/Ernährung';
import Wohnen from './Pages/Wohnen';
import Community from './Pages/Community';
import Footer from "./components/footer/Footer";
import Header from './components/Header';



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
        <Route path='/community' element={<Community/>}/>
        </Routes>
     </BrowserRouter>
     <div>
      
      <Footer />
    </div>
     </>

  );
}
export default App;