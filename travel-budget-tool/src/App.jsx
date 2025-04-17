import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Planner from './pages/Planner';
import Reports from './pages/reports';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/budget" element={<Budget/>}/>
            <Route path="/Planner" element={<Planner />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;