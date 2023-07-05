import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import banner1 from "./images/banner1.jpeg";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import banner4 from "./images/banner4.png";
import brand1 from "./images/HealthBeauty_Brand15.png";
import brand2 from "./images/b21ee0fbe4eeff9f534cc0be7bde5deb301584de.png";
import brand3 from "./images/Computers_Brand4.png";
import brand4 from "./images/mac.png";
import brand5 from "./images/398bc48815c135c0f074174a2a5d4acdb36534ea.png";
import brand6 from "./images/89397861dd65beb27d229298bddbb5eff9288322.png";
import brand7 from "./images/de3a814551c3fcce4784d8285b65f7b85e98a063.png";
import brand8 from "./images/30951b1e028c826ecf7332c91af32beb67849a55.png";
import car from "./images/icon-delivery.svg-289ec5f71b25443056af.svg";
import cardImg from "./images/5833650745033670215.png";
import { useState, useEffect } from "react";



function HomeBanner(){

  const bannerArr = [banner1, banner2, banner3, banner4];
  const [ banner, setBanner ] = useState(0);

  
  useEffect(() => {
    
    const interval = setInterval(() => {
      setBanner((index) => index === bannerArr.length - 1 ? 0 : index + 1)
    }, 2000);
  
    return() => clearInterval(interval);
  }, [])

  var bannerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: banner,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: banner,
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


  return(
    <div className="bannerSection">
      <div className="middle">
        <div className="carousel">
          <Slider {...bannerSettings} initialSlide={0}>
          {
            bannerArr.map((image, index) => (
              <div className="box" key={index}>
                <img src={image} alt="" />
              </div>
            ))
          }          
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
          <div className="downCard">
                <img src={cardImg} alt="" />
              </div>
      </div>
    </div>    
  )
};

export default HomeBanner;