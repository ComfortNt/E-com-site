import React, { createContext, useState } from 'react'
import {Itemlist} from '../helpers/Items'

export const ShopContext = createContext(null);

const ContextProvider = (props) => {


  
   

const getDefaultCart=()=>{
     let cart ={};
 for(let i = 1; i < Itemlist.length + 1; i++){
        cart[i] = 0
 };
     return cart;
};

 const [cartItems , SetcartItems] = useState(getDefaultCart());

 const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = Itemlist.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.price;
    }
  }
  return totalAmount;
};
const addToCart =(item)=>{
    SetcartItems((prev) => ({...prev,[item]:prev[item] +1}))
};

const RemoveFromCart =(item)=>{
    SetcartItems((prev) => ({...prev,[item]:prev[item] - 1}))
};

const Setvalue=(amount,id)=>{

  SetcartItems((prev) => ({...prev , [id]: amount}))

}

console.log(cartItems);

const contextval = {cartItems, addToCart,RemoveFromCart, Setvalue,getTotalCartAmount}
  return (
    
    <ShopContext.Provider value={contextval}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ContextProvider;
