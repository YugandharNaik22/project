import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css'; // Import the CSS file where we defined the background
import Sidebar from './components/Sidebar'; // Import the Sidebar component



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
