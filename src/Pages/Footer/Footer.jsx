import React from 'react';
import logo from "../../assets/books.jpg"
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content p-10">
            <div className='flex flex-col md:flex-row justify-around items-start md:items-center'>
                <aside>
                    <img src={logo} className='w-32 h-28 mb-4 md:mb-0 rounded-full' alt="" />
                    <p>
                        ACME Book Company
                        <br />
                        Providing reliable book service since 2020
                    </p>
                </aside>
                <div className='flex flex-col md:flex-row gap-8 md:gap-28 my-4 md:my-0'>
                    <nav className='pb-4 md:pb-0'>
                        <h6 className="footer-title">Services</h6>
                        <div className='flex flex-col'>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </div>
                    </nav>
                    <nav className='pb-4 md:pb-0'>
                        <h6 className="footer-title">Company</h6>
                        <div className='flex flex-col'>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                    </nav>
                    <nav className='pb-4 md:pb-0'>
                        <h6 className="footer-title">Legal</h6>
                        <div className='flex flex-col'>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className='flex gap-6'>
                            <a className="link link-hover"><FaFacebook className='text-xl'></FaFacebook></a>
                            <a className="link link-hover"><FaTwitter className='text-xl'></FaTwitter></a>
                            <a className="link link-hover"><FaLinkedin className='text-xl'></FaLinkedin></a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="divider"></div>

            <aside>
                <p className='text-center py-4'>Copyright ©2021 - All right reserved by ACME Book Company Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;