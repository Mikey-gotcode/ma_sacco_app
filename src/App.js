import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';  // Ensure the path is correct
import LoginPage from './components/LoginForm';
import SignupPage from './components/Signupform';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      
    </Router>
  );
}

export default App;
