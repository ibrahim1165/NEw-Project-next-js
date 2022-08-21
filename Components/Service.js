import Image from 'next/image'
import React from 'react'
import pic from '../styles/Image/pic2.png'
const Service = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    src={pic}
                    width={500}
                    height={450}
                    alt="home"
                />
                <div>
                    <h1 className="text-5xl font-bold">Villa on Washington<br /> Avenue</h1>
                    <p className="py-6 text-sm text-gray-900">Online Easte Agency, the mordern way to sell your own home,<br />
                        You can use Griffin Residential to market your property</p>
                    <button className="btn btn-gray-900">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Service