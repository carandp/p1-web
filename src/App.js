import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Robots from './components/robots';
import Robot from './components/robot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/adopt" element={<Robots />} />
          <Route path="/adopt/:id" element={<Robot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
