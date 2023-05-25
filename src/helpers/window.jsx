
import React from 'react'
import "./css/1.css"
import {Link} from 'react-router-dom'
import three from './icon/1.jpg'
import four from './icon/2.jpg'
import two from './icon/3.jpg'
import one from './icon/4.jpg'


function Window() {
  return (
    <>

<div className="home-container">
	  
	  
	  
      <div className="container">
      
      
        <div className="grid-container">
        
        
          <div className="featured grid-one">
            <Link to="/" onClick={()=> window.scroll(0,0)}>
              <div id="img1" className="lil-overlay"></div>
              <img src={one} alt="img1" />
              <p className="main-description">Code Comfortably</p>
            </Link>
          </div>
          <div className="featured grid-two">
            <Link to="/Pc-Equip" onClick={()=> window.scroll(0,0)}>
              <div id="img2" className="lil-overlay"></div>
              <img src={two} alt="img2" />
              <p className="main-description">Pc Equipment & Parts</p>
            </Link>
          </div>
          <div className="featured grid-four">
            <Link to="/Low-end" onClick={()=> window.scroll(0,0)}>
              <div id="img3" className="lil-overlay"></div>
              <img src={three} alt="img3" />
              <p className="main-description">Low-end Pc's</p>
            </Link>
          </div>
          <div className="featured grid-four-low">
            <Link to="/High-end" onClick={()=> window.scroll(0,0)}>
              <div id="img4" className="lil-overlay"></div>
              <img src={four} alt="img4" />
              <p className="main-description">High-end Pc's</p>
            </Link>
          </div>
          
          
        </div>
        
        
        
      </div>
      
    </div>

      
    </>
  )
}

export default Window
