import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='py-6 mb-12 border-b'>
    <div className="container mx-auto flex justify-between items-center">
      {/* logo */}
      <Link to="/">
        <div className='flex'>
          <p className='font-Roboto text-4xl text-black'>ShelterSearch</p>
          <div className='flex place-items-end w-3 ml-1 pb-1'>
            <div className='bg-violet-700 rounded-full h-2 w-2'></div>
          </div>
        </div>
      </Link>
        {/* buttons */}
        <div className='flex items-center gap-6'>
          <Link to='' className='hover:text-violet-900 transition'>Log in</Link>
          <Link to='' className='transition rounded-lg px-4 py-3 text-white bg-violet-700 hover:bg-violet-800'>Sign Up</Link>
        </div>
    </div>
  </header>;
};

export default Header;
