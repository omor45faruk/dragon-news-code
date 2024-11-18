import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/navbar';
import LeftAside from '../Components/layout-components/LeftAside';
import RightAside from '../Components/layout-components/RightAside';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                
             </header>


            <nav className='w-11/12 mx-auto py-2 '>
            
                    <Navbar></Navbar>
              
            </nav>


            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12'>

            <aside className='left col-span-3'> <LeftAside></LeftAside> </aside>

            <section className='col-span-6'> 
                <Outlet></Outlet>
                
            </section>

            <aside className='right col-span-3'>  
                <RightAside></RightAside>
            </aside>

            </main>

        </div>
    );
};

export default HomeLayout;