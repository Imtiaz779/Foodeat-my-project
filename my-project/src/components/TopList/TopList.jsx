import React from 'react'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
const TopList = () => {
    return (
        <div className='container'>
            {/* header section  */}
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>Top List</h1>
                <p> Our top list </p>
            </div>
            {/* card section  */}
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div>
                    <img src={image1}alt="" />
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>$10.99</p>
                    <p>Food Name </p>
                </div>
                <div>
                    <img src={image2} alt="" />
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>$10.99</p>
                    <p>Food Name </p>
                </div>
                <div>
                    <img src={image3} alt="" />
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>$10.99</p>
                    <p>Food Name </p>
                </div>
            </div>
        </div>
    )
}

export default TopList