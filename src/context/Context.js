import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';
import { filterReducer } from './FilterReducer';

const cartContext = createContext();

export const useCartContext = () => {
  return useContext(cartContext);
}
faker.seed(99);
const CartProvider = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        totalPrice: 0,
        quantity: 1,
        image: 	faker.image.url({ width: 300, height: 200 }),
        inStock: faker.helpers.arrayElement([0, 3, 5, 7, 9, 11]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));
    //https://picsum.photos/seed/7eBpI/3306/1586

    const [cartState, cartDispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    const ratings = [
        {  filled: false, star: 1 },
        {  filled: false, star: 2 },
        {  filled: false, star: 3 },
        {  filled: false, star: 4 },
        {  filled: false, star: 5 },
    ];

    const [filterState, filterDispatch] = useReducer(filterReducer, {
        asending: false,
        decending: false,
        includeOutOfStock: false,
        fastDelivery: false,
        byRating: ratings,
        searchQuery: '',
    });
    return useMemo(() => (
        <cartContext.Provider value={{ cartState, cartDispatch, filterState, filterDispatch }}>
            {children}
        </cartContext.Provider>
    ), [children, cartState, filterState]);
}

export default CartProvider;