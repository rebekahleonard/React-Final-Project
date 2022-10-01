import React, { useState, useEffect, useContext } from 'react';
import { Card, Row, Stack, Container, Button } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import styles from './Products.module.css'


const Search = () => {
    const [products, setProducts] = useState([]);
    let params = useParams();
    let navigate = useNavigate();

    let { filter, deleteProduct } = useContext(ProductContext);


    useEffect(() => {
        async function fetch() {
            await filter(params.filter).then(response => {
                setProducts(response)
            })
        }
        fetch();

    }, [params.filter])

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
      }


    function productList() {

        if (products === null) return
        return products.map((product) => (
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
        ))
    }


    return (
        <>
            <h1 className={styles.title}>Products</h1>
            <Stack >
                <Row xs={1} md={3} className="g-4">       
                {productList()}
                </Row> 
            </Stack>
        </>
    )

}

export default Search;