import React from 'react';
import err from "../../assets/error.jpg"

const ErrorPage = () => {
    return (
        <div>
            <img src={err} className='mx-auto w-325 h-118 md:h-139' alt="" />
        </div>
    );
};

export default ErrorPage;