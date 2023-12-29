
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Login from './components/login';
import Dashboard from './components/dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
