import React from 'react'
import './css/offer.css'
import { Itemlist } from './Items'
import { List2 } from '../Components/List'
import {Link} from 'react-router-dom'

const Offer1 = () => {


    const filteredItems = Itemlist.filter((item) => item.id <= 8);

  return (
    <>
            <p className='heading-offer'>We Offer:</p>
           <div className="display-items">
            {filteredItems.map( (item ,key) =>{
             return <Link onClick={()=> window.scroll(0,0)} to={'/Store'}><List2 key={key} name={item.name}  image={item.image}/></Link>
            })}
            </div>

    </>
  )
}

export default Offer1
