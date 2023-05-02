import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './index.css'
import App from './App';
import Login from './pages/login/login';
import Register from './pages/register/register';
import HomePage from './routes/homePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Masuk' element={<Login/>}/>
      <Route path='/Daftar' element={<Register/>}/>
      <Route path="/Home" element={<HomePage/>} />
    </Routes>
  </Router>
);