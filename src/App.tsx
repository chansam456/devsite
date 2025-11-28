import './App.css';
import React from 'react';
import Hotbar from './components/hotbar';
import Main from './components/main';
import Contact from './components/contact';
import Footbar from './components/footbar';

function App(): React.ReactElement {
  return (
    <>
      <Hotbar />
      <Main />
      <Contact />
      <Footbar />
    </>
    );
}

export default App;
