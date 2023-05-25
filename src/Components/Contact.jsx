import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/Contact.css'
import {useNavigate} from 'react-router-dom'

export const Contact =()=>{

    const nav = useNavigate();


    const message =()=>{

        alert("Message Sent ;)")
    }

    return(
        <div className='contact'>
    
        
        <form action="" onSubmit={message}>
            <a href="/" target='blank'><GitHubIcon/> </a>

            <h2>Contact Us</h2>

            <label htmlFor="">Name:</label>
            <input type="text" id="" name="" placeholder="Enter Name" />
            <br/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="" name="" placeholder="Enter Email" />
            <br/><br/>

            <label htmlFor="Message">Message:</label>
            <br/>
            <textarea name="" id="" cols="35" rows="12" placeholder='Message'></textarea>
            <br />
            <button>Submit</button>
        </form>
        </div>
    )

};