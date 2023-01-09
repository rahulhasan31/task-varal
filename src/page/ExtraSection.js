import React from 'react';
import img from '../Assets/ILLUSTRATION.png'

const ExtraSection = () => {
    return (
        <div style={
            {}
        }>
             
             <div className="px-4 py-16 mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">

        <div className="flex flex-col justify-center">
            
          <div className="max-w-xl mb-6">
          
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             <span className='text-xl text-blue-500 font-normal'>Claim a Free Quote</span>
             <br></br>
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <h1 className="relative inline-block text-deep-purple-accent-400 font-bold  ">
                <span className=' border-b-8 border-yellow-400'>Get started</span>  on fulfilling
                </h1>
               
                <h1 className='mt-3'>your 
               Dubai or UAE </h1>
               <h1 className='mt-3'>dream.</h1>
              </span>

            </h2>
          
          </div>
        <div className=" ">
        <p className='text-blue-600 text-2xl mb-1 '>UAE & Offshore Company</p>
            <p className="text-base mb-2 text-gray-700 font-bold md:text-lg">
            We provide you with information about UAE or
Offshore Company Registration & help you
setup your company with a bank account and
visas.
            </p>
        </div>
          <div className="   flex sm:mr-4 ">
           
           <button className='font-bold text-white bg-blue-700 px-20 py-3 rounded-l'>Start a Company </button>
           <button className=' px-16 py-3 rounded-r border border-blue-500  text-blue-600 font-semibold'>Renew a Company</button>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded  sm:h-96"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
        </div>
    );
};

export default ExtraSection;