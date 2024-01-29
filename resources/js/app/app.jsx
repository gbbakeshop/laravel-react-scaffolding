import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Routes } from "react-router-dom";
import { router } from '../routes/routes';

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <RouterProvider router={router} >
                <Routes />
            </RouterProvider>
        </React.StrictMode>
    )
}
