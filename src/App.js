import React, { useState } from 'react';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Predict from './pages/Predict';
import Navbar from './components/Navbar/Navbar';
import Logs from './pages/Logs';
const App = () => {
  

  return (
    <div className='bg-gray-900'> 
      <Router>
      <Navbar/>
      <br/>
      <br/>
        <Routes>
          <Route  path='/' element={<Predict/>}/>
          <Route path="/log" element={<Logs/>}/>
        </Routes>
      </Router>
    {/* // </div> */}
    </div>
  );
};

export default App;
