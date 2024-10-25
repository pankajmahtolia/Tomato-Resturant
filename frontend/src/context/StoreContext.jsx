import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({});

    //Add to Cart
    const addToCart = (itemId) => {
        //If new item append with prev state of cart with quantity 1
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:1}))
        }else{ //If item already present update with prev state of cart with +1 quantity 
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    //Remove from Cart
    const removeFromCart = (itemId) => {
        //If new item append with prev state of cart with quantity 1
        if(cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
        }
    }

    useEffect(() =>{
        console.log(cartItems);
    }, [cartItems])


    // Object which can be access anywhere around the App project using StoreContext
    const contextValue = {
        food_list, cartItems, setCartItems, addToCart, removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;