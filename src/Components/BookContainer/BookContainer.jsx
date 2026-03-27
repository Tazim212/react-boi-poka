import React, { useEffect, useState } from 'react';
import BooksCard from '../BooksCard/BooksCard';

const BookContainer = () => {

    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch("/booksData.json")
        .then(res =>res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className='bg-gray-300 text-black'>
            <h1 className='text-3xl font-bold text-center pt-4'>Books</h1>
            <p className='text-center pb-3'>Books that you will like to read and show details</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-4'>
                {
                    books.map(book =><BooksCard key={book.id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default BookContainer;