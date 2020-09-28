import React from 'react'
import food1 from './food1.jpg'
import './FirstImage.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


const FirstImage = () =>{

    return(
            <div>
                    <img className='img1' src={food1}/>
                  <Link to="/Menu"><Button className='buton1' >Menu</Button></Link> 
            </div>
    )
}

export default FirstImage;