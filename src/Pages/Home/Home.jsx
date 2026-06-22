import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BookContainer from '../../Components/BookContainer/BookContainer';
import UserReviews from '../../Components/UserReviews/UserReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookContainer></BookContainer>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home; 