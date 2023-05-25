import React , {useContext} from 'react'
import {Itemlist} from '../helpers/Items'
import {ShopContext} from '../Components/Cart'
import Shopping from './Shopping'
import '../helpers/css/cart.css'

function Purchase() {

    const {cartItems} = useContext(ShopContext)
  return (
    <div className='cart'> 

    <div className="cont">   
        {Itemlist.map((product,key) =>{

         if(cartItems[product.id] !== 0 ){

            return <Shopping image={product.image} name={product.name} price={product.price} id={product.id} key={key}/>
         }

        })}
        </div>  
      
    </div>
  )
}

export default Purchase
