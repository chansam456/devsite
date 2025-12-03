import './App.css';
import React from 'react';
import ShaderBackground from './components/ShaderBackground';
import Hotbar from './components/hotbar';
import Main from './components/main';
import Contact from './components/contact';
import Footbar from './components/footbar';

function App(): React.ReactElement {
  return (
    <>
      {/* <ShaderBackground /> */}
      
      <div className='relative z-10'>
        <Hotbar />
        <Main />
        <Contact />
        <Footbar />
      </div>
    </>
    );
}

export default App;
