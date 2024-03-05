import Navbar from './component/Navbar';
import "./responsive.css"
import Footer from './component/Footer';
import Aboutmain from './component/Aboutpage/Aboutmain';
import Pricechart from './component/Price/Pricechart';
import { Route, Routes } from 'react-router-dom';
import Firstpage from './component/Mainpage/Firstpage';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Firstpage/>}/>
      <Route exact path='/About' element={<Aboutmain/>}/>
      <Route exact path='/pricechart' element={<Pricechart/>}/>
    </Routes> 
    <Footer/>

    </>
  );
}

export default App;

