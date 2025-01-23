import React from 'react';
import { Navbar, FormControl, Dropdown, Badge, Button } from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/Context';

const Header = () => {
    const { filterState: { searchQuery }, filterDispatch, cartState: { cart } } = useCartContext();
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" variant='dark' expand="lg" style={{ height: 80, width: '100%' }}>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl
                    style={{ width: 500 }}
                    placeholder='Search a product'
                    className='m-auto'
                    value={searchQuery}
                    onChange={(e) => filterDispatch({ type: 'SEARCH_QUERY', payload: { query: e.target.value } })}
                />
            </Navbar.Text>
            <Dropdown style={{ marginLeft: 10 }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaCartShopping />
                    <Badge bg="success">{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ maxWidth: "370px" }} className='text-center'>
                    {cart.length > 0
                        ? <Dropdown.Item>
                            {cart.map(product => (
                                <div key={product.id} className='text-left mb-3'>
                                    <img src={product.image} alt={product.name} style={{ height: 50, width: 50 }} className='mr-3' />
                                    <span>{product.name} - {product.quantity}</span>
                                </div>
                            ))} 
                        </Dropdown.Item>
                        : <Dropdown.Item>Cart is empty</Dropdown.Item>}
                    <Dropdown.Divider />
                    <Button onClick={() => navigate('/cart')}>Go to cart</Button>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
    )
}

export default Header