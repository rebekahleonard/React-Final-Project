import React, { createContext, useState, useEffect } from "react"
import axios from "axios"


export const ProductContext = createContext()

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])
  const myUrl = "http://localhost:3000/products"

  useEffect(() => {
    async function getProducts() {
      await refreshProducts()
    }
    getProducts()
  }, []);

  function getAllProducts(){
    return axios.get("http://localhost:3000/products")
      .then(response => {
        setProducts(response.data)}
    )
  }

  function refreshProducts() {
    return axios.get("http://localhost:3000/products")
      .then(response => {
        setProducts(response.data)
      })
  }

  function getProduct(id) {
    return axios.get(`http://localhost:3000/products/${id}`)
    .then(response =>
      new Promise((resolve) => resolve(response.data))
    )
  }

  function deleteProduct(id) {
    axios.delete(`http://localhost:3000/products/${id}`)
    .then(refreshProducts)
  }

  function addProduct(product) {
    return axios.post("http://localhost:3000/products", product)
        .then(response => {
        refreshProducts()
    return new Promise((resolve) => resolve(response.data))
  })
  }

  function updateProduct(product) {
    return axios.put(`http://localhost:3000/products/${product.id}`, product)
    .then(response => {
    refreshProducts()
    return new Promise((resolve) => resolve(response.data))
  })
  }

  function sortProductPriceAsc() {
    return axios.get(`http://localhost:3000/products?_sort=price`)
    .then(response => {
      setProducts(response.data)
    })
  }

  function sortProductPriceDesc() {
    return axios.get(`http://localhost:3000/products?_sort=price&_order=desc`)
    .then(response => {
      setProducts(response.data)
    })
  }
  function sortProductName() {
    return axios.get(`http://localhost:3000/products?_sort=productName`)
    .then(response => {
      setProducts(response.data)
    })
    }

  function filterToTen(){
    return axios.get(`http://localhost:3000/products?price_gte=0&price_lte=10&_sort=price&_order=asc`)
    .then(response => {
      setProducts(response.data)
    })
  }

  function filtertoTwenty(){
    return axios.get(`http://localhost:3000/products?price_gte=10&price_lte=20&_sort=price&_order=asc`)
    .then(response => {
      setProducts(response.data)
    })
  }

  function filterTwentyPlus(){
    return axios.get(`http://localhost:3000/products?price_gte=21&_sort=price&_order=asc`)
    .then(response => {
      setProducts(response.data)
    })
  }


function filter(param) {
  return axios.get(`${myUrl}/?q=${param}`).then(response => {
    return new Promise(resolve => resolve(response.data))
  })
}


  return (
    <ProductContext.Provider
      value={{
        getAllProducts,
        products,
        getProduct,
        deleteProduct,
        filter,
        addProduct,
        updateProduct,
        sortProductName,
        sortProductPriceAsc,
        sortProductPriceDesc,
        filterToTen,
        filtertoTwenty,
        filterTwentyPlus
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}