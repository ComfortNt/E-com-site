
import {Nav} from  '../src/Components/Nav.jsx'
import {Home} from '../src/Components/Home.jsx'
import {Contact} from '../src/Components/Contact.jsx'
import {Store} from '../src/Components/Store.jsx'
import {Routes , Route} from 'react-router-dom'
import './index.css'
import Footer from './Components/Footer.jsx'
import High_end from './helpers/FIlters.jsx'
import Low_end from './helpers/Filter2.jsx'
import Task from './helpers/Filter4.jsx'
import Equip from './helpers/Filter3.jsx'
import ContextProvider from './Components/Cart.jsx'
import Purchase from './Components/Purchase.jsx'


function App() {
 

  return (
<>
    <ContextProvider>
    <Nav/>  
    <Routes>
      <Route path={'/'} element={<Home/>} />
      <Route path={'/Contact'} element={<Contact/>} />
      <Route path={'/Store'} element={<Store/>} />
      <Route path={'/High-end'} element={<High_end/>} />
      <Route path={'/Low-end'} element={<Low_end/>} /> 
      <Route path={'/Pc-Equip'} element={<Equip/>} />
      <Route path={'/Task-Chairs'} element={<Task/>} /> 
      <Route path={'/Shopping-Cart'} element={<Purchase/>} />
    </Routes>
    <Footer/>
   </ContextProvider>

</>
  
)}

export default App
