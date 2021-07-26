import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Dropmenu from './components/Dropmenu/Dropmenu';
import './App.css';
// import { useGlobalContext } from './context';

function App() {
  return (
    <>
      <Navbar />
      <Dropmenu />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
