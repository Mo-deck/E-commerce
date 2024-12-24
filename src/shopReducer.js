// Add To Cart
// Remove from cart
// update cart
// calculateTotal
// Clear cart

export const initialState = {
    products:[],
    total: 0
};

const shopReducer = (state, action) =>{
    const {type, payload} = action;

    switch(type){

        case 'ADD_TO_CART':
            return{
                ...state,
                products: payload.products,
            }

            case 'UPDATE_PRODUCT-QUANTITY':
                return{
                    ...state,
                    products:payload.products
                };

            case 'REMOVE_FROM_CART':
                    return{
                        ...state,
                        products:payload.products
                    };

            case 'CALCULATE_TOTAL_PRICE':
                return{
                    ...state,
                    total: payload.total
                };

            case 'CLEAR_CART':
                return initialState;

                default:
                    throw new Error("unknown reducer action")
    }
}

export default shopReducer;