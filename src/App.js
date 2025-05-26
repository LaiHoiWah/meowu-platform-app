import '@ant-design/v5-patch-for-react-19';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/homepage/HomePage';
import LoginPage from './page/loginpage/LoginPage';
import './App.css';

function App(){
    return (
      <Router>
        <Routes>
          <Route path="/homepage" element={<HomePage/>}/>
        </Routes>
      </Router>
    );

}

export default App;
