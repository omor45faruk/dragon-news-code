import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import LatestNews from '../Components/LatestNews';
import SocialLogin from '../Components/SocialLogin';
import CategoryNews from '../page/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../Components/layout-components/Login';
import Register from '../Components/layout-components/Register';
 

const router =  createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Navigate to={"/category/01"}></Navigate>
            },
            {
                path:"/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    
    {
        path:"/news",
        element:<h1>News layout</h1>,
    },
    {
        path:"auth",
        element:<AuthLayout></AuthLayout>,
        children:[{
            path:"/auth/login",
            element:<Login></Login>
        },
        {
            path:"/auth/register",
            element:<Register></Register>
        }
    ]
    },
    {
        path:"*",
        element:<h1>Error</h1>,
    },
    
    
])
 
 

export default router;