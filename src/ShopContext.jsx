import { createContext } from 'react'
import reducer, {initialstate} from './shopReducer'
import { Children } from 'react';
import { useReducer } from 'react';

const ShopContext = createContext(initialstate);


export const shopProvider = ({Children})=>{
    const [state, dispatch] = useReducer(reducer, initialstate)

    const addToCart = (product)=>{

        const productIndex = state.products.findIndex((p) => p.id == product.id);

        let updatedProduct = [...state.products];
        // hadii -1 uusan lamid aheyn!
        if(productIndex !== -1){
            updatedProduct[productIndex] = {
                ...updatedProduct[productIndex],
                quantity:updatedProduct[productIndex].quantity +1,
            }
        }else{
            updatedProduct = [
                ...updatedProduct ,
                {
                    ...productIndex,
                      quantity: 1,
                }
        ]
        }

        // TODO ccalculate function & update the state

        calculateTotalPrice(updatedProduct);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedProduct,
            }
        })
    }

    const calculateTotalPrice = (products) =>{
        let total = 0;
        products.forEach(product => {
            total += product.price * product.quantity
        });

        dispatch({
            type: "CALCULATE_TOTAL_PRICE",
            payload:{
                total,
            }
        })
    }
}