import { Link } from "react-router-dom";
import logo from "./images/logo.svg-f6ccb489b85bbddf97d6.svg";
import { IoCaretDownOutline, IoHeart, IoCart, IoMenu } from "react-icons/io5";

function Nav_N_Banner() {
      
    const cart = JSON.parse(localStorage.getItem('Takealot'));

    return(
        <div>
            <div className="navigation">
                <div className="left">
                    <div className="hambuger">
                        <IoMenu className="hambuger-icon" />
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <h5>Help Centre</h5>
                    <h6 className="sell-on-takealot">|</h6>
                    <h5 className="sell-on-takealot">Sell on Takealot</h5>
                </div>
                <div className="right">
                    <h5><Link to="/login" className="nav1-links">Login</Link></h5>
                    <h6>|</h6>
                    <h5><Link to="/register" className="nav1-links">Register</Link></h5>
                    <h6>|</h6>
                    <h5>Orders</h5>
                    <h6>|</h6>
                    <h5 className="nav1_account">My Account <IoCaretDownOutline /></h5>
                    <div className="nav1_icons">
                        <div className="heartShape">
                            <IoHeart className="heartIcon"/>
                        </div>
                        <div className="cart">
                            <IoCart  className="cartIcon"/>
                            <h4>{cart.length}</h4>
                        </div>
                    </div>
                </div>
            </div>                        
        </div>
    )
}

export default Nav_N_Banner;