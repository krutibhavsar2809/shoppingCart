
const defaultRatings = [
    {  filled: false, star: 1 },
    {  filled: false, star: 2 },
    {  filled: false, star: 3 },
    {  filled: false, star: 4 },
    {  filled: false, star: 5 },
];

export const filterReducer = (state, action) => {
    switch(action.type){
        case 'ASENDING':
            return {
                ...state,
                asending: true,
                decending: false,
                includeOutOfStock: false,
                fastDelivery: false,
                products: action.payload.sort((a, b) => a.price - b.price),
                byRating: defaultRatings,
                searchQuery: '',
            };
        case 'DECENDING':
            return {
                ...state,
                decending: true,
                asending: false,
                includeOutOfStock: false,
                fastDelivery: false,
                products: action.payload.sort((a, b) => b.price - a.price),
                byRating: defaultRatings,
                searchQuery: '',
            };
        case 'INCLUDE_OUT_OF_STOCK':
            return {
                ...state,
                includeOutOfStock: action.payload.isChecked,
                decending: false,
                asending: false,
                fastDelivery: false,
                byRating: defaultRatings,
                searchQuery: '',
            };
        case 'FAST_DELIVERY':
            return {
                ...state,
                includeOutOfStock: false,
                decending: false,
                asending: false,
                fastDelivery: action.payload.isChecked,
                byRating: defaultRatings,
                searchQuery: '',
            };
        case 'BY_RATING':
            return {
                ...state,
                includeOutOfStock: false,
                decending: false,
                asending: false,
                fastDelivery: false,
                byRating: action.payload,
                searchQuery: '',
            };
        case 'SEARCH_QUERY':
            return {
                ...state,
                includeOutOfStock: false,
                decending: false,
                asending: false,
                fastDelivery: false,
                byRating: defaultRatings,
                searchQuery: action.payload.query,
            };
        case 'CLEAR_FILTER':
            return {
                ...state,
                includeOutOfStock: false,
                decending: false,
                asending: false,
                fastDelivery: false,
                byRating: defaultRatings,
                searchQuery: '',
            };
        default:
            return state;
    }
}