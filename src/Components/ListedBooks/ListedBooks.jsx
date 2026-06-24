import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';

const ListedBooks = () => {
    const { user } = useAuth()
    const [readList, setReadList] = useState([])
    const axiosInstance = useAxios()


    useEffect(() => {
        if (!user?.email) return;
        axiosInstance.get(`/savedbook?email=${user?.email}`)
            .then(res => {
                setReadList(res.data)
            })
    }, [user?.email])

    //     const storedReadList = getStoredBooks();
    //     const convertId = storedReadList.map(id => parseInt(id))
    //     const storedData = readList?.filter(book => convertId.includes(book.bookId));

    //     const handleSorting = e => {
    //         const sortingInput = e.target.value;
    //         const sortingData = [...readList]
    //         console.log(sortingData)
    //         if (sortingInput === "lowtohigh") {
    //             sortingData.sort((a, b) => a.totalPages - b.totalPages)
    //         }
    //         else if(sortingInput === "hightolow"){
    //             sortingData.sort((a, b) => b.totalPages - a.totalPages)
    //         }
    //     setReadList(sortingData)
    //    }

    return (
        <div className='pb-10'>
            <h1 className='text-3xl text-center font-bold py-3 bg-gray-100'>Books</h1>

            <select defaultValue="Pick a text editor" className="bg-green-600 text-white flex mx-auto w-24 my-3 select-primary rounded-lg py-2 px-2">
                <option className='font-semibold'>Sort By</option>
                <option value="lowtohigh" className='px-3'>Low To High</option>
                <option value="hightolow" className='px-3'>High To Low</option>
            </select>

            <div className='ms-10 bg-gray-500 p-3'>
                <Tabs>
                    <TabList>
                        {
                            readList.map((list, index) => <Tab key={list._id}>{index + 1}</Tab>)
                        }

                    </TabList>

                    {
                        readList.map(list => <TabPanel key={list._id}>
                            <div className="card w-80 bg-sky-600 card-md shadow-sm text-white">
                                <div className="card-body">
                                    <h2 className="card-title">BookName: {list.bookName}</h2>
                                    <p>Email: {list.email}</p>
                                </div>
                                <div className='card-actions mr-4 mb-3 justify-end'>
                                    <Link to={`/bookdetails/${list.bookId}`}><button className='btn btn-soft btn-primary'>Read Now</button></Link>
                                </div>
                            </div>
                        </TabPanel>)
                    }

                </Tabs>
            </div>
        </div>

    );
};

export default ListedBooks;