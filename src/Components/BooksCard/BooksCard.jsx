import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BooksCard = ({ book }) => {

    const { bookName, image, tags, rating, publisher, category, _id} = book;
    return (
        <Link to={`/bookdetails/${_id}`}>
            <div className="card bg-linear-to-l from-gray-700 to-cyan-600 text-white w-75 h-85 shadow-sm mx-auto 
        transition delay-150 duration-300 ease-linear hover:-translate-y-4 hover:scale-110">
                <figure>
                    <img
                        src={image}
                        className='h-48 w-full object-fill rounded shadow-lg'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center'>
                        <div className="badge badge-dash badge-warning mr-4">{tags[0]}</div>
                        <div className="badge badge-dash badge-warning">{tags[1]}</div>
                    </div>
                    <h2 className="card-title">
                       Title: {bookName}
                    </h2>
                    <p className='font-semibold'>By: {publisher}</p>
                    <div className="divider divider-accent"></div>
                    <div className="flex justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline"><FaStar></FaStar> {rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;