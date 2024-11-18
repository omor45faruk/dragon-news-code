import React from 'react';
import fb from "../assets/fb.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"

const FindUs = () => {
    return (
        <div >
             <h2 className='font-bold'>Find Us On</h2>


             <div className='my-2 flex flex-col border  '>
                <button className='btn  bg-transparent rounded-none'>
                    <img src={fb} alt="" />
                Facebook 
                </button>
                <button className='btn bg-transparent rounded-none'> 
                <img src={twitter} alt="" />
                Twitter
                </button>
                <button className='btn bg-transparent  rounded-none'>
                <img src={instagram} alt="" />
                 Instagram 
                </button>
            </div>

        </div>
    );
};

export default FindUs;