import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBooks } from '../../../bookReads';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedCard from '../ListedCard/ListedCard';

const ListedBooks = () => {

    const [readList, setReadList] = useState([])

    const bookData = useLoaderData()

    useEffect(() => {
        const storedReadList = getStoredBooks();
        const convertId = storedReadList.map(id => parseInt(id))
        const storedData = bookData.filter(book => convertId.includes(book.bookId));
        setReadList(storedData)
    }, [])

    const handleSorting = e => {
        const sortingInput = e.target.value;
        const sortingData = [...readList]
        console.log(sortingData)
        if (sortingInput === "lowtohigh") {
            sortingData.sort((a, b) => a.totalPages - b.totalPages)
        }
        else if(sortingInput === "hightolow"){
            sortingData.sort((a, b) => b.totalPages - a.totalPages)
        }
    setReadList(sortingData)
   }

    return (
        <div className='bg-gray-300 text-black'>
            <h1 className='text-3xl text-center font-bold py-3 bg-gray-100'>Books</h1>

            <select onChange={handleSorting} defaultValue="Pick a text editor" className="bg-green-600 text-white flex mx-auto w-24 my-3 select-primary rounded-lg py-2 px-2">
                <option className='font-semibold'>Sort By</option>
                <option value="lowtohigh" className='px-3'>Low To High</option>
                <option value="hightolow" className='px-3'>High To Low</option>
            </select>

            <Tabs>
                <TabList>
                    <Tab>ReadList</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map(list => <ListedCard key={list.bookId} list={list}></ListedCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default ListedBooks;