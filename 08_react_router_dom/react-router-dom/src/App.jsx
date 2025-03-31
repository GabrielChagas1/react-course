import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Info from "./pages/Info"
import NotFound from "./pages/NotFound"
import SearchForm from "./components/SearchForm"
import Search from "./pages/Search"


function App() {

  return (
    <>
      <h1>React Router Dom</h1>
      <BrowserRouter>
        <Navbar/>
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="/products/:id/info" element={<Info />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/company" element={<Navigate to="/about" />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
