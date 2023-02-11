import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.css";
import { animetxts } from "./carousel-data.js";
import { images } from "./carousel-data.js";

export const ImageCarousel = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
  };
  console.log(images);
  return(
    <div className='carousel1'>

      <div className="absolute">
      <Slider {...settings} >
       {
       images.map((item) =>(
          <div key={item.id}>
          <img src={item.src} alt={item.alt} className="picture" />
        </div>
        ))
      }
      </Slider>

      
      <div className="relative">
        <Slider  {...settings2}  className="txts">
        
        {
        animetxts.map((item) => (
          <div key={item.id}>
            <h1> {item.alt}</h1>
          </div>
        ))
        }
        </Slider>
        </div>
        
        </div>
       
        
      

    </div>
  )
}
  

  

  


