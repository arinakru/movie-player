import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home';
import { RegistrationForm } from './pages/RegistrationForm';
import { LoginForm } from './pages/LoginForm';
import {Layout} from './components/Layout';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element ={<Home/>} /> 
          <Route path={'Login'} element ={<LoginForm/>} />
          <Route path={'Registration'} element ={<RegistrationForm/>} />
        </Route>
      </Routes>
    </div>
   </BrowserRouter>
   
   
  );


}

export default App;



