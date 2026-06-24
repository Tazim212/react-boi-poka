import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios';
import AllBooksCard from '../AllBooksCard/AllBooksCard';

const AllBooks = () => {
    const axiosInstance = useAxios()

    const [allbooks, setAllbooks] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        axiosInstance.get(`/allbooks?page=${page}&limit=8`)
            .then(res => {
                setAllbooks(res.data.data)
                // setTotalPages(data.data)
                setTotalPages(res.data.totalPages)
            })
    }, [page])

    return (
        <div>
            <h1 className='text-3xl font-bold text-center py-3'>All Books List</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {allbooks.map(book => <AllBooksCard key={book._id} book={book}></AllBooksCard>)}
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-6 pb-10">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(prev => prev - 1)}
                    className="px-3 py-1 border cursor-pointer"
                >
                    Prev
                </button>

                {[...Array(totalPages).keys()].map(num => (
                    <button
                        key={num}
                        onClick={() => setPage(num + 1)}
                        className={`px-3 py-1 border cursor-pointer ${page === num + 1 ? "bg-cyan-700 text-white" : ""
                            }`}
                    >
                        {num + 1}
                    </button>
                ))}

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(prev => prev + 1)}
                    className="px-3 py-1 border cursor-pointer"
                >
                    Next
                </button>
            </div>
        </div>
    )
}
export default AllBooks;
