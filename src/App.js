// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import React, { useState } from 'react';
//import { Typography } from 'antd';
// import { Button } from 'antd/es/radio';]
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar'
import { RegistrationForm } from './pages/RegistrationForm';
function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Navbar />
        {/* Определяем маршруты */}
          <Routes> 
           <Route path={'/'} element ={<Home/>} />
          </Routes>
          <Routes> 
           <Route path={'/'} element ={<RegistrationForm/>} />
          </Routes>
        
      </div>
      </BrowserRouter>
  );
}

export default App;



