export const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: [...state.cart.filter(product => product.id !== action.payload)],
            }
        case 'CHANGE_QUANTITY':
            return {
                ...state,
                cart: [
                    ...state.cart.map((product) => {
                        const updatedProduct = { ...product };
                        if (updatedProduct.id === action.payload.id) {
                            if (action.payload.type === 'INC') {
                                updatedProduct.quantity += 1;
                            } else {
                                if (updatedProduct.quantity > 1) {
                                    updatedProduct.quantity -= 1;
                                }
                            }
                            updatedProduct.totalPrice = Number((updatedProduct.quantity * updatedProduct.price).toFixed(2));                           
                        }
                        return updatedProduct;
                    })
                ]
            }
        default:
            return state;
    }
}