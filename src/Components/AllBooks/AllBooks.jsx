import React, { useState } from 'react'
import useAxios from '../../hooks/useAxios';
import AllBooksCard from '../AllBooksCard/AllBooksCard';

const AllBooks = () => {
    const axiosInstance = useAxios()

    const [allbooks, setAllbooks] = useState([])

    axiosInstance.get("/allbooks")
        .then(data => {
            setAllbooks(data.data)
        })
    return (
        <div>
            <h1 className='text-3xl font-bold text-center py-3'>All Books List</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {allbooks.map(book => <AllBooksCard key={book._id} book={book}></AllBooksCard>)}
            </div>
        </div>
    )
}
export default AllBooks;
