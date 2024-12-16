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
    }
}