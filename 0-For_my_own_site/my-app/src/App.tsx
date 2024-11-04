// import React, { useState } from 'react'
import './App.css'
import { repositoryName } from './env'
// import { Route, Switch, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from  './pages/Home';

function App() {
  const baseUrl = '/' + repositoryName;
  return (
    <>
      <div className="App">
        <Router >
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  {/* <Link to="/test_ts">Home</Link> */}
                  <Link to={baseUrl}>Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
