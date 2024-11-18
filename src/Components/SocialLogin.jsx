import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='mb-5'>
            <h2 className='font-bold'>Login With</h2>

            <div className='my-2 space-y-2'>
                <button className='btn btn-outline w-full hover:bg-sky-500  '>
                <FaGoogle />
                Login with Google
                 </button>

                <button className='btn btn-outline hover:bg-sky-500 w-full '>
                <FaGithub />
                Login with  Github
                 </button>
            </div>
        </div>
    );
};

export default SocialLogin;