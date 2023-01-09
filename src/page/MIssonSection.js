import React from 'react';
import img from '../Assets/Group 117.png'
import img1 from '../Assets/Ellipse 19-1.png'
import bgimg from '../Assets/bg-1.png'

const MIssonSection = () => {
    return (
        <div>
          <div className=' flex justify-center  '>
         <div className=''>
         <h1 className='mr-2  text-blue-500 xl:text-xl   font-sans font-medium   '>Watch the video about UAE or Offshore Company Registration</h1>
         </div>
          <div className='  rounded-full ring  ring-offset-base-100 ring-offset-2 xl:w-auto  ' >
          <img src={img} alt='' className='p-1 ' />
          </div>
          </div>
         <div className='flex'>
         <div className=' xl:ml-10'>
            <img src={bgimg}   alt=''  />
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
      <div className="max-w-lg sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="Go Home"
          title="Logo"
          className="inline-block mb-4"
        >
         
        </a>
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          <span className="relative inline-block">
           <img src={img1} alt=''  className="absolute top-0 left-0 z-0 w-36 -mt-8 -ml-20 text-blue-gray-100 lg:w-11 lg:-ml-20   lg:-mt-10 sm:block"
            
           >
           </img>
         <span className="relative bg-white  text-center border-b-8 border-yellow-400 ">Dedicated</span>
          </span> <br/>
           <p className='mt-3'>to our mission we are</p>
     
         
        </h2>
        <p className=" text-2xl text-gray-500 font-sans font-semibold md:text-lg">
        Our services include Company Formation & Renewals,
Trust & Fiduciary, Tax Residency Setup With Family, Bank
Accounts, Remote Management, Stock Trading
Platforms, Ownership Solutions.
        </p>
        
       
      </div>
    </div>
         </div>
        </div>
    );
};

export default MIssonSection;