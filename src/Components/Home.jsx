import React  from 'react'
import '../Styles/Home.css'
import Offer1 from '../helpers/offer1'
import Window from '../helpers/window';
import img from '../helpers/icon/banner.jpg'
import Banner from '../helpers/banner';


export const Home =()=> {
 
  return (
    <div className='main'>

      <div className="words">
      <Window/> 
      <Offer1/>
      <Banner img={img}/> 
      </div>      
    </div>
  )
}


