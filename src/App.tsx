import './App.css';
import React from 'react';
import Hotbar from './components/hotbar';
import Main from './components/main';

function App(): React.ReactElement {
  return (
    <>
      <Hotbar />
      <Main />
    </>
    );
}

export default App;
