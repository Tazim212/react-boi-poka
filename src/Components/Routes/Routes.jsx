import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../../App';
import Home from '../../Pages/Home/Home';
import ListedBooks from '../ListedBooks/ListedBooks';
import BookDetails from '../BookDetails/BookDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/listedbooks',
                Component: ListedBooks,
                loader: () =>fetch("booksData.json")
            },
            {
                path: '/bookdetails/:id',
                Component: BookDetails
            },
        ]
    },
]);

