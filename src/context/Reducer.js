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
                        if (product.id === action.payload.id) {
                            if (action.payload.type === 'INC') {
                                product.quantity++;
                            } else {
                                product.quantity--;
                            }
                        }
                        return product;
                    })
                ]
            }
        default:
            return state;
    }
}