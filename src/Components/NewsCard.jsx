import React from "react";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { GrView } from "react-icons/gr";


const NewsCard = ( props={}) => {
    const {news}=props||{};
  return (
    <div className="card w-11/12    bg-base-100 shadow-xl my-6">

 {/* Author Section */}
 <div className="flex items-center gap-4  p-2 bg-base-300">
          <img 
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
            loader={<div className="animate-pulse bg-gray-300 w-10 h-10 rounded-full" />}
          />
          <div>
            <p className="text-sm font-medium">{news.author.name}</p>
            <p className="text-xs text-gray-500">
              Published: {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex justify-end ">

          <span>
           <CiBookmark />
           </span>


           <span><CiShare2 />
           </span>

            
           

          </div>
        </div>

      {/* Thumbnail */}
      <figure>
        <img 
          src={news.image_url
          }
          alt={news.author.name}
          className="h-48 w-full object-cover"
          loader={<div className="animate-pulse bg-gray-300 h-48 w-full" />}
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-lg font-bold">
          {news.title}
        </h2>
{/* describtion */}
          <p>{news.details}</p>
            {/* Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">Read More</button>
        </div>
       

        {/* Rating and Views */}
        <div className="flex justify-between items-center mt-4">
          <div className="badge badge-primary">
            {news.rating.badge}: {news.rating.number} ★
          </div>
          <div className="text-sm text-gray-500 flex items-center space-x-2"><GrView /> 
          {news.total_view}</div>
        </div>

      
      </div>
    </div>
  );
};

export default NewsCard;
