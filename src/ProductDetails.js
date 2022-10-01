import { Card, Button, Spinner } from "react-bootstrap"
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import { useContext, useState, useEffect } from 'react';
import styles from "./ProductDetails.css"

function ProductDetails(props) {

  let params = useParams()
  let navigate = useNavigate()

  let { getProduct, deleteProduct } = useContext(ProductContext)
  let [ product, setProduct ] = useState()
  
  useEffect(() => {
    async function fetch() {
      await getProduct(params.productId)
        .then((product) => setProduct(product))
    }
    fetch()
  }, [params.productId]);

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  function loading() {
    return <div className="w-25 text-center"><Spinner animation="border" /></div>
  }

  function productCard(){
    let { id, productName, image, price, color, description } = product
    return (
        <Card className="align-self-center w-25">
        <Card.Body className="cardDetails">
                <Card.Img variant="top" src={image} />
                <Card.Title>{productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><strong>Price:</strong> <span>${price}</span></Card.Subtitle>
                <Card.Text className="cardText">
                    <strong>Description: </strong> <span>{description}</span><br></br>
                    <strong>Color: </strong> <span>{color}</span>
                </Card.Text>
                <Link to={`/edit${id}`} className="btn btn-outline-secondary mx-3">Edit</Link>
                <Link to={`/products`} className="btn btn-outline-secondary mx-3">Close</Link>
                <Button variant="outline-secondary" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
            </Card.Body>
    </Card>
  )}
  if (product === undefined) return loading()
  return product.id !== parseInt(params.productId) ?  loading() : productCard()
}

export default ProductDetails