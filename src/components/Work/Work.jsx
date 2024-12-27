import  { useState } from 'react';
import './Work.css';
import imag1 from "../../assets/image/img-1-C4nS0eD8.jpg"
import imag2 from "../../assets/image/img-2-D-4H1m4L.jpg"
import imag3 from "../../assets/image/img-3-pR2ZEVY9.jpg"
import imag4 from "../../assets/image/img-4-tHccITd-.jpg"
import imag5 from "../../assets/image/img-5-lAucr__a.jpg"
import imag6 from "../../assets/image/img-6-DFW03AZ3.jpg"
export default function Work() {
  const [activeTab, setActiveTab] = useState('Graphic Design');
  const [show , setShow] = useState(false);
  const toggleShow = ()=>{
    setShow(!show);
  }
  return (
    <div className="workContainer">
      <div className="workInfo">
        <p className="workInfoSpan">my work</p>
        <h3 className="workInfoTitle">recent work</h3>
      </div>
      <div className="workInfolist">
        <ul className="workInfoUl">
          {['Graphic Design', 'Apps', 'Software'].map((item) => (
            <li
              key={item}
              className={item === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="workContent">
        {activeTab === 'Graphic Design' &&
        <> 
         <div className='graphicContainer'>
           <div className="firstImage">
             <img src={imag1} alt="profile 1" className='w-100' />
             <div className="overlay">
               <a href="#" className='overlayLink'>Work</a>
               <p className='overlayAnimation'>Animation</p>
                <div className="iconContainer">
                <span className='overlayIcon'><i className='fa-solid fa-share-nodes ms-1'></i></span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-eye ms-2'></i> 100</span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-heart ms-2'></i> 49</span>
                </div>
             </div>
           </div>
           <div className="firstImage">
             <img src={imag2} alt="profile 1" className='w-100' />
             <div className="overlay">
               <a href="#" className='overlayLink'>Work</a>
               <p className='overlayAnimation'>Animation</p>
                <div className="iconContainer">
                <span className='overlayIcon'><i className='fa-solid fa-share-nodes ms-1'></i></span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-eye ms-2'></i> 100</span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-heart ms-2'></i> 49</span>
                </div>
             </div>
           </div>
  
         </div>

         <div className='graphicContainer my-4'>
           <div className="firstImage">
             <img src={imag3} alt="profile 1" className='w-100' />
             <div className="overlay">
               <a href="#" className='overlayLink'>Work</a>
               <p className='overlayAnimation'>Animation</p>
                <div className="iconContainer">
                <span className='overlayIcon'><i className='fa-solid fa-share-nodes ms-1'></i></span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-eye ms-2'></i> 100</span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-heart ms-2'></i> 49</span>
                </div>
             </div>
           </div>
           <div className="firstImage">
             <img src={imag4} alt="profile 1" className='w-100' />
             <div className="overlay">
               <a href="#" className='overlayLink'>Work</a>
               <p className='overlayAnimation'>Animation</p>
                <div className="iconContainer">
                <span className='overlayIcon'><i className='fa-solid fa-share-nodes ms-1'></i></span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-eye ms-2'></i> 100</span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-heart ms-2'></i> 49</span>
                </div>
             </div>
           </div>
  
         </div>

        <div className="tito">
        <button className={`btn btn-info w-25 text-white py-2 btnMore ${show?"hidebtn":""}`} onClick={toggleShow}> Show More </button>

        </div>
        {show&&
          <>
          <div className='graphicContainer my-4'>
           <div className="firstImage">
             <img src={imag5} alt="profile 1" className='w-100' />
             <div className="overlay">
               <a href="#" className='overlayLink'>Work</a>
               <p className='overlayAnimation'>Animation</p>
                <div className="iconContainer">
                <span className='overlayIcon'><i className='fa-solid fa-share-nodes ms-1'></i></span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-eye ms-2'></i> 100</span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-heart ms-2'></i> 49</span>
                </div>
             </div>
           </div>
           <div className="firstImage">
             <img src={imag6} alt="profile 1" className='w-100' />
             <div className="overlay">
               <a href="#" className='overlayLink'>Work</a>
               <p className='overlayAnimation'>Animation</p>
                <div className="iconContainer">
                <span className='overlayIcon'><i className='fa-solid fa-share-nodes ms-1'></i></span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-eye ms-2'></i> 100</span>
               <span className='overlayIcon iconUnderLine'><i className='fa-regular fa-heart ms-2'></i> 49</span>
                </div>
             </div>
           </div>
         </div>
        
        </>}
         
         </> 
        }
        {activeTab === 'Apps' && <p>Details about app development projects.</p>}
        {activeTab === 'Software' && <p>Software development portfolio.</p>}
      </div>
    </div>
  );
}
