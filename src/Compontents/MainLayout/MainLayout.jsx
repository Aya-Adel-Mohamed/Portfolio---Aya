import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe.jsx'



export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <AboutMe/>

    </>
  )
}