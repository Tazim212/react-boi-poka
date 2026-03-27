import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../../App';
import Home from '../../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
        path: '/',
        Component: Home
    },
]
  },
]);

