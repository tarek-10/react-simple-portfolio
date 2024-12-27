import React from 'react'
import style from "./Home.module.css"
import imageSlide1 from "../../assets/image/img_bg_1-PzvG2r05.jpg"
import imageSlide2 from "../../assets/image/img_bg_2-DzCs5o-0.jpg"
export default function Home() {
  return (
    <>
         
  <div id="carouselExampleSlidesOnly" className={`carousel slide ${style.homeComponent}`} data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className={`carousel-item active ${style.sliderOneContent}`}>
      <img src={imageSlide1} className={`d-block w-100 ${style.imageSlider}`} alt="slide image 1"  />
      <div className={style.sliderOneInfo}>
        <h1 className={style.sliderOneInfoTitle}>HI! <br /> I'm Tarek</h1>
        <p className={style.sliderOneInfoDesc}>100% htmk5 bootstrap template Mode</p>
        <span className={style.sliderOneInfoSpan}>BY <a href="#">ColorLib.com</a></span>
        <button className={style.sliderOneInfoBtn}>download cv<i className="fa-solid fa-download"></i></button>
      </div>
    </div>
   
    <div className={`carousel-item active ${style.sliderTwoContent}`}>
      <img src={imageSlide2} className={`d-block w-100 ${style.imageSlider}`} alt="slide image 1"  />
      <div className={style.sliderTwoInfo}>
        <h1 className={style.sliderTwoInfoTitle}>HI! <br /> I'm Full Stack</h1>
        <p className={style.sliderTwoInfoDesc}>100% htmk5 bootstrap template Mode</p>
        <span className={style.sliderTwoInfoSpan}>BY <a href="#">ColorLib.com</a></span>
        <button className={style.sliderTwoInfoBtn}>view portofolio <i className="fa-solid fa-briefcase"></i></button>
      </div>
    </div>
    
  </div>
</div>

    </>
  )
}
