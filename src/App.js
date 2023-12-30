// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import React, { useState } from 'react';
//import { Typography } from 'antd';
// import { Button } from 'antd/es/radio';]
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar'

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <div className='container pt-4'>
        <Routes> 
          <Route path={'/'} element ={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App;
