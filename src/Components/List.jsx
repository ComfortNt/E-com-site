import React, { useContext, useState } from 'react'
import { ShopContext } from "./Cart";




export const List =({name , image, price, id})=> {

  
  const {addToCart,cartItems} = useContext(ShopContext);
  const cartIdamount = cartItems[id];
  
  return (
    <div className='menuItem'>

        <div style={{backgroundImage : `url(${image})`}}>
        </div>

        <h1>{name}</h1>
        
        <p>${price}</p>
        <button onClick={()=> addToCart(id)}>Add to Cart {cartIdamount > 0 && <span>({cartIdamount})</span> }</button> 


        

        
    </div> 
  )
}



export const List2 =({name , image})=> {
  return (
    <div className='Item1'>
        <div style={{backgroundImage : `url(${image})`}}></div>
        <h1>{name}</h1>
    </div>
  )
}



export const List3 =({name , image, price , id})=> {

  const {addToCart,cartItems} = useContext(ShopContext);
  const cartIdamount = cartItems[id];

  return (
    <div className='list3'>
        <div style={{backgroundImage : `url(${image})`}}>
        </div>
        <h1>{name}</h1> 
        <p>${price}</p>
        <button onClick={()=> addToCart(id)}>Add to Cart {cartIdamount > 0 && <span>({cartIdamount})</span> }</button>    
    </div>
  )
}
