import React, { useState } from "react";
import Slider from "react-slick";
import "../Camper/style.css"
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import car1 from "../assets/carcarusel1.svg"
import car2 from "../assets/carcarusel2.svg"
import car3 from "../assets/carcarusel3.svg"
import car4 from "../assets/carcarusel4.svg"
import backImg from "../assets/caranavback.png"
import backImg1 from "../assets/onecarusel.svg"
import backImg2 from "../assets/tuningcarfoto/tuningback.png"
import vdImg1 from "../assets/videoimg1.svg"
import vdImg2 from "../assets/videoimg2.svg"
import vdImg3 from "../assets/videoimg3.svg"
import vdImg4 from "../assets/videoimg4.svg"
import vdImg5 from "../assets/videoimg5.svg"
import vdImg6 from "../assets/videoimg6.svg"
import vdImg7 from "../assets/videoimg7.svg"
import vdImg8 from "../assets/videoimg8.svg"
import { CustomModal } from "../CustomModal/CustomModal";
import botimg from "../assets/vniz.svg"
import blogImg1 from "../assets/blogsimg1.svg"
import blogImg2 from "../assets/blogsimg2.svg"
import blogImg3 from "../assets/blogsimg3.svg"
import blogImg4 from "../assets/blogsimg4.svg"
import blogImg5 from "../assets/blogsimg5.svg"
import blogImg6 from "../assets/blogsimg6.svg"

export default function MainComponent() {
  const [modalPrizeIsOpen, setModalPrizeIsOpen] = useState(false)
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  var settingsw = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },{
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
  }

  return (

  <div className="main_Con_wrap">
  
  <CCarousel controls indicators>
  <CCarouselItem>
    <CImage style={{width: "100%", height:"500px"}}  src={backImg} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage style={{width: "100%", height:"500px"}} src={backImg1} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage style={{width: "100%", height:"500px"}} src={backImg2} alt="slide 3" />
  </CCarouselItem>
</CCarousel>

    <div>
   <div className="RecomendCon"><div className="Recomend"><h2>Recomend</h2></div></div>
   </div>
  <div>
     <Slider {...settingsw} className="Multiplay">
  
       <div>
         <div  className="multiConWrap">
          <img src={car1} alt="" />
          <h3>Knaus</h3>
           <div className="but">
           Discover the range
           </div>
           <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car2} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car3} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car4} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car4} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car3} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car2} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car1} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car1} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car2} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car3} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
         <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
       <div>
         <div className="multiConWrap">
          <img src={car4} alt="" />
          <h3>Knaus</h3>
         <div className="but">
         Discover the range
         </div>
          <div className="ChooseCon">
                <h4>Choose a model</h4>
                <img className="botimg"   src= {botimg} alt="" />
          </div>
         </div>
       </div>
  
     </Slider>
     </div>
     <div>
   <div className="RecomendCon"><div className="Recomend"><h2>Videos</h2></div></div>
   </div>
   <div className="videosImgCon">
    <div className="videosImg">
      <img onClick={() => setModalPrizeIsOpen(true)} src= {vdImg1} />
      </div>
      <div className="videosImg">
      <img onClick={() => setModalPrizeIsOpen(true)} src= {vdImg2} />
      </div>
      <div className="videosImg">
      <img onClick={() => setModalPrizeIsOpen(true)} src= {vdImg3} />
      </div>
      <div className="videosImg">
      <img onClick={() => setModalPrizeIsOpen(true)} src= {vdImg4} />
      </div>
      <div className="videosImg">
      <img onClick={() => setModalPrizeIsOpen(true)} src= {vdImg5} />
      </div>
      <div className="videosImg">
      <img onClick={() => setModalPrizeIsOpen(true)} src= {vdImg6} />
      </div>
      <div className="videosImg">
      <img onClick={() => setModalPrizeIsOpen(true)} src= {vdImg7} />
      </div>
      <div className="videosImg">
      <img onClick={() => setModalPrizeIsOpen(true)} src= {vdImg8} />
      </div>
   </div>
   <CustomModal isOpen={modalPrizeIsOpen} onClose={() => setModalPrizeIsOpen(false)}>
   <iframe width="100%" height="400px"  border-radius="5px" src="https://www.youtube.com/embed/tFlFFifiAwc?si=ynSIX-XT5cDzIuSH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </CustomModal>
   <div className="RecomendCon"><div className="Recomend"><h2>Blogs</h2></div></div>
  <div className="Blogss">
     <div className="blogsCon">
      <div className="blog-text-wrapper">
      <h1>Camper</h1>
      <h3>@camper_1</h3>
      <p>Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.</p>
      </div>
      <div className="blog-img-wrapper">
      <img src= {blogImg1} alt="" />
      <img src= {blogImg2} alt="" />
      <img src= {blogImg3} alt="" />
      <img src= {blogImg4} alt="" />
      <img src= {blogImg5} alt="" />
      <img src= {blogImg6} alt="" />
      </div>
     </div>
  </div>
  </div>
    
      ); 
  }

