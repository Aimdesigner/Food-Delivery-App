import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './components/Layouts/Layout'
function App() {
  

  return (
    <>
      
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Layout>
    </Router>

    </>
  )
}

export default App
