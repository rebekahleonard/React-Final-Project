import React from 'react'
import { Card, Stack, Button, Offcanvas, NavDropdown, Row, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import { useContext, useState } from 'react'
import styles from './Products.module.css'


function Products(props) {

  let { deleteProduct, sortProductPriceAsc, sortProductName, filterToTen, filtertoTwenty, filterTwentyPlus, getAllProducts, sortProductPriceDesc } = useContext(ProductContext)
  let navigate = useNavigate()
  
  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  function handleShowAll(){
    getAllProducts();
    handleClose();
  }

  function handleSortPriceAsc(){
    sortProductPriceAsc();
    handleClose();
  }

  function handleSortPriceDesc(){
    sortProductPriceDesc();
    handleClose();
  }

  function handleSortName(){
    sortProductName();
    handleClose();
  }

  function filterUpToTen(){
    filterToTen();
    handleClose();
  }

  function filterUpToTwenty(){
    filtertoTwenty();
    handleClose();
  }

  function filterTwentyUp(){
    filterTwentyPlus();
    handleClose();
  }
  

  function productList(products) {
      if (products === null) return
      return products.map((product) =>
      
       <Card  key={product.id}>
            <Card.Body className={styles.card} key={product.id}>
                <Card.Img className={styles.img} variant="top" src={product.image} />
                <Card.Title>{product.productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><strong>Price:</strong> <span>${product.price}</span></Card.Subtitle>
                <Container className={styles.buttons}>
                  <Link to={`/products/${product.id}`} className="btn btn-outline-secondary mx-3" key={product.id} >View</Link>
                  <Link to={`/edit${product.id}`} className="btn btn-outline-secondary mx-3">Edit</Link>
                  <Button variant="outline-secondary" onClick={handleDeleteProduct.bind(this, product.id)}>Delete</Button>
                </Container>
            </Card.Body>
       </Card>
      )
    }

  
    return (
      <>
      <h1 className={styles.title}>Products</h1>
      <Button size = "sm" placement="end" variant="outline-secondary" onClick={handleShow}>
          More Options
          </Button>
            <Offcanvas className={styles.offCanvas} placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                    <Offcanvas.Title className={styles.brandName}>
                      Bek's Beauty
                    </Offcanvas.Title>                                     
                  </Offcanvas.Header>
                  <Offcanvas.Body >
                  <NavDropdown className={styles.sort} title="Sort">
                    <NavDropdown.Item onClick={handleSortPriceAsc}>By Price Lowest to Highest</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleSortPriceDesc}>By Price Highest to Lowest</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleSortName}>By Product Name</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className={styles.filter} title="Filter">
                    <NavDropdown.Item onClick={filterUpToTen}>Price: $0-$10</NavDropdown.Item>
                    <NavDropdown.Item onClick={filterUpToTwenty}>Price: $10-$20</NavDropdown.Item>
                    <NavDropdown.Item onClick={filterTwentyUp}>Price: Over $20</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleShowAll}>Show All</NavDropdown.Item>
                    </NavDropdown>
                    <img
                      alt=""
                      src="https://previews.123rf.com/images/teploleta/teploleta1810/teploleta181000043/133518012-cute-print-with-cartoon-closed-eyes-with-long-eyelashes.jpg"
                      width="375"
                      height="375" 
                      className={styles.logo}                    
                    />
                    <Container className={styles.create}>
                      <Link to="/add" className={styles.create}>Create a Product</Link>
                    </Container> 
                    </Offcanvas.Body>
          </Offcanvas>
      <Stack >
        <Row xs={1} md={3} className="g-4">       
          <ProductContext.Consumer>
          {({products}) => (
          productList(products)
          )}
          </ProductContext.Consumer>
        </Row> 
      </Stack>
    </>
    )
  }
  
  export default Products