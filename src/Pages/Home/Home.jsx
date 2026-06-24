import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BookContainer from '../../Components/BookContainer/BookContainer';
import UserReviews from '../../Components/UserReviews/UserReviews';
import FAQ from '../../Components/FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookContainer></BookContainer>
            <UserReviews></UserReviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home; 