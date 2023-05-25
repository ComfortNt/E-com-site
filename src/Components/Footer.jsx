import '../Styles/Footer.css'
import {Link} from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {

    const changedir=()=>{
      window.scrollTo(0, 0);
  
    };
  return (
    <>
     
    
         <footer>
         <div className="footer-links">
           <Link onClick={()=> window.scroll(0,0)}>About </Link>
           <Link onClick={changedir} to={'/Contact'}>Store locator </Link>
           <Link onClick={()=> window.scroll(0,0)}>FAQs </Link>
           <Link onClick={()=> window.scroll(0,0)}>Careers </Link>
           <Link onClick={changedir} to={'/Contact'}>Contact Us </Link>
           <a href="https://github.com/ComfortNt" target='blank'><GitHubIcon/> </a>
         </div>
         <p className="love">
           Design &nbsp; by{" "}
           <a
             target="_blank"
             rel="noreferrer"
             style={{ color: "white" }}
             href="https://github.com/Abderraouf-Rahmani"
           >
             &nbsp; Abderraouf
           </a>
         </p>
       </footer>
     </>
  )
}

export default Footer
