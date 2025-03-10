import React from 'react'
import Profile from "../../assets/profile.png"
import { IoIosArrowDown  } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='py-4'>
        <div className="container flex justify-between items-center">
            {/* logo section */}
            <div>
                <p className='text-3xl font-semibold'>FOOD <span className='text-red-500'>EAT</span></p>
            </div>
            {/* menu section */}
            <div className=' flex justify-center items-center gap-10'>
                <ul className='hidden sm:flex  gap-8'>
                    <li className=' hover:border-b-2 border-primary uppercase'>Home</li>
                    <li className='hover:border-b-2 border-primary uppercase'>Menu</li>
                    <li className=' hover:border-b-2 border-primary uppercase'>About</li>
                </ul>
            </div>
            {/* login section */}
            <div className='flex gap-4 items-center'>
                <img src={Profile} alt="" className='w-10 rounded-full'  />
                <IoIosArrowDown  />

            </div>
        </div>
    </div>
  )
}

export default Navbar