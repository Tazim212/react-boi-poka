import React from 'react';
import bannerPic from "../../assets/book-1.jpg"

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-16 bg-linear-to-r from-green-800 to-indigo-300 text-white'>
            <div className='text-center md:text-left'>
                <h1 className='text-4xl font-bold pb-6'>Books to freshen<br></br> up your bookshelf</h1>
                <button className='btn btn-accent mb-5 md:mb-0'>View The List</button>
            </div>
            <img src={bannerPic} className='w-85 md:w-95 h-89 my-5 rounded-3xl ml-0 md:ml-10 shadow-2xl bg-none' alt="" />
        </div>
    );
};

export default Banner;