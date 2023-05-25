import '../Styles/Store.css'
import {Link} from 'react-router-dom'
export const Navbtns = () => {







  return (
   <>

    <div className='btn'>

    <Link onClick={()=> window.scroll(0,0)} to={'/Store'}><button>All Items</button></Link>
    <Link onClick={()=> window.scroll(0,0)} to={'/Low-end'}><button>Low-end</button></Link>
    <Link onClick={()=> window.scroll(0,0)} to={'/High-end'}> <button>High-end</button></Link>
    <Link onClick={()=> window.scroll(0,0)} to={'/Pc-Equip'}><button>Pc-Equip</button> </Link>
    <Link onClick={()=> window.scroll(0,0)} to={'/Task-Chairs'}><button>Specials</button></Link>


    
 
    </div>
   
   </>
  )
}


