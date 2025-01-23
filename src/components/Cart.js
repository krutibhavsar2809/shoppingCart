import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCartContext } from '../context/Context';

const Cart = () => {
  const { cartState: { cart }, cartDispatch } = useCartContext();
  const total = Number(cart.reduce((acc, curr) => acc + Number(curr.totalPrice !== 0 ? curr.totalPrice : curr.price), 0).toFixed(2));

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          {cart.map(product => (
            <Row key={product.id}>
              <Col md={3} key={product.image}>
                  <Card.Img variant="left" src={product.image} alt={product.name} className='card-img' />
              </Col>
              <Col md={6} key={product.name}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.totalPrice !== 0 ? product.totalPrice : product.price}</Card.Text>
                  <Card.Text>
                    <Button onClick={() => cartDispatch({ type: 'CHANGE_QUANTITY', payload: { type: 'DEC', id: product.id }})}>-</Button>
                      {product.quantity}
                    <Button onClick={() => cartDispatch({ type: 'CHANGE_QUANTITY', payload: { type: 'INC', id: product.id }})}>+</Button>
                  </Card.Text>
                  <Card.Text>
                      {product.fastDelivery ? 'Fast Delivery' : '4 days minimum'}
                  </Card.Text>
                  <Card.Text>
                      {Array(product.ratings).fill().map((_, index) => <span key={index}>⭐</span>)}
                  </Card.Text>
                  <Button variant="primary" disabled={product.inStock === 0} onClick={() => cartDispatch({ type: 'REMOVE_FROM_CART', payload: product.id})}>
                    Remove
                  </Button>
                </Card.Body>
              </Col>
          </Row>))
          }
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Price Details</Card.Title>
              <Card.Text>
                Total Price: {total}
              </Card.Text>
              <Card.Text>
                Delivery Charges: {total > 1000 ? 'Free' : 50}
              </Card.Text>
              <Card.Text>
                Amount Payable: {total > 1000 ? total : total + 50}
              </Card.Text>
              <Button variant="primary">Place Order</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Cart