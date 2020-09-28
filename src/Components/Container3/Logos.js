import React from 'react'
import './Logos.css'
import crown from './crown1.png'
import apple from './apple.png'
import google from './google.png'
const Logos = () =>{

    return(
    <div className='container'>
            <h3>BOOK A SEAT HERE</h3>

            <img className='crown' src={crown}/>
            
            <h1>bookingham</h1>
            
            <img className='logos'src={google}/>
            <img className='logos'src={apple}/>

           
            
            
            
        
    </div>
    )
}

export default Logos;