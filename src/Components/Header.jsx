import React from 'react';
import logo from "../assets/logo.png";
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className=' flex flex-col justify-center items-center gap-2 py-3'>
           <div className="logo  ">
            <img className='w-[300px] ' src={logo} alt="" />
           </div>
           <h2 className='text-slate-400 font-poppins'>Journalism Without Fear or Favour</h2>

           <p>{
            moment().format("dddd, MMMM Do YYYY")
            }</p>

            <div>
                
            </div>

        </div>
    );
};

export default Header;