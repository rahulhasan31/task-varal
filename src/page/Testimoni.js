import React from 'react';
import img from "../Assets/dungeon.png"
import img1 from "../Assets/Vector-2.png"
import img2 from "../Assets/Vector-1.png"

const Testimoni = () => {
    return (
        <div>
             <div className="">
      <div className="relative  mx-auto sm:w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
        
        </div>
        <div className=" grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col justify-between overflow-hidden text-left   rounded group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full ">
              <img src={img} alt=''/>
              </div>
              <p className="mb-2 font-bold text-2xl">UAE Free Zone Company</p>
              <p className="text-lg  font-medium text-gray-600">
              Your registration agent, will answer all
of your questions and help you to reach
a conclusion that meets your objectives
of investing in the UAE.

              </p>
              <h1 className=' mt-4 text-xl text-yellow-400 font-sans font-medium'>Get Started</h1>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left   rounded  group ">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full ">
              <img src={img1} alt=''/>
              </div>
              <p className="mb-2 font-bold text-2xl">Dubai Local Companies</p>
              <p className="text-xl font-medium  text-gray-600">
              The Dubai LLC formation documents
are actually articles of organization or a
certificate of organization. You can get
yours today.
              </p>
              <h1 className=' mt-4 text-xl text-yellow-400 font-sans font-medium'>Get Started</h1>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left  duration-200  rounded ">
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full ">
              <img src={img2} alt=''/>
              </div>
              <p className="mb-2 text-2xl font-bold">Offshore Compamies</p>
              <p className="text-xl  font-medium text-gray-600">
              You can register an offshore company
and open its bank account in Dubai.
Your agent will help you along all the
process
              </p>
              <h1 className=' mt-4 text-xl text-yellow-400 font-sans font-medium'>Get Started</h1>
            </div>
    
          </div>
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default Testimoni;