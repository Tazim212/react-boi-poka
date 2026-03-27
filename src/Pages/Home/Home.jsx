import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BookContainer from '../../Components/BookContainer/BookContainer';
// import { useLoaderData } from 'react-router';

const Home = () => {

    // const books = useLoaderData()
    // console.log(books)
    return (
        <div>
            <Banner></Banner>
            <BookContainer></BookContainer>
        </div>
    );
};

export default Home;