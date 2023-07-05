import { IoChevronDownSharp, IoSearchOutline} from "react-icons/io5";


function Nav3(){
    return(
        <div>
            <div className="nav3">
                <div className="nav3_content">
                    <div className="nav3_content_up">
                    <div className="left">
                        <button>Shop by Department <IoChevronDownSharp /></button>
                        {/* <div className="dropdown_toggle">
                            <div className="dropdown_container">
                                <ul>
                                    <li>Automotive & DIY <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Baby & Toddler <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Beauty <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Books & courses <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Camping & Outdoor <IoChevronForwardOutline className="navUl_arrow"/></li>
                                    <li>Cellphones/Smartwatches <IoChevronForwardOutline className="navUl_arrow"/></li>
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
                        </div> */}
                    </div>
                    <div className="right">
                        <div className="nav3SearchBar">
                            <input type="text" />
                            <div>
                                <IoSearchOutline className="searchIcon"/>
                            </div>
                        </div>                        
                    </div>
                    </div>
                    <div className="nav3_right_Btns">
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
        </div>
    )
}

export default Nav3;