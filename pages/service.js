import React from 'react'
import Navbar from '../Components/Navbar';
import Image from 'next/image'
import Footer from '../Components/Footer';
import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch('https://tranquil-journey-28375.herokuapp.com/service');
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}
const service = ({ data }) => {
    return (
        <div>
            <Head>
                <title>Service</title>
            </Head>
            <Navbar />
            <div className="text-center  my-12">
                <h4>Service</h4>
                <h1 className="text-3xl font-bold">We re an agency tailored to all<br /> clients needs that always delivers</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto px-8 mt-8">
                {
                    data?.map(d => {
                        return <div key={d._id}>
                            <div className='mb-12'>
                                <div className="card w-[360px] h-[335px] bg-base-100 shadow-x items-center">
                                    <Image
                                        src={d.img}
                                        width={78}
                                        height={78}
                                        alt="Home"
                                    />
                                    <div className="card-body items-center text-accent fond-bold">
                                        <h2 className="card-title ">{d.name}</h2>
                                        <p>${d.price}</p>
                                        <p className="text-sm text-center text-gray-500">
                                            Amet minim mollit non deserunt
                                            ullamco est sit aliqua dolor do amet
                                            sint. Velit officia consequat duis
                                            enim velit mollit
                                        </p>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default service