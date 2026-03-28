import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../../App';
import Home from '../../Pages/Home/Home';
import ListedBooks from '../ListedBooks/ListedBooks';
import BookDetails from '../BookDetails/BookDetails';
import PagesToRead from '../PagesToRead/PagesToRead';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

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
                path: '/listedbooks',
                Component: ListedBooks,
            },
            {
                path: '/bookdetails/:id',
                Component: BookDetails
            },
            {
                path: '/pagestoread',
                Component: PagesToRead
            },
        ]
    },
]);

