import React from 'react'
import './css/task.css'
import { ItemTask} from '../helpers/Items'
import { List3 } from '../Components/List'
import { Navbtns2 } from './navbtns2'

const Task = () => {



  return (
    <>  
          <div className='tasks'>
          <div className="menuTitle">
                <Navbtns2/>
            </div>
            
            <div className="lst3">
            {ItemTask.map( (item ,key) =>{

             return  <List3 key={key} name={item.name}  image={item.image} price={item.price} id={item.id}/>
            })}
            </div>
             
            </div>

    </>
  )
}

export default Task
