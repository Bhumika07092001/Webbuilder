import React from 'react'
import '../Product.css'
import Image from './Images/picture1.jpg'
import trophy from "./Images/trophy.png"
import star from './Images/star.png'


const Product=({item})=>{
    return (
        <div className='product-container'>
            <div className='trophy'> 
                 {
                    item<3 && 
                    ( <div className='trophy-img-div'>
                    <img className='trophy-img'src={trophy} alt=''></img>
                    <p>Best Choice</p>
                    </div>)
                }     
                <span className='product-img-span'>
                <div className='number-circle'>1</div>
                 <img className='product-image' src={Image} alt=''></img>
                </span>
                </div>
           
        <div className='product-description'>
            <p>
                <strong>Lorem ipsum dolor sit amet,</strong>  
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            </p>
            <h3>Main highlights</h3>
            <div className='des-2'>
                <p> <strong>Lorem ipsum dolor sit amet</strong> 
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                </p>
            </div>
        </div>
        <span className='product-rating'>
            <div className='rating'>
                <h2>9.8</h2>
                <h5>Exceptional</h5>
                <div><img className='star-img' src={star} alt=''></img></div>
            </div>
            <button className='view-btn'>VIEW</button>
        </span>
        </div>
    );
}

export default Product;