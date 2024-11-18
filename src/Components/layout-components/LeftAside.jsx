import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    const[category,setCategory]=useState([]);
    useEffect(()=>{
fetch("https://openapi.programming-hero.com/api/news/categories")
.then(res=>res.json())
.then((data)=>setCategory( data.data.news_category));

    },[])
    return (
        <div>
            <h2 className='font-semibold mb-4'>All Category ({category.length}) </h2>

            <div className='flex flex-col gap-1 my-3 w-3/4'>
        {
            category.map((category)=>(<NavLink 
                to={`/category/${category.category_id}`}
                className='btn  bg-base-100' key={category.category_id}>{category.category_name}</NavLink>))

        }

            </div>



         </div>
    );
};

export default LeftAside;