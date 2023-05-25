import React from 'react'
import './css/equip.css'
import { ItemEquip} from '../helpers/Items'
import { List3 } from '../Components/List'
import { Navbtns2 } from './navbtns2'

const Equip = () => {



  return (
    <>  
          <div className='heightE'>
          <div className="menuTitle">
                <Navbtns2/>
            </div>
            
            <div className="equip">
            {ItemEquip.map( (item ,key) =>{

             return  <List3 key={key} name={item.name}  image={item.image} price={item.price} id={item.id}/>
            })}
            </div>
             
            </div>

    </>
  )
}

export default Equip
