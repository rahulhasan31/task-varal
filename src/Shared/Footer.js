import React from 'react';
import img from '../Assets/Vector-4.png'
import img1 from '../Assets/Vector-3.png'
import img3 from '../Assets/Vector-5.png'
import img4 from '../Assets/Vector-6.png'
import img5 from '../Assets/Vector-7.png'
import img6 from '../Assets/Vector-8.png'
import img2 from '../Assets/Group 34.png'

const Footer = () => {
    return (
        <div>
            {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid  gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
        <section
          className="relative block p-px overflow-hidden transition duration-300 transform  rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex items-center justify-between p-5 bg-white rounded-sm border-l-8 border-blue-500">
            <div className="pr-4">
              <h6 className=" font-semibold leading-5">
              Read about our blogs for more
information on our processes
              </h6>
         
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </section>
        
        <section
          href="/"
          aria-label="View item"
          title="View item"
          className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
            <div className="pr-4">
              <h6 className="mb-2 font-semibold leading-5">
                The first mate and his Skipper too will do
              </h6>
              <p className="text-sm text-gray-900">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div> */}

            <div className=' p-5 grid grid-cols-1  lg:grid-cols-2 lg:p-5 gap-7 lg:ml-48 lg:w-full'>
                <div>
                    <div className=' border-l-8 border-blue-400  py-3 px-3'>
                        <h1 className=' font-bold font-sans'>Read about our blogs for more <br />
                            information on our processes </h1>
                    </div>
                    <div className='flex items-center mt-4'>
                        <div className=' rounded-md  border-2 border-blue-400 '>
                            <img src={img} alt='' className='p-2' />
                        </div>
                        <div>
                            <h1 className='ml-2'>How to start an Offshore  <br />
                                company formation in Dubai</h1>
                            <span className='ml-2 text-blue-500 font-medium'>5 Minutes</span>
                        </div>
                    </div>
                    <div className='flex items-center mt-4'>
                        <div className=' rounded-md  border-2 border-blue-400 '>
                            <img src={img} alt='' className='p-2' />
                        </div>
                        <div>
                            <h1 className='ml-2'>How to start a company <br />
                                formation in Dubai</h1>
                            <span className='ml-2 text-blue-500 font-medium'>5 Minutes</span>
                        </div>
                    </div>
                    <div className='flex items-center bg-blue-500 lg:max-w-xs rounded-lg p-3 text-white mt-4'>
                        <div className=' rounded-md  border  '>
                            <img src={img} alt='' className='p-2  bg-blue-200' />
                        </div>
                        <div>
                            <h1 className='ml-2'>How to start a company <br />
                                formation in Dubai</h1>
                            <span className='ml-2 text-white font-medium'>5 Minutes</span>
                        </div>
                    </div>

                    {/* 2nd part */}
                    <div className=' border-l-8 border-blue-400  py-3 px-3 mt-5'>
                        <h1 className=' font-bold font-sans'>Satidfied We are When Our
                            <br />
                            Customers Are Happy</h1>
                    </div>

                    <div className='flex mt-3  items-center'>

                        <div className='  lg:rounded-full border border-blue-700 '>
                            <img src={img1} alt='' className=' p-2' />
                        </div>
                        <div className=' lg:max-w-xs'>
                            <h1 className='text-sm font-bold ml-3'>I am very happy with them. I’ll
                                continue to use their services in
                                future & highly recommend them
                                to anyone,</h1>

                        </div>

                    </div>
                    <div className='flex mt-3  items-center'>

                        <div className='  lg:rounded-full border border-blue-700 '>
                            <img src={img1} alt='' className=' p-2' />
                        </div>
                        <div className=' lg:max-w-xs'>
                            <h1 className='text-sm font-bold ml-3'>I am very happy with them. I’ll
                                continue to use their services in
                                future & highly recommend them
                                to anyone</h1>

                        </div>

                    </div>
                    <div className='flex mt-3  items-center'>

                        <div className='  lg:rounded-full border border-blue-700 '>
                            <img src={img1} alt='' className=' p-2' />
                        </div>
                        <div className=' lg:max-w-xs'>
                            <h1 className='text-sm font-bold ml-3'>I am very happy with them. I’ll
                                continue to use their services in
                                future & highly recommend them
                                to anyone</h1>

                        </div>

                    </div>






                </div>
                {/* 2nd col */}
                <div>
                    <div className=' border-l-8 border-blue-400  py-3 px-3 mt-5'>
                        <h1 className=' font-bold font-sans'>Get to know the whole us and

                            <br />
                            more of our services</h1>
                    </div>
                    <div className='mt-5 lg:ml-5'>
                        <h1 className='text-2xl font-bold font-sans'>Services</h1>
                        <div className='mt-2 text-gray-500'>
                            <p>Products</p>
                            <p>Solutions</p>
                            <p>Assurance</p>
                            <p>FAQ</p>
                            <p>Working at Varal-Singhania</p>
                        </div>
                    </div>
                    <div className='mt-5 lg:ml-5'>
                        <h1 className='text-2xl font-bold font-sans'>Policies</h1>
                        <div className='mt-2 text-gray-500'>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions
                            </p>

                        </div>
                    </div>
                    <div className='mt-5 lg:ml-5'>
                        <h1 className='text-2xl font-bold font-sans'>About</h1>
                        <div className='mt-2 text-gray-500'>
                            <p>About Us</p>
                            <p>Contact Us
                            </p>

                        </div>
                    </div>
                    <div className='mt-5 lg:ml-5'>
                        <h1 className='text-2xl font-bold font-sans'>Address</h1>
                        <div className='mt-2 text-gray-500'>
                            <p>608 One Lake Plaza, Cluster T,<br></br>

                                Al Sarayat Street, Jumeirah
                                Lake Towers</p>
                            <p>Dubai</p>
                            <p>United Arab Emirates</p>
                            <p>Office Hours: Sunday to<br></br>
Thursday 8:30 AM to 6:30 PM
[GMT+4]</p>
                            <p>M: +971 55 794 2016</p>
                            <p>O: +971 4 447 2061</p>
                        </div>
                    </div>
                    <div className='mt-5 lg:ml-5'>
                        <h1 className='text-2xl font-bold font-sans'>Subscribe Now</h1>
                        <div className='mt-2 text-gray-500'>
                            <p>Sunbscribe now to receive our <br></br>
Newsletters about amazing <br></br>
opportunities in Duba</p>
                          <div className='flex items-center py-4 px-3  '>
                           <div className=''>
                           <input type="text" placeholder="Enter email address" className="input input-ghost w-full max-w-xs bg-gray-200 rounded-none" />
                           </div>
                           <div>
                            <img src={img2} className="w-11" alt=''/>
                           </div>
                           
                          </div>
                          <div className='flex gap-3 lg:ml-3'>
                          <img src={img3} className=" w-9 " alt=''/>
                           <img src={img4} className="w-11" alt=''/>
                           <img src={img5} className="w-11" alt=''/>
                           <img src={img6} className="w-11" alt=''/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="p-5">
  <div className=" text-center font-bold">
   
    <p>  Varaluae  © 2023 - All right reserved</p>
  </div> 
  
</footer>
        </div>
    );
};

export default Footer;