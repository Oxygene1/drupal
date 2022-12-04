import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './compopnents/home/Home'
const AppHero = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppHero