import React from 'react';
import victor from '../Assets/Vector.png'
import img from '../Assets/Group.png'
import img1 from '../Assets/ILLUSTRATION 03  1.png'
import visa from "../Assets/Group-2.png"
import docu from "../Assets/Group-1.png"


const CardSection = () => {
  return (
    <div className=' lg:ml-52' >
      {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-b sm:border-r">
          <h1>Learn the ways in which you can benefit
from a UAE/Offshore Company. Then get
started on fulfilling your UAE dream.
<br/>
Claim a Free Quo</h1>
        </div>
        <div className="p-8 border lg:border-r">
          <div className=" text-center">
            <div className="">
            <img src={img} alt=''/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Advice & Guidance</h6>
            <p className="mb-3 text-sm text-gray-900">
            All activities in the UAE are licensed.
Whether manufacturing, finance,
trading, marketing, consultancy or
restaurants. In some countries only
manufacturing is licensed. In others
there is a threshold below which
business are encouraged. Get our
insightfull guidance today.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
            
            </div>
           
          </div>
        </div>
        <div className="p-8 border lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
             <img src={img1} alt='' ></img>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Bank Account Setup</h6>
            <p className="mb-3 text-sm text-gray-900">
            There are many banks in the United
Arab Emirates [UAE]. Both locally
owned and branches of
multinational ones. Foreign banks
adjust according to their parent s
strategies and have changed local
requirements overnight in the past.
But we are here to help you.
<p>Learn more</p>
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-b-0 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={img1} alt='' />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Registration Document
Perparation</h6>
            <p className="mb-3 text-sm text-gray-900">
            Several documents must be
prepared to start the process of
registering a new company in the
United Arab Emirates. Be it a Dubai
local company, a free zone one or an
offshore entity. Your registered
agent is dedicated to get this done
for you for a seamless process.
            </p>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
             <img src={img1} alt=''/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">UAE Company Visas
</h6>
            <p className="mb-3 text-sm text-gray-900">
            Your application for visas is critical
especially if you intend to move to
Dubai. This becomes even more
urgent if your family will also move
with you. All the paperwork is done
on your behalf smoothly so that you
may only focus on doing what
matters most to you.
            </p>
          </div>
        </div>
      </div>
    </div>  */}

      <div className='flex p-10'>

        <div className=' lg:w-1/2 '>
          <div className=' p-5'>
            <h1 className='text-xl font-semibold'>Learn the ways in which you can benefit <br />
              from a UAE/Offshore Company. Then get <br />
              started on fulfilling your UAE dream.
              <br />
              <br />
              <span className='mt-5 text-xl text-blue-500'>Claim a Free Quote</span>

            </h1>
          </div>
          <div className="card w-96 bg-base-100 border  mb-5  lg:hidden">
                <figure><img src={img} className=' p-14' alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Advice & Guidance

                  </h2>
                  <p>All activities in the UAE are licensed.
                    Whether manufacturing, finance,
                    trading, marketing, consultancy or
                    restaurants. In some countries only
                    manufacturing is licensed. In others
                    there is a threshold below which
                    business are encouraged. Get our
                    insightfull guidance today.</p>
                  <div className="card-actions justify-star flex items-center ">
                    <div className="text-blue-500 text-xl">Learn more</div>
                    <img src={victor} className=" w-4 ml-2" alt=''></img>
                  </div>
                </div>
              </div>
          <div>
         

            <div>
              <div className=" flex-col lg:card w-96 border mb-10  ">
                <figure><img src={img1} className='p-10' alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Bank Account Setup


                  </h2>
                  <p>There are many banks in the United
                    Arab Emirates [UAE]. Both locally
                    owned and branches of
                    multinational ones. Foreign banks
                    adjust according to their parent s
                    strategies and have changed local
                    requirements overnight in the past.
                    But we are here to help you.</p>
                  <div className="card-actions  flex items-center">
                    <div className=" text-blue-600 text-xl">Learn more</div>
                    <img src={victor} className=" w-4 ml-2" alt=''></img>
                  </div>
                </div>
              </div>
              <div className="  card w-96  lg:hidden   ">
                
                <div className="card-body text-xl">
                  
                  <p>We have gathered a team of
                  professionals to craft adequate
                  services you can rely on for a friction
                  free setup in UAE.</p>
                  <div className="card-actions justify-start flex items-center">
                  <div className="text-blue-500 text-xl">More about our services</div>
                  <img src={victor} className="  ml-2" alt=''></img>
                 
                  </div>
                </div>
                
              </div>
              <div className=" lg:card w-96 border hidden">
                <figure><img src={visa} className='p-16' alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    UAE Company Visas

                  </h2>
                  <p>Your application for visas is critical
                    especially if you intend to move to
                    Dubai. This becomes even more
                    urgent if your family will also move
                    with you. All the paperwork is done
                    on your behalf smoothly so that you
                    may only focus on doing what
                    matters most to you.</p>
                  <div className="card-actions justify-start flex items-center">
                    <div className=" text-blue-600 text-xl">Learn more</div>
                    <img src={victor} className=" w-4 ml-2" alt=''></img>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className=' lg:w-1/2'>

          <div>
            <div>
              <div className=" hidden  lg:card w-96 bg-base-100 border  mb-5">
                <figure><img src={img} className=' p-14' alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Advice & Guidance

                  </h2>
                  <p>All activities in the UAE are licensed.
                    Whether manufacturing, finance,
                    trading, marketing, consultancy or
                    restaurants. In some countries only
                    manufacturing is licensed. In others
                    there is a threshold below which
                    business are encouraged. Get our
                    insightfull guidance today.</p>
                  <div className="card-actions justify-star flex items-center ">
                    <div className="text-blue-500 text-xl">Learn more</div>
                    <img src={victor} className=" w-4 ml-2" alt=''></img>
                  </div>
                </div>
              </div>
              <div className=" lg:lg:card w-96 border   hidden">
                <figure><img src={docu} className='p-10' alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Registration Document
                    Perparation

                  </h2>
                  <p>Several documents must be
                    prepared to start the process of
                    registering a new company in the
                    United Arab Emirates. Be it a Dubai
                    local company, a free zone one or an
                    offshore entity. Your registered
                    agent is dedicated to get this done
                    for you for a seamless process.</p>
                  <div className="card-actions justify-start flex items-center">
                  <div className="text-blue-500 text-xl">Learn more</div>
                  <img src={victor} className="  ml-2" alt=''></img>
                 
                  </div>
                </div>
                
              </div>
              <div className=" hidden lg:lg:card w-96   ">
                
                <div className="card-body text-xl">
                  
                  <p>We have gathered a team of
                  professionals to craft adequate
                  services you can rely on for a friction
                  free setup in UAE.</p>
                  <div className="card-actions justify-start flex items-center">
                  <div className="text-blue-500 text-xl">More about our services</div>
                  <img src={victor} className="  ml-2" alt=''></img>
                 
                  </div>
                </div>
                
              </div>
              
             
            </div>
          </div>
        </div>



      </div>

    </div>
  );
};

export default CardSection;