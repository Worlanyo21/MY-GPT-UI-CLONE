import React from 'react';
import Navbar from './Components/Modern/Navbar/Navbar';
import Header from './Components/Containers/header/Header';
import Brand from './Components/Modern/brand/Brand';
import Blog from './Components/Containers/blog/Blog';
import WhatGPT3 from './Components/Containers/whatGPT3/WhatGPT3';
import Features from './Components/Containers/features/Features';
import Possibility from './Components/Containers/possibility/Possibility';
import Cta from './Components/Modern/cta/Cta';
import Footer from './Components/Containers/footer/Footer';
import '../src/App.css'


function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
  );
}

export default App;
