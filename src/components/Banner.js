import React from 'react';
import Image from "../assets/img/house-banner.png"
import Search from '../components/Search';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center px-4 lg:px-0 flex-1'>
        <h1 className='text-4xl lg:text-[58px] font-semibold mb-6 leading-none'><span className='text-violet-700'>Rent</span> Your Dream House with us</h1>
        <p className='max-w-[480px] mb-8'>
          A Seamless Experience in Finding Houses for Sale or Rent
        </p>
      </div>
      {/* image */}
      <div className='hidden flex-1 justify-end lg:flex items-end'>
        <img src={Image} alt="" />
      </div>
    </div>
    <Search/>
  </section>;
};

export default Banner;
