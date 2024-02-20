import { useEffect, useState, createContext } from "react";


export const MarketContext = createContext();

function MarketProvider(props) {

    // const contextData = useContext(FoodContext);
    // const {cart} = contextData;

    const [cart, setCart] = useState([]);
    console.log(cart)
    let localStorageCart = JSON.parse(localStorage.getItem("Takealot"));

    useEffect(() => {
        if(localStorageCart){
            setCart(localStorageCart);
        }
    },[])

    return(
        <MarketContext.Provider value={{cart, setCart}}>
            {props.children}
        </MarketContext.Provider>
    );
}

export default MarketProvider;