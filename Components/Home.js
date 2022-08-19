import React from 'react'
import home from '../styles/Image/header.png'
import Image from 'next/image'
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={home}
                        className="max-w-sm rounded-lg shadow-2xl"
                        width={500}
                        height={450}
                    />
                    <div>
                        <h1 className="text-5xl font-bold">We Build
                          <br />  Your Dream</h1>
                        <p className="py-6 text-sm text-gray-900">Online Easte Agency, the mordern way to sell your own home,<br />
                            You can use Griffin Residential to market your property</p>
                        <button className="btn btn-gray-900">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home