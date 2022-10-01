import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Products from './Products'
import AddProduct from './AddProduct';
import ProductDetails from './ProductDetails';
import Welcome from './Welcome';
import EditProduct from './EditProduct';
import Footer from './Footer';
import styles from './App.css'
import Search from './Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="search/:filter" element={<Search />} />
          <Route path="edit:productId" element={<EditProduct />} />
        </Route>
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
