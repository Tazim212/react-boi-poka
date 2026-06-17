import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../../App';
import Home from '../../Pages/Home/Home';
import ListedBooks from '../ListedBooks/ListedBooks';
import BookDetails from '../BookDetails/BookDetails';
import PagesToRead from '../PagesToRead/PagesToRead';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import LogIn from '../../Pages/LogIn/LogIn';
import SignUp from '../../Pages/SignUp/SIgnUp';
import AllBooks from '../AllBooks/AllBooks';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: "/allbooks",
                Component: AllBooks
            },
            {
                path: '/listedbooks',
                Component: ListedBooks,
            },
            {
                path: '/bookdetails/:id',
                Component: BookDetails,
            },
            {
                path: '/pagestoread',
                Component: PagesToRead
            },
            {
                path: "/login",
                Component: LogIn
            },
            {
                path: "/register",
                Component: SignUp
            }
        ]
    },
]);

