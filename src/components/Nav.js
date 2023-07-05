import { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../Contexts/FoodContext";
import { IoCartOutline } from "react-icons/io5"


function Nav(){

    const contextData = useContext(FoodContext);
    const { cart }  = contextData;
    console.log(cart);

    return (
        <div className="navbar">
           <div className="nav">
            <div className="logo">
                    <h1>
                        <Link to="/" className="aTag" >Kack n' Wack</Link>
                    </h1>
                </div>
                <div className="navRight">
                    <ul className="listOptions">
                        <li>
                            <Link to="/" className="aTag">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="aTag">About</Link>
                        </li>                        
                        <li>
                            <Link to="/contact" className="aTag">Contact</Link>
                        </li>
                        <li>
                            <Link to="/menu" className="aTag">Menu</Link>
                        </li>
                        <li>
                            <Link to="/counter" className="aTag">Counter</Link>
                        </li>
                        <li>
                            <Link to="/class-comp" className="aTag">Class Component</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="aTag">
                                <div className="cartIconDet">
                                    <IoCartOutline className="cartIcon"/>
                                    <span>{cart.length}</span>
                                </div>
                            </Link>
                        </li>                        
                    </ul>
                    <input type="checkbox" id="dropDown"/>                
                    <label htmlFor="dropDown" className="hambuger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </label>                
                </div>
           </div>
        </div>
    )
}



export default Nav;