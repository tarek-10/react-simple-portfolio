import React, { useState } from "react";
import style from "./Sidebar.module.css";
import aboutImage from "../assets/image/about-BgAkqdr2.jpg"
import {NavLink} from "react-router-dom"
export default function Sidebar() {
  const [click , setClick] = useState(false);
  const changeClick = ()=>{
    setClick(true);
  }
  return (
    <>
     <div className={style.navbarConrainer}>
     {/* <div className={style.closeIcon}><i className="fa-solid fa-x"></i></div> */}
       <nav className={`${style.navbarCon} navbar navbar-expand-lg navbar-light`}>
        <div className="container-fluid">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${style.sidebarContainer} `} id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${style.sidebarul}`}>
              <li className={`nav-item ${style.sidebarLiImage}`}>
               <img src={aboutImage} alt="about image"  />
              </li>
              <li className={`nav-item `}>
                <h3 className={style.infoTitle} style={{cursor:"pointer"}}> Tarek Mohamed </h3>
                <span><a href="#">Full Stack Developer</a> IN <br />Egypt</span>
              </li>
              <li className={`nav-item ${style.sidebarLiFirst} ${style.sidebarLi}`} style={{cursor:"pointer"}}>
                <NavLink onClick={changeClick}  className="nav-link " to="/home">
                  Home
                </NavLink>
              </li>

              <li className={`nav-item ${style.sidebarLi}`}>
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li className={`nav-item ${style.sidebarLi}`}>
                <NavLink className="nav-link" to="/skills">
                  Skills
                </NavLink>
              </li>
              <li className={`nav-item ${style.sidebarLi}`}>
                <NavLink className="nav-link" to="/experience">
                  Experience
                </NavLink>
              </li>
              <li className={`nav-item ${style.sidebarLi}`}>
                <NavLink className="nav-link" to="/work">
                  Work
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
     </div>
    </>
  );
}
 