import { IoChevronDownSharp, IoSearchOutline, IoChevronForwardOutline, IoTimeOutline, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import megamenuImg from "./images/mega-menu-img.webp"
import mobileNav2img1 from "./images/mobile-nav2-img1.webp"
import mobileNav2img2 from "./images/mobile-nav2-img2.webp"
import mobileNav2img3 from "./images/mobile-nav2-img3.webp"
import mobileNav2img4 from "./images/mobile-nav2-img4.webp"


function Nav2(){
    return(
        <div>
            <div className="nav2">
                <div className="nav2_content">
                    <div className="left">                        
                        <button>Shop by Department <IoChevronDownSharp /></button>
                        <div className="dropdown_toggle">
                            <div className="dropdown_container">
                                <ul>
                                    <li>Automotive & DIY <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Baby & Toddler <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Beauty <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Books & courses <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Camping & Outdoor <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>
                                        <Link className="link-to">Cellphones/Smartwatches <IoChevronForwardOutline className="navUl_arrow"/></Link>
                                        <div className="mega-menu">
                                            <div className="mega-menu-content">
                                                <div className="col">
                                                    <ul>
                                                        <li>New in Cellphone</li>
                                                        <li>Smartwatch finder</li>
                                                        <li>Cell Phone finder</li>
                                                        <li>All Cellphones</li>
                                                        <li>Cellular Accessories</li>
                                                        <li>Tablets & E Readers</li>
                                                        <li>Tablet Accessories</li>
                                                        <li>Airtime & Data</li>
                                                        <li><Link to="/shop" className="link-to">All Smartwatches</Link></li>
                                                        <li>Smart Accessories</li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <ul>
                                                        <h4>Featured Stores</h4>
                                                        <li>VR Group</li>
                                                        <li>Samsung</li>
                                                        <li>Haylou</li>
                                                        <li>MTN</li>
                                                        <li>Hisense</li>
                                                        <li>Huawei</li>
                                                        <li>Xiaomi</li>
                                                        <li>Garmin</li>
                                                        <li>iPhone</li>
                                                        <li>Nokia</li>
                                                        <li>PowerUp</li>
                                                        <li>Vodacom</li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <img src={megamenuImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>Clothing & Accessories <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Computer & Electronics <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Gaming <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Garden & Patio <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Grocieries <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Health & Personal Care <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Home & Appliance <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Liqour <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Office & Stationary <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Pets <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Sport & Training <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Toys <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>TV, Audio & Media <IoChevronForwardOutline className="navUl_arrow"/></li>
                                </ul>
                                <div className="dailyDeals">
                                    <IoTimeOutline />
                                    <h3>DAILY DEALS</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="navSearchBar">
                            <input type="text" />
                            <div>
                                <IoSearchOutline className="searchIcon"/>
                            </div>
                        </div>
                        <div className="nav2_right_Btns">
                            <button>Alot for Less</button>
                            <button>Loadshedding</button>
                            <button>Winter</button>
                            <button>Small Local Businessess</button>
                            <button>Deals & Promotions</button>
                            <button>New to Takealot</button>
                            <button>Clearances</button>
                            <button>Brands Store</button>
                        </div>
                    </div>
                </div>
                <div className="nav2_content_mobile">
                    <div className="top">
                        <h3>Shop by Department</h3>
                    </div>
                    <div className="down">
                        <div className="box">
                            <img src={mobileNav2img1} alt="" />
                            <p>Deals and promotions</p>
                        </div>
                        <div className="box">
                            <img src={mobileNav2img2} alt="" />
                            <p>Deals and promotions</p>
                        </div>
                        <div className="box">
                            <img src={mobileNav2img3} alt="" />
                            <p>Deals and promotions</p>
                        </div>
                        <div className="box">
                            <img src={mobileNav2img4} alt="" />
                            <p>Deals and promotions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav2;