import React, { useEffect, useState } from 'react'
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import About from './Components/About/About';
import Support from './Components/Support/Support';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import jwtDecode from 'jwt-decode';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import HomeSlider from './Components/HomeSlider/HomeSlider';
import { DataContextProvider } from './Context.js/Context';
import FilterGames from './Components/FilterGames/FilterGames';
import GameDetails from './Components/GameDetails/GameDetails';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function () {

  const [userData, setUserData] = useState(null);

  function saveUserData() {
    const decodedToken = jwtDecode(localStorage.getItem('userToken'))
    setUserData(decodedToken)
  }

  function logOut() {
    localStorage.removeItem('userToken')
    setUserData(null)
  }

  const router = createBrowserRouter([{
    path: '', element: <Layout userData={userData} logOut={logOut} />, children: [
      { index: true, element: <Home /> },
      { path: 'register', element: <Register saveUserData={saveUserData} /> },
      { path: 'forgotpassword', element: <ForgotPassword /> },
      { path: 'homeslider', element: <HomeSlider /> },
      { path: 'about', element: <About /> },
      { path: 'filtergames/:id', element: <ProtectedRoute><FilterGames /></ProtectedRoute> },
      { path: 'gamedetails/:id', element: <ProtectedRoute><GameDetails /></ProtectedRoute> },
      { path: 'support', element: <ProtectedRoute><Support /></ProtectedRoute> },
      { path: 'resetPassword', element: <ResetPassword /> },
      { path: '*', element: <Home /> }
    ]
  }])

  useEffect(() => {
    if (localStorage.getItem('userToken') !== null && userData === null) {
      saveUserData()
    }
  }, [])


  return <>
    <DataContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </DataContextProvider>
  </>
}

