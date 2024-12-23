import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const StoreContext = createContext(null)
import { toast } from "react-toastify";

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const [food_list, setFoodList] = useState([])

    const url = "https://tomato-resturant-backend.onrender.com";

    const [token, setToken] = useState("");

    //Add to Cart
    const addToCart = async (itemId) => {
        //If new item append with prev state of cart with quantity 1
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else { //If item already present update with prev state of cart with +1 quantity 
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            const response = await axios.post(
                url + "/api/cart/add",
                { itemId },
                { headers: { token } }
            );
            if (response.data.success) {
                toast.success("item Added to Cart")
            } else {
                toast.error("Something went wrong")
            }
        }
    }

    //Remove from Cart
    const removeFromCart = async (itemId) => {
        //Desc quantity by 1
        if (cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            if (token) {
                const response = await axios.post(
                    url + "/api/cart/remove",
                    { itemId },
                    { headers: { token } }
                );
                if (response.data.success) {
                    toast.success("item Removed from Cart")
                } else {
                    toast.error("Something went wrong")
                }
            }
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itemInfo = food_list.find((product) => product._id === item);
            totalAmount += itemInfo.price * cartItems[item];
        }
        return totalAmount;
    }

    const getDeliveryFee = () => {
        return getTotalCartAmount() === 0 ? 0 : 15; //Logic can be added
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        if (response.data.success) {
            setFoodList(response.data.data);
        } else {
            alert("Error! Products are not fetching..");
        }
    };

    const loadCardData = async (token) => {
        const response = await axios.post(
            url + "/api/cart/get",
            {},
            { headers: { token } }
        );
        setCartItems(response.data.cartData);
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCardData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);


    // Object which can be access anywhere around the App project using StoreContext
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getDeliveryFee,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;