import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import RegisterForm from './comp/RegisterForm';
import LoginForm from './comp/LoginForm';
import HomePage from './comp/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<HomePage />} />

          
        </Routes>
      </div>
    </Router>
  );
}


export default App;
