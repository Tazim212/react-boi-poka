import React from 'react';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineRequestPage } from 'react-icons/md';
import { Link } from 'react-router';

const ListedCard = ({ list }) => {

    const { bookId, image, bookName, publisher, category, tags, yearOfPublishing, totalPages, rating, author } = list
    return (
        <div className="hero shadow-lg py-4 mt-3">
            <div className="flex flex-col md:flex-row justify-baseline items-start gap-9">
                <img
                    src={image}
                    className="w-60 h-50 rounded-lg shadow-2xl mx-auto"
                />
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">{bookName}</h1>
                    <p className='font-semibold text-lg text-center md:text-left my-3'>By : {author}</p>

                    <div className='flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 pb-5 ml-4 md:ml-0'>
                        <div className='flex justify-center items-center gap-5'>
                            <p>Tag</p>
                            <div className="badge badge-soft bg-linear-to-l from-lime-300 to-lime-600 text-black">#{tags[0]}</div>
                            <div className="badge badge-soft bg-linear-to-l from-lime-300 to-lime-600 text-black">#{tags[1]}</div>
                        </div>

                        <div className='flex gap-2 mt-2 md:mt-0'>
                            <p className='font-semibold'>Year of Publishing : </p>
                            <span>{yearOfPublishing}</span>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-center gap-3 md:gap-9 my-0 md:my-2 ms-4 md:ms-0'>
                        <p className='flex items-center gap-2'><IoPerson /> Publisher : {publisher}</p>
                        <div className='flex flex-row-reverse items-center gap-2'>
                            <p> Number of Pages : {totalPages}</p>
                            <MdOutlineRequestPage />
                        </div>
                    </div>

                    <div className="divider divider-primary w-3/4 mx-auto md:mx-0 md:w-0"></div>

                    <div className='text-center'>
                        <div className="badge badge-dash bg-linear-to-r from-blue-200 to-blue-300 text-black mr-4 ml-5 md:ml-0">Category : {category}</div>

                        <div className="badge badge-dash badge-warning bg-linear-to-r from-yellow-200 to-yellow-100 text-black">Rating : {rating}</div>
                        <Link to={`/bookdetails/${bookId}`}><button className="btn btn-success mx-5 px-4 mt-4 md:mt-0">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedCard;