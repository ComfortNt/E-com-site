import { Itemlist } from "../helpers/Items";
import { List } from "./List";
import '../Styles/Store.css'
import { Navbtns } from "../helpers/navbtns";






 const cart =()=>{
    alert("Shopping Cart Coming Soon!");
 }


export const Store=()=>{

    return(
        <>
        <div className="menu">

            <div className="menuTitle">
                <Navbtns/>
            </div>
            
            <div className="menuList">
            {Itemlist.map( (item ,key) =>{

             return  <List key={key} name={item.name}  image={item.image} price={item.price} id={item.id}/>
            })}
            </div>  
       
        </div>
         </>
    )

};