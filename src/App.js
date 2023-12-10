import React from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom";
import Home from "./Compontents/Home/Home.jsx";
import Portfolio from './Compontents/Portfolio/Portfolio.jsx';
import Contact from './Compontents/Contact/Contact.jsx';
import NotFound from './Compontents/NotFound/NotFound.jsx';
import MainLayout from "./Compontents/MainLayout/MainLayout.jsx";
import AboutMe from './Compontents/AboutMe/AboutMe.jsx';
import Skills from './Compontents/Skills/Skills.jsx';
import Education from './Compontents/Education/Education.jsx';
import PortfolioList from './Compontents/PortfolioList/PortfolioList.jsx';

let routers = createHashRouter([
  {path:'/' , element: <MainLayout/> , children:[
    {index:true , element: <Home/>},
    {path:'portfolio' , element: <Portfolio/>},
    {path:'about',element:<AboutMe/>},
    {path:'skills',element:<Skills/>},
    {path:'portfolioList',element:<PortfolioList/>},
    {path:'education',element:<Education/>},
    {path:'contact' , element: <Contact/>},
    {path:'*' , element: <NotFound/>},
  ]}
])

export default function App() {
  return (
    <>
    <RouterProvider router={routers}/>
    </>
  );
}