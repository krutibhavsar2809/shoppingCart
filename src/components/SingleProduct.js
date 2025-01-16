import React from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import { useCartContext } from '../context/Context';

const SingleProduct = ({ product }) => {
    const { cartState: { cart }, cartDispatch } = useCartContext();

    return (
        <Col md={3} key={product.id}>
            <Card style={{ width: '18rem' }} key={product.id} className='mb-4'>
                <Card.Img variant="top" src={product.image} alt={product.name} className='card-img' />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text>
                        {product.fastDelivery ? 'Fast Delivery' : '4 days minimum'}
                    </Card.Text>
                    <Card.Text>
                        {Array(product.ratings).fill().map((_, index) => <span key={index}>⭐</span>)}
                    </Card.Text>
                    {cart.find(prod => prod.id === product.id)
                        ? <Button variant="danger" onClick={() => cartDispatch({ type: 'REMOVE_FROM_CART', payload: product.id})}>Remove from cart</Button>
                        : (
                            <Button variant="primary" disabled={product.inStock === 0} onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product})}>
                                {product.inStock === 0 ? 'Out of sock' : 'Add to Cart'}
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleProduct