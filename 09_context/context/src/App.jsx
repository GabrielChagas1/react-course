import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import './App.css'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
