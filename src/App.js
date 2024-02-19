
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import { Secondpage } from './pages/Secondpage';
import Lastpage from './pages/Lastpage';






function App() {
   

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Secondpage />} />
        <Route path='/code' element={<Lastpage />} />
      </Routes>
    
    </div>
  );
  
}

export default App;
