import React from 'react'
import './css/high.css'
import { Itemhigh} from '../helpers/Items'
import { List3 } from '../Components/List'
import { Navbtns2 } from './navbtns2'

const High_end = () => {



  return (
    <>  
          <div className='heigh'>
          <div className="menuTitle">
                <Navbtns2/>
            </div>
            
            <div className="lst3">
            {Itemhigh.map( (item ,key) =>{

             return  <List3 key={key} name={item.name}  image={item.image} price={item.price} id={item.id}/>
            })}
            </div>
             
            </div>

    </>
  )
}

export default High_end
