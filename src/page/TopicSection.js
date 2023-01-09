import React from 'react';
import { FaSearch } from 'react-icons/fa';

const TopicSection = () => {
    return (
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col  justify-end md:flex-row sm:mx-auto">
          
          <div>
        
            <h2 className="font-sans xl:text-xl font-bold tracking-tight text-blue-500 sm:text-4xl sm:leading-none  rounded border-2 border-blue-500 py-3 px-5 flex items-center gap-5 ">
            <FaSearch/> Search a Term | Topic
            </h2>
        
          </div>
        </div>
      </div>
    );
};

export default TopicSection;