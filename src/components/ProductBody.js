import { IoCaretDownOutline, IoChevronDownOutline, IoShareSocial } from "react-icons/io5";
import image1 from "./images/s-xlpreview.file65.jpg"
import image2 from "./images/s-list-watch11111114.jpeg"
import image3 from "./images/s-list-watch11111115.jpeg"
import image4 from "./images/s-fb-watch-red12488796.jpeg"
import image5 from "./images/s-fb-watch-silver12488796.jpeg"
import image6 from "./images/s-fb-watch-starlight12488796.jpeg"
import sec1Img1 from "./images/s-xlpreview.file61.jpg";
import sec1Img2 from "./images/s-xlpreview.file47.jpg";
import sec1Img3 from "./images/s-xlpreview.file55.jpg";
import sec1Img4 from "./images/s-xlpreview.file60.jpg";
import sec1Img5 from "./images/s-xlpreview.file55.jpg";
import sec2Img1 from "./images/s-xlpreview.file65.jpg";
import sec2Img2 from "./images/s-xlpreview.file46.jpg";
import sec2Img3 from "./images/orange-watch.jpeg";
import ebucks from "./images/ebucks-logo-@3x.svg";
import productpage_card from "./images/productpage_card.png";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


// import { useLocation } from "react-router-dom";


function ProductBody(){
    //     const location = useLocation();
    //   const { item } = location.state;

    const { _id } = useParams();
    console.log(_id)
    const [item, setItem] = useState({});


    const getProduct = (() => {
        fetch(`http://159.65.21.42:9000/products/${_id}`)
        .then((resp) => {
            resp.json();
            console.log(resp);
        })
        .then((data) => {
            console.log(data);
            setItem(data)
        })
    })

    useEffect(() => {
        getProduct();
    }, [])

    return(
        <div className="productbody_bg">
            <div className="productbody_content">
                <div className="path">
                    <div>
                        <p>Computers & Tablets</p>
                        <span>/</span>
                        <p>Smart Watches</p>
                    </div>
                    <h5><IoShareSocial /> Share</h5>
                </div>
                    {item._id ? (
                        <div className="product_container">
                            <div className="left">
                                <div className="part1">
                                    <div className="images">
                                        <div className="col">
                                            <div className="picture">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="picture">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="picture">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="main_picture">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h2>{item.description}</h2>
                                        <div className="part1_rating">
                                            <h5>⭐4.8</h5>
                                            <h5>{item.quantity} available <IoChevronDownOutline /></h5>
                                        </div>
                                        <select>
                                            <option>Select a Colour <IoCaretDownOutline /></option>
                                        </select>
                                        <div className="colour_pics">
                                            <div className="colour_pic">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="colour_pic">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="colour_pic">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                        <Link to="/cart">
                                            <button>ADD TO CART</button>
                                        </Link>
                                        <ul>
                                            <li>Free Delivery Available.</li>
                                            <li>Hassle-Free Exchanges & Returns for 30 Days.</li>
                                            <li>12-Month Limited Warranty.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="part2">
                                    <div className="section">
                                    <div className="top">
                                        <h3>You Might Also Like</h3>
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
                                        <button>Shop All Options</button>
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
                                            <button>Shop All Options</button>
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
                                            <button>Shop All Options</button>
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
                                            <button>Shop All Options</button>
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
                                            <button>Shop All Options</button>
                                        </div>                                  
                                    </div>
                                    </div>
                                </div>
                                <div className="part3">
                                    <h3>Description</h3>
                                    <p>Your essential companion for a healthy life. Advanced health sensors with new temperature sensing for insights into women’s health.1 Innovative safety features including Crash Detection.2 All in a stunning, durable design.</p>
                                    <div className="sub_desc">
                                        <p>Display</p>
                                        <p>Always-On Retina display</p>
                                        <p>396 by 484 pixels</p>
                                        <p>904 sq mm display area</p>
                                    </div>
                                    <div className="sub_desc">
                                        <p>Chip</p>
                                        <p>S8 with 64-bit dual-core processor</p>
                                        <p>W3</p>
                                        <p>Apple wireless chip</p>
                                        <p>U1 chip</p>
                                        <p>(Ultra Wideband)</p>
                                    </div>
                                    <div className="sub_desc">
                                        <p>Power</p>
                                        <p>Built-in rechargeable lithium-ion battery</p>
                                        <p>Up to 18 hour</p>
                                        <p>USB-C magnetic fast charging cable</p>
                                    </div>
                                    <div className="sub_desc">
                                        <p>Materials and Finishes</p>
                                        <p>Aluminum</p>
                                    </div>
                                    <div className="sub_desc">
                                        <p>Health and Wellness</p>
                                        <p>Blood Oxygen app</p>
                                        <p>ECG app</p>
                                        <p>High and low heart rate notifications</p>
                                        <p>Irregular rhythm notification</p>
                                        <p>Sleep Stages</p>
                                        <p>Cycle tracking with retrospective ovulation estimates</p>
                                    </div>
                                    <div className="sub_desc">
                                        <p>Safety and Emergency</p>
                                        <p>Emergency SOS</p>
                                        <p>International emergency calling</p>
                                        <p>Fall Detection</p>
                                        <p>Crash Detection</p>
                                        <p>Noise monitoring</p>
                                        <p>Backtrack</p>
                                    </div>
                                    <div className="sub_desc">
                                        <p>Cellular Connectivity</p>
                                        <p>Cellular connectivity on GPS + Cellular models</p>
                                        <p>Supports Family Setup3</p>
                                        <p>International roaming</p>
                                    </div>
                                    <div className="sub_desc">
                                        <p>Technology</p>
                                        <p>Blood oxygen sensor</p>
                                        <p>Electrical heart sensor</p>
                                        <p>Third-generation optical heart sensor</p>
                                        <p>Temperature sensor</p>
                                        <p>Dual-core S8 SiP</p>
                                        <p>Digital Crown with haptic feedback</p>
                                        <p>L1 GPS</p>
                                        <p>Compass with redesigned app</p>
                                        <p>Always-on altimeter</p>
                                        <p>High-g accelerometer</p>
                                        <p>Gyroscope</p>
                                    </div>
                                    <div className="sub_desc">
                                        <p>Case Size And Weight</p>
                                        <p>41mm by 35mm</p>
                                        <p>by 10.7mm (41mm)</p>
                                        <p>32.0 grams (Aluminum, GPS, GPS + Cellular)</p>
                                    </div>
                                    <div className="sub_desc">
                                        <p>What's in the box</p>
                                        <p>Apple Watch Series 8</p>
                                        <p>Sport Band</p>
                                        <p>USB-C Magnetic Charging Cable</p>
                                    </div>
                                    <button>Show Less</button>
                                </div>
                                <div className="part4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="tableLeft">Categories</td>
                                                <td className="tableRight">
                                                    <p>Computers & Tablets / Smart Home & Connected Living / Wearable Tech / Smart Watches
                                                    Cellphones & Wearables / Wearables / Smart Watches
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Brand</td>
                                                <td className="tableRight">
                                                    <p>Apple
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has GPSs</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Warranty</td>
                                                <td className="tableRight">
                                                    <p>Limited (12 months)
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Materials</td>
                                                <td className="tableRight">
                                                    <p>Aluminum
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Bezel Size</td>
                                                <td className="tableRight">
                                                    <p>41.0 mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Strap Size</td>
                                                <td className="tableRight">
                                                    <p>200.0 mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has GLONASS</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Screen Size</td>
                                                <td className="tableRight">
                                                    <p>1.69'
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Model</td>
                                                <td className="tableRight">
                                                    <p>MNHV3SO/A
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has Altimeter</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has Music Player</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has Step Counter</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">What's in the box Player</td>
                                                <td className="tableRight">
                                                    <p>Apple Watch Series 8, Sport Band, USB-C Magnetic Charging Cable
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has Sleep Monitor</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Water Resistant</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has Calorie Counter</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has Distance Tracking</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has Heart Rate Monitor</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tableLeft">Has Smart Notification Technology</td>
                                                <td className="tableRight">
                                                    <p>Yes
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>                        
                            </div>
                            <div className="right">
                                <div className="up">
                                    <h1>R {item.price}</h1>
                                    <h6>FREE DELIVERY</h6>
                                    <div className="ebucks">
                                        <img src={ebucks} alt="" />
                                        <h5>eB126,990</h5>
                                        <h5>Discovery Miles 126,990</h5>
                                    </div>
                                    <h4>Buy Now, Pay Later</h4>
                                    <h4>Buy on credit for R 1191 p/m x 12 months using Mobicred</h4>
                                    <button>Select an Option</button>
                                </div>
                                <div className="down">
                                    <img src={productpage_card} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                    : null
                    }
                <div className="related_products">
                    <div className="section">
                        <div className="top">
                            <h3>Related Products</h3>                            
                        </div>
                        <div className="bottom">    
                            <div className="box">
                                <div className="pic">
                                    <img src={sec2Img1} alt="" />
                                </div>
                                <p>Apple Watch Series 8 GPS + Cellular Sport Band (41mm)</p>
                                 <h4>R 12,699</h4>
                                <div className="rating">
                                    <h5>⭐ 4.8</h5>
                                    <h5 className="reviews">(4)</h5>
                                </div>
                                <button>Shop All Options</button>
                            </div>                         
                            <div className="box">
                                <div className="pic">
                                    <img src={sec2Img2} alt="" />
                                </div>
                                <p>IApple Watch SE GPS + Cellular Sport Band (44mm) 2022</p>
                                 <h4>R 8,399</h4>
                                <div className="rating">
                                    <h5>⭐ 4.4</h5>
                                    <h5 className="reviews">(5)</h5>
                                </div>
                                <button>Shop All Options</button>
                            </div>  
                            <div className="box">
                                <div className="pic">
                                    <img src={sec2Img1} alt="" />
                                </div>
                                <p>Apple Watch Series 8 GPS Sports Band (45mm)</p>
                                 <h4>R 10,899</h4>
                                <div className="rating">
                                    <h5>⭐ 4.9</h5>
                                    <h5 className="reviews">(17)</h5>
                                </div>
                                <button>Shop All Options</button>
                            </div> 
                            <div className="box">
                                <div className="pic">
                                    <img src={sec2Img3} alt="" />
                                </div>
                                <p>Apple Watch Ultra GPS and Cellular With Titanium Case (49mm) -Alpine Loop - S</p>
                                 <h4>R 19,989</h4>
                                <div className="rating">
                                    <h5>⭐ 5</h5>
                                    <h5 className="reviews">(7)</h5>
                                </div>
                                <button>Shop All Options</button>
                            </div>   
                            <div className="box">
                                <div className="pic">
                                    <img src={sec2Img2} alt="" />
                                </div>
                                <p>Apple Watch SE GPS Sport Band (40mm) 2022</p>
                                 <h4>R 5,999</h4>
                                <div className="rating">
                                    <h5>⭐ 4.9</h5>
                                    <h5 className="reviews">(56)</h5>
                                </div>
                                <button>Shop All Options</button>
                            </div>                                                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductBody;