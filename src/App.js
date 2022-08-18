import React from 'react';
import './App.css';
import SwitchLanguage from './Header/SwitchLanguage';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <SwitchLanguage/>
    </div>
  );
}
export default App;
