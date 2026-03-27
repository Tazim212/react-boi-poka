import React from 'react';
import { FaStar } from 'react-icons/fa';

const BooksCard = ({ book }) => {

    const { bookName, image, tags, rating, publisher, category } = book;
    return (
        <div className="card bg-linear-to-l from-gray-700 to-cyan-600 text-white w-75 h-full shadow-sm mx-auto 
        transition delay-150 duration-300 ease-linear hover:-translate-y-4 hover:scale-110">
            <figure>
                <img
                    src={image}
                    className='w-64 h-60 pt-2 rounded-3xl shadow-lg'
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex items-center'>
                    <div className="badge badge-dash badge-success mr-4">{tags[0]}</div>
                    <div className="badge badge-dash badge-success">{tags[1]}</div>
                </div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p className='font-semibold'>By: {publisher}</p>
                <div className="flex justify-between pt-2">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline"><FaStar></FaStar> {rating}</div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;