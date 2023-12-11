import React from "react";
import MainLayout from "../layout/MainLayout";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            }
        ]
    }
])

export default router