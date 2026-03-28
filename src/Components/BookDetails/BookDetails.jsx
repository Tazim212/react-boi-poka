import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { addStoredBooks } from '../../../bookReads';
import { setWishLIst } from '../../../wishList';

const BookDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/booksData.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const singleBook = details.find(book => book.bookId === parseInt(id))

    const handleMarkRead = id => {
        addStoredBooks(id)
    }

    const handleWishList = id =>{
        setWishLIst(id)
    }
    return (
        <div className="hero min-h-screen bg-gray-200 text-black pt-7">
            <div className="flex flex-col gap-9 lg:flex-row">
                <img
                    src={singleBook?.image}
                    className="w-80 h-100 rounded-lg shadow-2xl ml-5 md:ml-10"
                />
                <div className='w-full md:w-1/2'>
                    <h1 className="text-2xl md:text-5xl font-bold text-center md:text-left">{singleBook?.bookName}</h1>
                    <div className='flex flex-col mt-5'>
                        <span className='font-semibold text-xl text-center md:text-left'>By :  {singleBook?.publisher}</span>
                        <div className="badge badge-neutral badge-dash mt-8 mx-auto md:mx-0">{singleBook?.category}</div>
                    </div>
                    <p className="py-6 mx-2 md:mx-0 text-center md:text-left">
                        {singleBook?.review}
                    </p>
                    <div className='flex items-center pb-5 ml-4 md:ml-0'>
                        <div className="badge badge-dash badge-accent mr-4">{singleBook?.tags[0]}</div>
                        <div className="badge badge-dash badge-accent">{singleBook?.tags[1]}</div>
                    </div>

                    <div className="divider divider-accent"></div>

                    <div className='flex gap-5 md:gap-20 ml-4 md:ml-0'>
                        <p className='font-semibold'>Number of Pages : </p>
                        <span>{singleBook?.totalPages}</span>
                    </div>
                    <div className='flex gap-5 md:gap-32 py-2 ml-4 md:ml-0'>
                        <p className='font-semibold'>Publisher : </p>
                        <span>{singleBook?.publisher}</span>
                    </div>
                    <div className='flex gap-3 md:gap-20 ml-4 md:ml-0'>
                        <p className='font-semibold'>Year of Publishing: </p>
                        <span>{singleBook?.yearOfPublishing}</span>
                    </div>
                    <div className='flex gap-5 md:gap-40 py-2 ml-4 md:ml-0'>
                        <p className='font-semibold'>Rating : </p>
                        <span>{singleBook?.rating}</span>
                    </div>

                    <div className='my-6 ml-3 md:ml-0'>
                        <button onClick={() => handleMarkRead(id)} className="btn btn-success mr-5 px-2">Mark As Read</button>
                        <button onClick={() => handleWishList(id)} className="btn btn-neutral px-4">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;