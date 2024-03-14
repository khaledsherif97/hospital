import React from 'react'
import styles from'./MainSlider.module.css'
import img1 from "../../Assets/imges/Gemini_Generated_Image.jpg";
import img2 from "../../Assets/imges/Gemini_Generated_Image (1).jpg";
import img3 from "../../Assets/imges/Gemini_Generated_Image (2).jpg";
import img4 from "../../Assets/imges/Gemini_Generated_Image (3).jpg";
import Slider from 'react-slick';

const MainSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <>
    <div className="container w-75 mx-auto py-3">
      <div className="row g-0">
        <div className="col-8">
        <Slider {...settings}>
          <figure>
          <img style={{ width:'100%' , height:'400px' }} src={img1}  alt=""  />
          </figure>
        <figure>
        <img style={{ width:'100%' , height:'400px' }} src={img2}  alt="" />
        </figure>
        <figure>
        <img style={{ width:'100%' , height:'400px' }} src={img3}  alt="" />
        </figure>
        <figure>
        <img style={{ width:'100%' , height:'400px' }} src={img4}  alt="" />
        </figure>
        
     
        </Slider>
        </div>
        <div className="col-4 gy-0">
        <figure>
        <img style={{ width:'100%' , height:'200px' }} src={img4}  alt="" />
        <img style={{ width:'100%' , height:'200px' }} src={img2}  alt="" />
        </figure>
        
        </div>
      </div>

    </div>
    
    
    </>
  )
}

export default MainSlider