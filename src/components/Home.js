import React from 'react'
import { useCartContext } from '../context/Context'
import { Col, Container, Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';
import Filter from './Filter';

const Home = () => {
    const { cartState: { products, cart }, filterState: { includeOutOfStock, fastDelivery, byRating, searchQuery } } = useCartContext();

    console.log('cart home', cart);
    const filteredProducts = () => {
        let filteredProducts = products.filter(product => product.inStock !== 0);
        if (includeOutOfStock) { 
            filteredProducts = products.filter(product => product.inStock === 0);
        } else if (fastDelivery) {
            filteredProducts = products.filter(product => product.fastDelivery);
        } else if (byRating.find(rating => rating.filled)) {
            byRating.forEach(rating => {
                if (rating.filled) {
                    filteredProducts = products.filter(product => product.ratings >= rating.star);
                }
            });
        } else if (searchQuery) {
            filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
        }
        return filteredProducts;
    }

    return (
        <Container fluid className='mt-4'>
            <Row>
                <Col md={2} className='filter pt-4'>
                    <Filter />
                </Col>
                <Col md={10}>
                    <Row>
                        {filteredProducts().map(product => (
                            <SingleProduct key={product.id} product={product} />
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home