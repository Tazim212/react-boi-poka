// import { useState } from "react";
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/erson3.jpg'
import person4 from '../../assets/person4.jpg'
import { FaStar } from "react-icons/fa";


const UserReviews = () => {

    return (
        <div className='bg-gray-300 py-3'>
            <div className=' py-2 ps-0 md:ps-10 lg:ps-5 text-black text-center md:text-left'>
                <h1 className="font-bold text-2xl md:text-4xl">Reviews</h1>
                <p className='pt-2'>Our users gave their valuable reviews</p>
            </div>

            {/* ------------------ review-1 -------------- */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center md:justify-evenly md:items-baseline py-3">

                <div className="card w-75 image-full shadow-sm rounded-3xl">
                    <figure>
                        <img
                            src={person1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-amber-500">Michael Johnson</h2>
                        <p className="italic">"I love how easy it is to save books and create my reading list. A must-have platform for every book lover."</p>
                        <p className='flex items-center gap-2'>Rating: <span className='text-yellow-300'><FaStar></FaStar></span> </p>
                    </div>
                </div>
                {/* ------------------ review-2 -------------- */}

                <div className="card w-75 image-full shadow-sm rounded-3xl">
                    <figure>
                        <img
                            src={person2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-amber-500">Emma Wilson</h2>
                        <p className="italic">"The collection is impressive, and finding new authors has never been easier. Highly recommended!"</p>
                        <p className='flex items-center gap-2'>Rating: <span className='text-yellow-300'><FaStar></FaStar></span> </p>

                    </div>
                </div>

                {/* ------------------ review-3 -------------- */}

                <div className="card w-75 image-full shadow-sm rounded-3xl">
                    <figure>
                        <img
                            src={person3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-amber-500">David Brown</h2>
                        <p className="italic">"Book Vibes makes reading more enjoyable. The wishlist and reading status features are simple and very useful."</p>
                        <p className='flex items-center gap-2'>Rating: <span className='text-yellow-300'><FaStar></FaStar></span> </p>
                    </div>
                </div>
                {/* ------------------ review-4 -------------- */}

                {/* <div className="card h-46 image-full shadow-sm rounded">
                    <figure>
                        <img
                            src={person4}
                            className='w-70'
                            alt="Shoes" />
                    </figure>
                    <div className="relative top-5 justify-items-center px-18 md:px-12 lg:px-6">
                        <h2 className="card-title text-amber-500">Sophia Martinez</h2>
                        <p className="italic text-sm text-ellipsis pt-2.5">"Beautiful design, smooth experience, and a great variety of books. I always find something interesting to read."</p>
                        <p className='flex items-center gap-2 pt-3.5 text-sm'>Rating: <span className='text-yellow-300'><FaStar></FaStar></span> </p>
                    </div>
                </div> */}

            </div>
        </div>
    )
}
export default UserReviews;