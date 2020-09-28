import React from 'react'
import beer1 from './beer1.jpg'
import './SecondImage.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


const SecondImage = () =>{

    return(
            <div className>
                    <img className='img1' src={beer1}/>
                    
                    <Link to="/Menu"><Button className='buton1' >Menu</Button></Link> 
            </div>
    )

}

export default SecondImage;