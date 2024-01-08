import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './page/home/Home'

const App = () => {
  

  return (
    <div className='App'>
 <Router>
 <Header/>
 <Routes>
 <Route index element={<Home/>}></Route>
 <Route path='movie/:id' element={<h1>Movie Details Page</h1>}></Route>
 <Route path='movies/:type' element={<h1>Movie List Page</h1>}></Route>
 <Route path='/*' element={<h1>Error Page</h1>}></Route>
 </Routes>
 </Router>
    </div>
  )
}

export default App
