import mastercard from "./images/mastercarsSVG.svg";
import footerImg1 from "./images/footerImg1.svg";
import footerImg2 from "./images/footerImg2.svg";
// import footerImg3 from "./images/footerImg3.svg";


function Footer(){
    return(
        <div className="footer">
            <div className="footer1">
                <div className="footer1_content">
                    <div className="up">
                        <div className="col tablet-footer-remove">
                            <h4>Shop</h4>
                            <p>Daily Deals</p>
                            <p>App Only Deals</p>
                            <p>Clearance Sale</p>
                            <p>Gift Vouchers</p>
                            <h4>Takealot.group</h4>
                            <p>Superbalist.com</p>
                            <p>Mr D</p>
                        </div>
                        <div className="col tablet-footer-remove">
                            <h4>Help</h4>
                            <p>Help Centre</p>
                            <p>Contact Us</p>
                            <p>Submit an Idea</p>
                            <p>Suggest a Product</p>
                            <p>Shipping & Delivery</p>
                            <p>Takealot Pickup Points</p>
                            <p>Returns</p>
                        </div>
                        <div className="col tablet-footer-remove">
                            <h4>Account</h4>
                            <p>My Account</p>
                            <p>Track Order</p>
                            <p>Returns</p>
                            <p>Personal Details</p>
                            <p>Invoices</p>
                        </div>
                        <div className="col tablet-footer-remove">
                            <h4>Company</h4>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Sell on Takealot</p>
                            <p>Deliver for Takealot</p>
                            <p>Press & News</p>
                            <p>Competitions</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Human Rights Statement</p>
                            <p>Speak Up Process</p>
                        </div>
                        <div className="col">
                            <h4>Download Our Apps</h4>
                            <img src={footerImg1} alt="" />
                            <img src={footerImg2} alt="" />
                            {/* <img src={footerImg3} alt="" /> */}
                        </div>
                    </div>
                    <div className="down">
                        <p>Baby & Toddler</p>
                        <span>/</span>
                        <p>Beauty</p>
                        <span>/</span>
                        <p>Books</p>
                        <span>/</span>
                        <p>Cameras</p>
                        <span>/</span>
                        <p>Camping & Outdoors</p>
                        <span>/</span>
                        <p>Cellphones & Wearables</p>
                        <span>/</span>
                        <p>Computers & Tablets</p>
                        <span>/</span>
                        <p>Fashion</p>
                        <span>/</span>
                        <p>Gaming</p>
                        <span>/</span>
                        <p>Garden, Pool & Patio</p>
                        <span>/</span>
                        <p>Health</p>
                        <span>/</span>
                        <p>Home & Kitchen</p>
                        <span>/</span>
                        <p>Luggage & Travel</p>
                        <span>/</span>
                        <p>Movies & Series</p>
                        <span>/</span>
                        <p>Music</p>
                        <span>/</span>
                        <p>Office & Stationery</p>
                        <span>/</span>
                        <p>Pets</p>
                        <span>/</span>
                        <p>Sport</p>
                        <span>/</span>
                        <p>TV, Audio & Video</p>
                        <span>/</span>
                        <p>Toys</p>
                        <span>/</span>
                        <p>Vouchers</p>
                    </div>
                </div>
            </div>
            <div className="footer2">
                <div className="footer2_content">
                <img src={mastercard} alt="" />
                <h5>©Takealot Online (Pty) Ltd.</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;