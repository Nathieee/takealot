import car from "./images/icon-delivery.svg-289ec5f71b25443056af.svg";
import { IoBagCheckSharp, IoCarSharp, IoCardOutline, IoHeart, IoTrash } from "react-icons/io5";
import image1 from "./images/s-xlpreview.file65.jpg";
import cartbaseImg from "./images/cart_base_img.png"
import { useContext, useEffect } from "react";
import { MarketContext } from "../Contexts/MarketContext";
import { useState } from "react";


function CartBody(){

    const contextData = useContext(MarketContext);
    const { cart, setCart } = contextData;

    

    const increaseCartItem = (product) => {        

        const currentCart = cart.map((item) => {
            if (item._id === product._id){
                return {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: (item.quantity + 1) * item.price,
                };
            }
            return item;
        });
        setCart(currentCart);
        localStorage.setItem("Takealot", JSON.stringify(currentCart))
    }


    const decreaseCartItem = (product) => {  


        const currentCart = cart.map((item) => {
            if (item._id === product._id){
                return {
                    ...item,
                    quantity: item.quantity - 1,
                    totalPrice: (item.quantity - 1) * item.price,
                };
            }
            return item;
        });
        setCart(currentCart);
        localStorage.setItem("Takealot", JSON.stringify(currentCart))
    }


    const grandTotal = cart.map((item) => item.totalPrice).reduce((a, b) => {
        return a + b;
    })


    const handleRemoveCartItem = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem._id !== item._id);
        setCart(updatedCart);
        localStorage.setItem("Takealot", JSON.stringify(updatedCart));
      };



    return(
        <div className="cartpage_bg">
            <div className="cartpage_content">
                <h2>Shopping Cart</h2>
                {cart.length ?(
                    <div className="cart_details">
                        <div className="left">
                            {cart.map((item) => (
                            <div className="item" key={item.id}>
                                <div className="up">
                                    <h4>Shipped from Takealot Warehouse</h4>
                                </div>
                                <div className="down">
                                    <div className="pic">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="desc">
                                        <h3>{item.description}</h3>
                                        <h5>In Stock</h5>
                                    </div>
                                    <div className="right_end">
                                        <h2>R {item.totalPrice}</h2>
                                        <div className="qty">
                                            <p>Qty:</p>
                                            <button onClick={() => decreaseCartItem(item)}>-</button>
                                            <h4>{item.quantity}</h4>
                                            <button onClick={() => increaseCartItem(item)}>+</button>                                            
                                        </div>
                                        <div className="delete_or_like">
                                            <button onClick={() => handleRemoveCartItem(item)}><IoTrash />Remove</button>
                                            <button><IoHeart />Move to List</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="right">
                            <div className="upCard">
                                <div className="bus">
                                    <img src={car} alt="" />
                                </div>
                                <div className="text">
                                    <h3>Where is my order?</h3>
                                    <p>Check your delivery or collection status.</p>
                                </div>
                            </div>
                            <div className="cart_summary">
                                <h3>Cart Summary</h3>
                                <div className="price_n_qty">
                                    <h4>TOTAL: </h4>
                                    <h2>R {grandTotal}</h2>
                                </div>
                                <button>Proceed To Checkout</button>
                            </div>
                            <div className="downCard">
                                <p><IoBagCheckSharp className="cartpage_icons"/>   Secure checkout</p>
                                <p><IoCardOutline className="cartpage_icons"/>   Many ways to pay</p>
                                <p><IoCarSharp className="cartpage_icons"/>   Fast, reliable delivery</p>
                            </div>
                        </div>
                </div>
                )
                : null
                }
                <div className="cart_base">
                    <p>Placing an item in your shopping cart does not reserve that item or price. We only reserve stock for your order once payment is received.</p>
                    <img src={cartbaseImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CartBody;