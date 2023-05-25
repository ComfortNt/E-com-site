import React, { useContext } from 'react'
import '../helpers/css/cart.css'
import {Link} from 'react-router-dom'
import { ShopContext } from './Cart'


function Shopping({image,name,price,id}) {

  const {cartItems , addToCart,RemoveFromCart,Setvalue , getTotalCartAmount} = useContext(ShopContext)


  const total = getTotalCartAmount();
  return (
    <div className="all">
      <div className='cartitem'>
    <div style={{backgroundImage : `url(${image})`}}></div>
    </div>

    <div className='col'>
       <h1>{name}</h1>
         <p>${price}</p>   

        <br />
          <button onClick={()=> addToCart(id)}>+</button>
         <input  value={cartItems[id]} onChange={(e)=> Setvalue(Number(e.target.value), id)}/>
          <button onClick={()=> RemoveFromCart(id)}>-</button>

          <div className='out'>
            <p>Sub Total :${Math.floor(total)}</p>
           <Link to={"/Store"}><button>Continue Shopping</button></Link> 
           <button>CheckOut</button>
          </div>
    </div>
        
        
   
    </div>
    

   
  )
}

export default Shopping

