import React from 'react';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineRequestPage } from 'react-icons/md';
import { Link } from 'react-router';

const ListedCard = ({ list }) => {

    const {bookId, image, bookName, publisher, category, tags, yearOfPublishing, totalPages, rating, author } = list
    return (
        <div className="hero shadow-lg py-4 mt-3">
            <div className="flex justify-baseline items-start gap-9">
                <img
                    src={image}
                    className="w-60 h-50 rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">{bookName}</h1>
                    <p className='font-semibold text-lg text-center md:text-left my-3'>By : {author}</p>

                    <div className='flex justify-between items-center gap-10 pb-5 ml-4 md:ml-0'>
                        <p>Tag</p>
                        <div>
                            <div className="badge badge-dash badge-accent mr-4">#{tags[0]}</div>
                            <div className="badge badge-dash badge-accent">#{tags[1]}</div>
                        </div>

                        <div className='flex gap-2'>
                            <p className='font-semibold'>Year of Publishing : </p>
                            <span>{yearOfPublishing}</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-9 my-2'>
                        <p className='flex items-center gap-2'><IoPerson /> Publisher : {publisher}</p>
                        <div className='flex flex-row-reverse items-center gap-2'>
                            <p> Number of Pages : {totalPages}</p>
                            <MdOutlineRequestPage className='text-lg' />
                        </div>
                    </div>

                    <div className="divider divider-primary"></div>

                    <div className="badge badge-dash badge-info mr-4">Category : {category}</div>
                    <div className="badge badge-dash badge-warning">Rating : {rating}</div>
                    <Link to={`/bookdetails/${bookId}`}><button className="btn btn-success mr-5 px-4 ml-6">View Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default ListedCard;