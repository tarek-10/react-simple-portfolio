import React from "react";
import "./Skills.css";
export default function Skills() {
  return (
    <>
      <div className="skillaContainer">
        <div className="skillsWrapper">
          <div className="skillsInfo">
            <span className="skillsSpan">my specialty</span>
            <h1 className="skillsTitle">my skills</h1>
            <p className="skillsDesc">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </p>
          </div>

          <div className="skillsProgress">
            <div className="container">
              <div className="row containerProgress">
                <div className="col-md-6 firstProgress">
                  <div className="firstProgressInfoItems">
                    <span className="firstProgressInfoSpan">C++</span>
                    <label htmlFor="firstProgress" className="firstProgresslabel">75%</label>
                  </div>
                  <div className="progress progressIcon">
                    <div
                      className="progress-bar "
                      id="firstProgress"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                </div>
                <div className="col-md-6 secondProgress">
                <div className="secondProgressInfoItems">
                    <span className="secondProgressInfoSpan">Core Java</span>
                    <label htmlFor="secondProgress" className="secondProgresslabel">60%</label>
                  </div>
                  <div className="progress progressIconTwo">
                    <div
                      className="progress-bar secondPro"
                      id="secondProgress"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      60%
                    </div>
                  </div>
                </div>
                <div className="col-md-6 thirdProgress">
                <div className="secondProgressInfoItems">
                    <span className="secondProgressInfoSpan">React.js</span>
                    <label htmlFor="secondProgress" className="thirdProgresslabel">85%</label>
                  </div>
                  <div className="progress progressIconTwo">
                    <div
                      className="progress-bar thirdPro"
                      id="secondProgress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div className="col-md-6 secondProgress">
                <div className="secondProgressInfoItems">
                    <span className="secondProgressInfoSpan">Node.js</span>
                    <label htmlFor="secondProgress" className="fourProgresslabel">90%</label>
                  </div>
                  <div className="progress progressIconTwo">
                    <div
                      className="progress-bar fourPro"
                      id="secondProgress"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
                <div className="col-md-6 secondProgress">
                <div className="secondProgressInfoItems">
                    <span className="secondProgressInfoSpan">Wso2 Micro Integrator </span>
                    <label htmlFor="secondProgress" className="fiveProgresslabel">70%</label>
                  </div>
                  <div className="progress progressIconTwo">
                    <div
                      className="progress-bar fivePro"
                      id="secondProgress"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="col-md-6 secondProgress">
                <div className="secondProgressInfoItems">
                    <span className="secondProgressInfoSpan">jQuery</span>
                    <label htmlFor="secondProgress" className="sixProgresslabel">80%</label>
                  </div>
                  <div className="progress progressIconTwo">
                    <div
                      className="progress-bar sixPro"
                      id="secondProgress"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
