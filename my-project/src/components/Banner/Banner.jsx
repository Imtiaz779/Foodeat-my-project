import React from 'react'
import BannerImg from "../../assets/2.png"
const Banner = () => {
    return (
        <>
            <div className="container py-14">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* img section    */}
                    <div className="flex justify-center items-center">
                        <img src={BannerImg} alt="" />
                    </div>
                    {/* text section  */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-semibold">Food is always good</h1>
                        <p className="py-4 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dolore pariatur saepe vero ex quas magni, sapiente ratione commodi amet!

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner