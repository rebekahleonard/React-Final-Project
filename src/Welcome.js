import React from 'react'
import { Card, CardGroup, Stack } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import styles from "./Welcome.css"

function Welcome(props) {
    function productList(products) {

        function shuffle(products) {
            let j, x, i;
            for (i = products.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = products[i];
                products[i] = products[j];
                products[j] = x;
            }
            return products;
        } 
    
        if (products === null) return
        return shuffle(products.slice(3).map((product) =>
        <Card  key={product.id}>
            <Card.Body className='cardBody'>
                <Card.Img className='cardImg' variant="top" src={product.image} />
                <Card.Title >{product.productName}</Card.Title>
                <Link to={`/products/${product.id}`} className="btn btn-outline-secondary mx-3 " key={product.id} >View</Link>
            </Card.Body>
        </Card>
        ))
    }
    
    
    return (
        <>
        <h1 className='welcome'>Welcome to Bek's Beauty!</h1>
        <Stack direction="horizontal" gap={3}>
        <CardGroup>
        <ProductContext.Consumer>
            {({products}) => (
            productList(products)
            )}
        </ProductContext.Consumer>
        </CardGroup>
        <Outlet />
        </Stack>
        </>
    )
}

export default Welcome