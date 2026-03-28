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

    return (
        <div className='bg-gray-300 text-black'>
            <h1 className='text-3xl text-center font-bold py-3 bg-gray-100'>Books</h1>
            <Tabs>
                <TabList>
                    <Tab>ReadList</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map(list =><ListedCard key={list.bookId} list={list}></ListedCard>)
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