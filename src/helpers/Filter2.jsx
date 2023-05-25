import React from 'react'
import './css/low.css'
import { ItemLow} from '../helpers/Items'
import { List3 } from '../Components/List'
import { Navbtns2 } from './navbtns2'

const Low_end = () => {



  return (
    <>  
          <div className='low'>
          <div className="menuTitle">
                <Navbtns2/>
             
                
                
            </div>
            
            <div className="low3">
            {ItemLow.map( (item ,key) =>{

             return  <List3 key={key} name={item.name}  image={item.image} price={item.price} id={item.id}/>
            })}
            </div>
             
            </div>

    </>
  )
}

export default Low_end
