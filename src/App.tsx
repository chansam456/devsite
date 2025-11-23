import './App.css';
import React from 'react';
import NameHeader from './components/NameHeader';
import Home from './components/Home';
import About from './components/About';
import CSProjects from './components/CSProjects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NameHeader />
      <Home />
      <About />
      <CSProjects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
