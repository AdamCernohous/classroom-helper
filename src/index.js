import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Setup from './Setup';
import Random from './Random';
import Order from './Order';
import Student from './Student';
import NotFound from './NotFound';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/random" element={<Random />} />
        <Route path="/order" element={<Order />} />
        <Route path="/student" element={<Student />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
