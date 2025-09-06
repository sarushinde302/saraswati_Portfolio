// App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



const App = () => {
  return (
    <div>
      <Navbar /> {/* Navbar will be rendered here */}
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
