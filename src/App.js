import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Import all the pages here
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Results from './pages/Results';
import Login from './pages/components/login/Login';
import Signuppage from './pages/signuppage';

function App() {
  return (
    <>
      <Routes>
        {/* Routes for the pages */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signUp" element={<Signuppage/>}/>
      </Routes>
    </>
  );
}

export default App;
