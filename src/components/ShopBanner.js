import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
import banner1 from "./images/shopbanner1.jpeg";
import banner2 from "./images/shopbanner2.jpeg";
import banner3 from "./images/shopbanner3.jpeg";
import banner4 from "./images/shopbanner4.jpeg";
import brand1 from "./images/HealthBeauty_Brand15.png";
import brand2 from "./images/b21ee0fbe4eeff9f534cc0be7bde5deb301584de.png";
import brand3 from "./images/Computers_Brand4.png";
import brand4 from "./images/mac.png";
import brand5 from "./images/398bc48815c135c0f074174a2a5d4acdb36534ea.png";
import brand6 from "./images/89397861dd65beb27d229298bddbb5eff9288322.png";
import brand7 from "./images/de3a814551c3fcce4784d8285b65f7b85e98a063.png";
import brand8 from "./images/30951b1e028c826ecf7332c91af32beb67849a55.png";




function ShopBanner(){

    var bannerSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 427,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <div className="shopBanner_bg">
            <div className="shop_bannerSection">
            <div className="categories">
                <button>Accessories <FaArrowRight className="categoryArrow"/></button>
                <button>Activity Trackers <FaArrowRight className="categoryArrow"/></button>
                <button>Eyewear <FaArrowRight className="categoryArrow"/></button>
                <button>Golf Watches <FaArrowRight className="categoryArrow"/></button>
                <button>Hybrid Watches <FaArrowRight className="categoryArrow"/></button>
                <button>Security Tracker Devices <FaArrowRight className="categoryArrow"/></button>
                <button>Smart Watches <FaArrowRight className="categoryArrow"/></button>
                <button>Sports & GPS Watches <FaArrowRight className="categoryArrow"/></button>
                <button>VR Headsets <FaArrowRight className="categoryArrow"/></button>
                <button>Wearables <FaArrowRight className="categoryArrow"/></button>
            </div>
            <div className="right">
                <div className="carousel">
                    <Slider {...bannerSettings}>
                        <div className="box">
                            <img src={banner1} alt="" />
                        </div>
                        <div className="box">
                            <img src={banner2} alt="" />
                        </div>
                        <div className="box">
                            <img src={banner3} alt="" />          
                        </div>
                        <div className="box">
                            <img src={banner4} alt="" />
                        </div>
                        <div className="box">
                            <img src={banner3} alt="" />
                        </div>
                    </Slider>  
                </div>
                <div className="featured_brands">
                    <h3>Featured Brands</h3>
                    <div className="brandsDiv">
                        <div className="directions"><FaAngleLeft className="bannerDirections"/></div>
                        <div className="brands">
                        <div className="brand">
                            <img src={brand1} alt="" />
                        </div>
                        <div className="brand">
                            <img src={brand2} alt="" />
                        </div>
                        <div className="brand">
                            <img src={brand3} alt="" />
                        </div>
                        <div className="brand">
                            <img src={brand4} alt="" />
                        </div>
                        <div className="brand">
                            <img src={brand5} alt="" />
                        </div>
                        <div className="brand">
                            <img src={brand6} alt="" />
                        </div>
                        <div className="brand">
                            <img src={brand7} alt="" />
                        </div>
                        <div className="brand">
                            <img src={brand8} alt="" />
                        </div>                        
                        </div>
                        <div className="directions"><FaAngleRight className="bannerDirections"/></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ShopBanner;