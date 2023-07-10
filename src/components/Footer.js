import React from 'react';
import {FaInstagramSquare} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import { Link } from 'react-router-dom';

const Footer = () => {
  return <div className='bg-black text-center text-white py-8 '>
    <div className="container ml-14 font-Roboto flex pl-16 gap-x-4 justify-center items-center">
      <p className=' text-4xl'>Follow Us On</p>
      <a href="https://www.instagram.com/beginner_skill22/">
        <FaInstagramSquare className='text-pink-700 text-5xl cursor-pointer'/>
      </a>
      <a href="https://www.facebook.com/">
        <BsFacebook className='text-blue-600 text-5xl cursor-pointer'/>
      </a>
      <a href="https://twitter.com/home">
        <BsTwitter className='text-cyan-500 text-5xl cursor-pointer'/>
      </a>
    </div>
  </div>;
};

export default Footer;
