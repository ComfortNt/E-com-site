import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import "./css/Banner.css";

function Banner({img}) {

    const nav = useNavigate();

    const changedir=()=>{
      window.scrollTo(0, 0);
      nav('/Task-Chairs');
    };
  
  return (
    <div className="banner">
    <div className="container">
    <div className="banner-container">
         <div className="text-side">
            <div className="text">
              <h2>Task chair Special!</h2>
              <p> Task chairs are highly adjustable, so as to match the natural contours of an 
                individual's spine and back and to allow for optimum blood flow </p>
                <button onClick={changedir}>Shop now</button> 
            </div>
          </div>
          <div className="img-side">
            <img src={img} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
