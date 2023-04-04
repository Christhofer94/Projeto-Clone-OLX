import React from "react";
import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

export const Routes = () => {
    return useRoutes([
        { path: "/", element: <Home/>},
        { path: "/about", element: <About/>}
    ])
}