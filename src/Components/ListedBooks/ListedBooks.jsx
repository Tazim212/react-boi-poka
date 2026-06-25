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
            <h1 className='text-3xl text-center font-bold py-3 text-black'>Books You Saved To Read</h1>

            <select defaultValue="Pick a text editor" className="bg-green-600 text-white flex mx-auto w-24 my-3 select-primary rounded-lg py-2 px-2">
                <option className='font-semibold'>Sort By</option>
                <option value="lowtohigh" className='px-3'>Low To High</option>
                <option value="hightolow" className='px-3'>High To Low</option>
            </select>

            <div className='mx-auto bg-linear-to-bl from-olive-600 to-emerald-700 w-3/4'>
                <Tabs>
                    <TabList>
                        {
                            readList.map((list, index) => <Tab key={list._id}>{index + 1}</Tab>)
                        }

                    </TabList>

                    {
                        readList.map(list => <TabPanel key={list._id}>
                            <div className="card bg-blue-950 w-65 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={list.image}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Book Name: {list.bookName}</h2>
                                    <div className="card-actions">
                                        <Link to={`/bookdetails/${list.bookId}`}><button className="btn btn-outline btn-accent">Read Now</button></Link>
                                    </div>
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