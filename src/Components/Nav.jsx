import React  from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import '../Styles/Navbar.css'
import { useRef, useState } from 'react'
import Homeicon  from '../assets/homeicon.jpg'
import {FaCartPlus} from 'react-icons/fa'

export const Nav = ()=>{

  const navRef = useRef();

  const [showNavbar,setShownavbar] = useState(false);

  const navfunction=()=>{

    window.scroll(0,0);
    setShownavbar(!showNavbar);
  }


  return (
    <header>
      
      <div className="right">
        <div className='home'>
        <img src={Homeicon} alt="icon"/>
      </div>
      </div>
      
      <div className="left">

      <nav ref={navRef} id={showNavbar ? "links" : ""} className='links'>

      <Link onClick={ ()=> navfunction()}to={"/"}>Home</Link >
      <Link onClick={ ()=> navfunction()}to={"/Store"}>Store</Link>
      <Link onClick={ ()=> navfunction()}to={"/Contact"}>Contact</Link>
      <Link onClick={ ()=> navfunction()}to={"/Shopping-Cart"}><FaCartPlus/></Link>

      </nav>
  
     <button onClick={()=> setShownavbar(!showNavbar)}><FaBars/></button>
      
     

      </div>
      

    </header>

    
    
  
  )
};
