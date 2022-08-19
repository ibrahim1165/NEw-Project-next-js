import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer className="p-10  bg-gray-900">
                <div className="footer  text-neutral-content grid-cols-2 md:grid-cols-3">
                    <div>
                        <span className="footer-title">Services</span>
                        <a href="#" className="link link-hover">Home</a>
                        <a href="#" className="link link-hover">Design</a>
                        <a href="#" className="link link-hover">Marketing</a>
                        <a href="#" className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a href="#" className="link link-hover">About us</a>
                        <a href="#" className="link link-hover">Contact</a>
                        <a href="#" className="link link-hover">Jobs</a>
                        <a href="#" className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a href="#" className="link link-hover">Terms of use</a>
                        <a href="#" className="link link-hover">Privacy policy</a>
                        <a href="#" className="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div className="text-center my-12 text-white">
                    <p>Copyright &copy; 2022 - All right reserved by Builder Home</p>
                </div>
            </footer>
        </div>
  )
}

export default Footer