import sec1Img1 from "./images/s-xlpreview.file61.jpg";
import sec1Img2 from "./images/s-xlpreview.file47.jpg";
import sec1Img3 from "./images/s-xlpreview.file55.jpg";
import sec1Img4 from "./images/s-xlpreview.file60.jpg";
import sec1Img5 from "./images/s-xlpreview.file55.jpg";
import sec2Img1 from "./images/s-xlpreview.file65.jpg";
// import sec2Img2 from "./images/s-xlpreview.file46.jpg";
// import sec2Img3 from "./images/orange-watch.jpeg";
import sec3Img1 from "./images/shop_s3_1.jpeg";
import sec3Img2 from "./images/shop_s3_2.webp";
import sec3Img3 from "./images/shop_s3_3.jpeg";
import sec3Img4 from "./images/shop_s3_4.jpeg";
import sec3Img5 from "./images/shop_s3_5.jpeg";
import sec4Img1 from "./images/s-xlpreview.file37.jpg";
import sec4Img2 from "./images/s-xlpreview.file44.jpg";
import sec4Img3 from "./images/s-xlpreview.file58.jpg";
import sec4Img4 from "./images/s-xlpreview.file40.jpg";
import sec4Img5 from "./images/s-xlpreview.file48.jpg";
import sec5Img1 from "./images/s-xlpreview.file41.jpg";
import sec5Img2 from "./images/s-xlpreview.file54.jpg";
import sec5Img3 from "./images/s-xlpreview.file56.jpg";
import sec5Img4 from "./images/s-list-watch11111111.jpeg";
import sec5Img5 from "./images/s-list-watch11111112.jpeg";
import sec6Img1 from "./images/s-xlpreview.file45.jpg";
import sec6Img2 from "./images/s-list-watch11111113.jpeg";
import sec6Img3 from "./images/55076162-1-xlpreview.jpg";
import sec6Img4 from "./images/s-xlpreview.file45.jpg";
import sec6Img5 from "./images/s-xlpreview.file49.jpg";
import subbanner1 from "./images/sub-banner1.jpeg"
import subbanner2 from "./images/sub-banner2.jpeg"
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import React, { useEffect, useRef, useState } from 'react';




function ShopBody(){


    var sectionSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
      const scrollContainerRef = useRef(null);

      const scrollLeft = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: -200, 
            behavior: 'smooth',
          });
        }
      };
    
      const scrollRight = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: 200, 
            behavior: 'smooth',
          });
        }
      };

      const[APIitems, setAPIItems] = useState([]);

      const filterAPI = APIitems.filter((data) => data.category === "Bivans_frontend");


    const getItem =() => {
        fetch(`http://159.65.21.42:9000/products`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setAPIItems(data);
        })
        .catch((err) => console.log(err))
    }


    useEffect(() => {
        getItem();
    }, [])


    return(
        <div className="shopbody_bg">
            <div className="shopbody_content">
                <div className="cards">
                    {/* <div className="card">
                        <img src={sidecard1} alt="" />
                    </div>
                    <div className="card">
                        <img src={sidecard2} alt="" />
                    </div>
                    <div className="card">
                        <img src={sidecard3} alt="" />
                    </div>
                    <div className="card">
                        <img src={sidecard4} alt="" />
                    </div>
                    <div className="card">
                        <img src={sidecard5} alt="" />
                    </div>                     */}
                </div>
                <div className="left">
                    <div className="section">
                        <div className="top">
                            <h3>Shop All Smart Watches</h3>
                            <button>View More</button>
                        </div>
                        <div className="bottom">    
                            <div className="box">
                                <div className="pic">
                                    <img src={sec1Img1} alt="" />
                                </div>
                                <p>Series 8 Plus Smart Watch</p>
                                 <h4>R 689</h4>
                                <div className="rating">
                                    <h5>⭐ 4.9</h5>
                                    <h5 className="reviews">(23)</h5>
                                </div>
                            </div>                         
                            <div className="box">
                                <div className="pic">
                                    <img src={sec1Img2} alt="" />
                                </div>
                                <p>Hoco Y1 Pro Waterproof Smart Watch with GPS, Call Function and More</p>
                                 <h4>R 535</h4>
                                <div className="rating">
                                    <h5>⭐ 4.5</h5>
                                    <h5 className="reviews">(158)</h5>
                                </div>
                            </div>  
                            <div className="box">
                                <div className="pic">
                                    <img src={sec1Img3} alt="" />
                                </div>
                                <p>T800 Ultra Smartwatch Wireless Charging 1.99 Infinite Display</p>
                                 <h4>R 849</h4>
                                <div className="rating">
                                    <h5>⭐ 4.7</h5>
                                    <h5 className="reviews">(75)</h5>
                                </div>
                            </div> 
                            <div className="box">
                                <div className="pic">
                                    <img src={sec1Img4} alt="" />
                                </div>
                                <p>Smart Watch S19 Smart Bracelet Built in USB Charger Reminder And Monitor</p>
                                 <h4>R 995</h4>
                                <div className="rating">
                                    <h5>⭐ 4.6</h5>
                                    <h5 className="reviews">(84)</h5>
                                </div>
                            </div>   
                            <div className="box">
                                <div className="pic">
                                    <img src={sec1Img5} alt="" />
                                </div>
                                <p>S8 Sports Smartwatch with HD Display, Multiple Sports Modes</p>
                                 <h4>R 849</h4>
                                <div className="rating">
                                    <h5>⭐ 4.7</h5>
                                    <h5 className="reviews">(47)</h5>
                                </div>
                            </div>  
                            {/* <div className="box">
                                <div className="pic">
                                    <img src={babyImg1} alt="" />
                                </div>
                                <p>Baby Soft Supreme Quilts 2 Ply Toilet Paper 12s</p>
                                 <h4>R 115</h4>
                                <div className="rating">
                                    <h5>⭐ 4.5</h5>
                                    <h5 className="reviews">(158)</h5>
                                </div>
                            </div>                           */}
                        </div>
                    </div>
                    <div className="section">
                        <div className="top">
                            <h3>Apple Watch Series 8 & Ultra</h3>
                            <button>View More</button>
                        </div>
                        <div className="bottom_links">  
                            <div className="shop_link_arrows" onClick={scrollLeft}><IoArrowBack /></div>
                            <div className="box_wrapper" ref={scrollContainerRef}>
                                {filterAPI.map((item, _id) => (
                                    <Link to={`/product/${item._id}`} className="link-to shop_box_links" key={_id}>
                                    <div className="links_box">
                                        <div className="link_pic">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <p>{item.description}</p>
                                        <h4>R {item.price}</h4>
                                        <div className="rating">
                                            <h5>⭐ 4.8</h5>
                                            <h5 className="reviews">({item.quantity} available)</h5>
                                        </div>
                                    </div>
                                </Link>
                                ))}                                
                            </div>     
                            <div className="shop_link_arrows" onClick={scrollRight}><IoArrowForward /></div>                                              
                        </div>
                    </div>                    
                    <div className="sub-banner">
                        <img src={subbanner1} alt="" />
                    </div>
                    <div className="section">
                        <div className="top">
                            <h3>Shop Fitbit</h3>
                            <button>View More</button>
                        </div>
                        <div className="bottom">    
                            <div className="box">
                                <div className="pic3">
                                    <img src={sec3Img1} alt="" />
                                </div>
                                <p>Fitbit Sense 2 Health & Fitness Smartwatch Lunar White</p>
                                 <h4>R 7,799</h4>
                                <div className="rating">
                                    <h5>⭐ 4.7</h5>
                                    <h5 className="reviews">(1)</h5>
                                </div>
                            </div>                         
                            <div className="box">
                                <div className="pic3">
                                    <img src={sec3Img2} alt="" />
                                </div>
                                <p>Fitbit Versa 4 Fitness Smartwatch Waterfall Blue</p>
                                 <h4>R 6,379</h4>
                                <div className="rating">
                                    <h5>⭐ 5</h5>
                                    <h5 className="reviews">(6)</h5>
                                </div>
                            </div>  
                            <div className="box">
                                <div className="pic">
                                    <img src={sec3Img3} alt="" />
                                </div>
                                <p>Fitbit Inspire 2 Fitness Tracker - Black</p>
                                 <h4>R 1,999</h4>
                                <div className="rating">
                                    <h5>⭐ 4.9</h5>
                                    <h5 className="reviews">(68)</h5>
                                </div>
                            </div> 
                            <div className="box">
                                <div className="pic">
                                    <img src={sec3Img4} alt="" />
                                </div>
                                <p>Fitbit Inspire 2 Fitness Tracker - Black</p>
                                 <h4>R 2,364</h4>
                                <div className="rating">
                                    <h5>⭐ 4.7</h5>
                                    <h5 className="reviews">(24)</h5>
                                </div>
                            </div>   
                            <div className="box">
                                <div className="pic">
                                    <img src={sec3Img5} alt="" />
                                </div>
                                <p>Fitbit Versa 3 Smartwatch - Pink Clay/Soft Gold Aluminum</p>
                                 <h4>R 5,499</h4>
                                <div className="rating">
                                    <h5>⭐ 4.6</h5>
                                    <h5 className="reviews">(20)</h5>
                                </div>
                            </div>                                                     
                        </div>
                    </div>
                    <div className="sub-banner">
                        <img src={subbanner2} alt="" />
                    </div>
                    <div className="section">
                        <div className="top">
                            <h3>George & Mason Furniture</h3>
                            <button>View More</button>
                        </div>
                        <div className="bottom">    
                            <div className="box">
                                <div className="pic">
                                    <img src={sec4Img1} alt="" />
                                </div>
                                <p>Garmin Instinct 2 Solar Tactical Edition - Coyote Tan</p>
                                 <h4>R 9,299</h4>
                                <div className="rating">
                                    <h5>⭐ 5</h5>
                                    <h5 className="reviews">(3)</h5>
                                </div>
                            </div>                         
                            <div className="box">
                                <div className="pic">
                                    <img src={sec4Img2} alt="" />
                                </div>
                                <p>Garmin Instinct 2S Solar Surf Edition - Ericeira</p>
                                 <h4>R 9,299</h4>
                                <div className="rating">
                                    <h5>⭐ 4</h5>
                                    <h5 className="reviews">(2)</h5>
                                </div>
                            </div>  
                            <div className="box">
                                <div className="pic">
                                    <img src={sec4Img3} alt="" />
                                </div>
                                <p>Garmin Instinct 2S Solar Outdoor Smartwatch (40mm) - Neo Tropic</p>
                                 <h4>R 8,299</h4>
                                <div className="rating">
                                    <h5>⭐ 4.6</h5>
                                    <h5 className="reviews">(6)</h5>
                                </div>
                            </div> 
                            <div className="box">
                                <div className="pic">
                                    <img src={sec4Img4} alt="" />
                                </div>
                                <p>Garmin Instinct 2 Outdoor Smartwatch (45mm) - Graphite</p>
                                 <h4>R 6,789</h4>
                                <div className="rating">
                                    <h5>⭐ 4.8</h5>
                                    <h5 className="reviews">(27)</h5>
                                </div>
                            </div>   
                            <div className="box">
                                <div className="pic">
                                    <img src={sec4Img5} alt="" />
                                </div>
                                <p>Garmin Instinct 2 Camo Edition Rugged Smartwatch (45mm) - Graphite Camo</p>
                                 <h4>R 7,399</h4>
                                <div className="rating">
                                    <h5>⭐ 3.5</h5>
                                    <h5 className="reviews">(2)</h5>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="section">
                        <div className="top">
                            <h3>Shop Suunto</h3>
                            <button>View More</button>
                        </div>
                        <div className="bottom">    
                            <div className="box">
                                <div className="pic">
                                    <img src={sec5Img1} alt="" />
                                </div>
                                <p>Suunto 7 Sports Smartwatch - Black</p>
                                 <h4>R 6,419</h4>
                                <div className="rating">
                                    <h5>⭐ 4.3</h5>
                                    <h5 className="reviews">(3)</h5>
                                </div>
                            </div>                         
                            <div className="box">
                                <div className="pic">
                                    <img src={sec5Img2} alt="" />
                                </div>
                                <p>Suunto 9 Baro Sports Watch - Charcoal Titanium</p>
                                 <h4>R 11,999</h4>
                                <div className="rating">
                                    <h5>⭐ 5</h5>
                                    <h5 className="reviews">(4)</h5>
                                </div>
                            </div>  
                            <div className="box">
                                <div className="pic">
                                    <img src={sec5Img3} alt="" />
                                </div>
                                <p>Suunto 9 Baro Sports Watch - Granite Blue Titanium</p>
                                 <h4>R 169</h4>
                                <div className="rating">
                                    <h5>⭐ 2</h5>
                                    <h5 className="reviews">(2)</h5>
                                </div>
                            </div> 
                            <div className="box">
                                <div className="pic">
                                    <img src={sec5Img4} alt="" />
                                </div>
                                <p>Suunto 7 Sports Smartwatch - Matte Black Titanium</p>
                                 <h4>R 6,749</h4>
                                <div className="rating">
                                    <h5>⭐ 4.1</h5>
                                    <h5 className="reviews">(33)</h5>
                                </div>
                            </div>   
                            <div className="box">
                                <div className="pic">
                                    <img src={sec5Img5} alt="" />
                                </div>
                                <p>Garmin Instinct 2S Solar Outdoor Smartwatch (40mm) - Mist Grey</p>
                                 <h4>R 8,299</h4>
                                <div className="rating">
                                    <h5>⭐ 5</h5>
                                    <h5 className="reviews">(4)</h5>
                                </div>
                            </div>                                                     
                        </div>
                    </div>    
                    <div className="section">
                        <div className="top">
                            <h3>Shop All Activity Trackers</h3>
                            <button>View More</button>
                        </div>
                        <div className="bottom">    
                            <div className="box">
                                <div className="pic">
                                    <img src={sec6Img1} alt="" />
                                </div>
                                <p>M4 pro smart Band</p>
                                 <h4>R 180</h4>
                                <div className="rating">
                                    <h5>⭐ 2.8</h5>
                                    <h5 className="reviews">(35)</h5>
                                </div>
                            </div>                         
                            <div className="box">
                                <div className="pic">
                                    <img src={sec6Img2} alt="" />
                                </div>
                                <p>Volkano Boys Kids Activity Watch - Step Up Series: with 2 Extra Straps</p>
                                 <h4>R 139</h4>
                                <div className="rating">
                                    <h5>⭐ 3.2</h5>
                                    <h5 className="reviews">(8)</h5>
                                </div>
                            </div>  
                            <div className="box">
                                <div className="pic">
                                    <img src={sec6Img3} alt="" />
                                </div>
                                <p>Y5 Smart Watch Activity Heart Rate Tracker</p>
                                 <h4>R 295</h4>
                                <div className="rating">
                                    <h5>⭐ 3.9</h5>
                                    <h5 className="reviews">(51)</h5>
                                </div>
                            </div> 
                            <div className="box">
                                <div className="pic">
                                    <img src={sec6Img4} alt="" />
                                </div>
                                <p>M4 Smart band</p>
                                 <h4>R 234</h4>
                                <div className="rating">
                                    <h5>⭐ 3.4</h5>
                                    <h5 className="reviews">(183)</h5>
                                </div>
                            </div>   
                            <div className="box">
                                <div className="pic">
                                    <img src={sec6Img5} alt="" />
                                </div>
                                <p>M5 Sports Smart Bracelet</p>
                                 <h4>R 219</h4>
                                <div className="rating">
                                    <h5>⭐ 3.7</h5>
                                    <h5 className="reviews">(11)</h5>
                                </div>
                            </div>                                                     
                        </div>
                    </div>                    
                </div>                
            </div>
        </div>
    )
}
export default ShopBody;