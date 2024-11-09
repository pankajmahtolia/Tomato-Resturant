import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({})

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
        //Desc quantity by 1
        if(cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
        }
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            let itemInfo = food_list.find((product) => product._id===item);
            totalAmount += itemInfo.price*cartItems[item];
        }
        return totalAmount;
    }

    const getDeliveryFee = ()=>{
        return getTotalCartAmount()===0 ? 0 : 5; //Logic can be added
    }


    // Object which can be access anywhere around the App project using StoreContext
    const contextValue = {
        food_list, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount, getDeliveryFee
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;