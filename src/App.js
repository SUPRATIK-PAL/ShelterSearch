import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from  "./pages/Home"
import PropertyDetails from "./pages/PropertyDetails"
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/PropertyDetails/:id' element={<PropertyDetails/>}/>
    </Routes>
    <Footer />
  </div>;
};

export default App;
