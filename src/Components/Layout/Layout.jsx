import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout({ userData, logOut }) {
    return <>
        <Navbar userData={userData} logOut={logOut} />
        <Outlet />
        <Footer userData={userData}  />
    </>
}
