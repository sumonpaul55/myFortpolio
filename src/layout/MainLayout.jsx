import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/header/Navbar';
import Communicate from '../shared/Communicate/Communicate';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='mt-10 min-h-screen bg-slate-100'>
                <Communicate></Communicate>
                <Outlet></Outlet>
            </div>
            <footer>
                footer
            </footer>
        </>
    );
};

export default MainLayout;