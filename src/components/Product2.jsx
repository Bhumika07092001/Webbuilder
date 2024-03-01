import React from 'react'
import '../Product.css'
import Image from './Images/picture1.jpg'
import trophy from "./Images/trophy.png"


const Product2=({item})=>{
    return (
        <div className='product-container'>
            <div className='trophy'> 
                 {
                    item===1 && 
                    ( <div className='trophy-img-div'>
                    <img className='trophy-img'src={trophy} alt=''></img>
                    <p>Best Choice</p>
                    </div>)
                }     
                <span className='product-img-span'>
                <div className='number-circle'>1</div>
                <img className='product-image' src={Image} alt=''></img>
                </span>
                <div className='product-description'>
                    <h3><strong>web builder 1</strong></h3>
                    <p>computer modern classic with mix support</p>
                    <h5>$35.6 <sub>$30.6<span style={{color:'red'}}>(40%off)</span></sub></h5>
                    <button className='view-btn'>VIEW DEAL</button>
                </div>
           </div>
        </div>
    );
}

export default Product2;