import React, { useEffect, useState } from 'react';
import BooksCard from '../BooksCard/BooksCard';
import useAxios from '../../hooks/useAxios';

const BookContainer = () => {

    const [books, setBooks] = useState([]);
    const axiosInstance = useAxios()

    useEffect(() => {
        axiosInstance.get("/latestbook")
            .then(data => {
                setBooks(data.data)
            })
    }, [])


    return (
        <div>
            <div className='text-center pt-4 text-black'>
                <h1 className='text-2xl md:text-4xl font-bold'>Featured Books</h1>
                <p className='text-center pb-3'>Books that you will like to read and show details</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4'>
                {
                    books.map(book => <BooksCard key={book._id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default BookContainer;