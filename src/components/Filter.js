import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useCartContext } from '../context/Context';
import Rating from './Rating';

const Filter = () => {
    const { filterState: { asending, decending, includeOutOfStock, fastDelivery },  filterDispatch, cartState: { products } } = useCartContext();
    console.log('filterState', asending, decending, includeOutOfStock, fastDelivery);
  return (
    <div>
        <Form.Label>Filter Products</Form.Label>
        <Form.Check 
            type='radio'
            id='default-radio'
            label='Asending'
            checked={ asending }
            onChange={(e) => {
                filterDispatch({ type: 'ASENDING', payload: products });
            }}
        />
        <Form.Check 
            type='radio'
            id='default-radio'
            label='Descending'
            checked={ decending }
            onChange={() => {
                filterDispatch({ type: 'DECENDING', payload: products });
            }}
        />
        <Form.Check 
            type='checkbox'
            id='default-checkbox'
            label='Include Out of Stock'
            checked={ includeOutOfStock }
            onChange={(e) => {
                filterDispatch({ type: 'INCLUDE_OUT_OF_STOCK', payload: { products, isChecked: e.target.checked } })
            }}
        />
        <Form.Check 
            type='checkbox'
            id='default-checkbox'
            label='Fast Delivery Only'
            checked={ fastDelivery }
            onChange={(e) => {
                filterDispatch({ type: 'FAST_DELIVERY', payload: { products, isChecked: e.target.checked } })
            }}
        />
        <Rating />
        <div className='text-center mt-3'>
            <Button variant='primary' className="mt-3" onClick={() => filterDispatch({ type: 'CLEAR_FILTER' })}>Clear Filter</Button>
        </div>
    </div>
  )
}

export default Filter