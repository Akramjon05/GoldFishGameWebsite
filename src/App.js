// import React from "react";
import Header from './Components/Header';
import CustomNavbar from './Components/CustomNavbar';
import CarouselComponent from './Components/CarouselComponent';
import Katalog from './Components/Katalog';
import MySlider from "./Components/MySlider";
import Owl_start from "./Components/Owl_start";
import Owl_end from "./Components/Owl_end";
import Element from "./Components/Element";
import Info from "./Components/Info";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import Catalog from "./Components/Catalog";
import Footer from "./Components/Footer";
import React, {useEffect, useState} from 'react'
import Loading from './Components/Loading';
// import Navbar from './Components/Navbar';


const App = () => {
  const [data, setData] = useState([]);
  const [anim, setAnim] = useState(false);

useEffect(() => {
  setAnim(true);
  fetch("https://reqres.in/api/users?delay=0.5")
  .then(answer =>{
      if(!answer.ok)
      {
          throw new Error("Look like WE have an ERORR in our API bro.")
      }
      else
      {
          return answer.json();
      }
  })
  .then(info => {
      console.log(info.data); 
      setData(info.data);
  })
  .catch(error => console.log(error))
  .finally(() => setAnim(false) )
}, [])


  return (
    <div className=''>
    <div className='App'>
      {
         anim == true ? <Loading /> : <div className='a'>
          <Header />
          <CustomNavbar />
           <Routes >
           <Route path="/Catalog" element={<Catalog />}/>
           </Routes>
          <CarouselComponent />
          <Katalog />
          <Owl_start />
          <MySlider />
          <Owl_end />
          <Element />
          <Info />
          <About/>
          <Contact />
          <Footer/>
         </div>
          
          
          
      }
    </div>
    {/* <Header />
      <CustomNavbar />
      <Routes >
        <Route path="/Catalog" element={<Catalog />}/>
      </Routes>
      <CarouselComponent />
      <Katalog />
      <Owl_start />
      <MySlider />
      <Owl_end />
      <Element />
      <Info />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App;