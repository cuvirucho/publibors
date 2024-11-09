import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './home'
import Martketing from './Martketing'
import Tecnologia from './Tecnologia'
import Productoa from './Productoa'

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/marketig" element={<Martketing/>} />
        <Route path="/tecnologia" element={<Tecnologia/>} />
        <Route path="/Productora" element={<Productoa/>} />
   
      </Routes>
    </HashRouter>
  )
}

export default App
