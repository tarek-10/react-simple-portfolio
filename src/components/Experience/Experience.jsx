import React from "react";
import "./Experience.css";
export default function Experience() {
  return (
    <>
      <div className="experienceContainer ">
        <div className="experienceHeadLine">
          <p className="experienceHeadLineDesx">Experience</p>
          <h1 className="experienceHeadLineTitle">WORK EXPERIENCE </h1>
        </div>

        <div className="experienceContent">
          <ul className="experienceUl">
            <li>
              <div className="experienceFirstIcon">
                <i className="fa-solid fa-pencil firstIcon"></i>
              </div>
              <div className="experienceFirstIconInfo">
                <h2 className="experienceFirstIconInfoTitle">
                  Full Stack Developer 	&nbsp;
                  <span className="experienceFirstIconInfoSpan">
                   
                    2017-2018
                  </span>
                </h2>
                <p className="experienceFirstIconInfoDesc">
                  Tolerably earnestly middleton extremely distrusts she boy now
                  not. Add and offered prepare how cordial two promise. Greatly
                  who affixed suppose but enquire compact prepare all put. Added
                  forth chief trees but rooms think may.
                </p>
              </div>
    
            </li>
            
            <li>
              <div className="experienceSecondIcon">
                <i className="fa-solid fa-pencil firstIcon"></i>
              </div>
              <div className="experienceFirstIconInfo">
                <h2 className="experienceFirstIconInfoTitle">
                Front End Developer at Google Company 	&nbsp;
                  <span className="experienceFirstIconInfoSpan">
                   
                  2017-2018
                  </span>
                </h2>
                <p className="experienceFirstIconInfoDesc">
                  Tolerably earnestly middleton extremely distrusts she boy now
                  not. Add and offered prepare how cordial two promise. Greatly
                  who affixed suppose but enquire compact prepare all put. Added
                  forth chief trees but rooms think may.
                </p>
              </div>
    
            </li>

            <li>
              <div className="experienceThirdIcon">
                <i className="fa-solid fa-pencil firstIcon"></i>
              </div>
              <div className="experienceFirstIconInfo">
                <h2 className="experienceFirstIconInfoTitle">
                     System Analyst	&nbsp;
                  <span className="experienceFirstIconInfoSpan">
                   
                  2017-2018
                  </span>
                </h2>
                <p className="experienceFirstIconInfoDesc">
                  Tolerably earnestly middleton extremely distrusts she boy now
                  not. Add and offered prepare how cordial two promise. Greatly
                  who affixed suppose but enquire compact prepare all put. Added
                  forth chief trees but rooms think may.
                </p>
              </div>
    
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
