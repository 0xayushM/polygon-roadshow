import React from 'react'
import Image from 'next/image';
import home from '../public/home.png'
import MovingBar from './movingBar';
import About from './about';

export const Main = () => {
  return (
    <div className="bg-[#e9d5ef] m-0 ">
      <div className="flex flex-col">
        <div className="relative md:top-[0px] top-[345px]">
          <div className="z-[-2] bg-transparent mb-[-6px] p-0">
            <Image src={home} alt="image" />
          </div>
          <div className="absolute md:px-24 lg:px-40 bg-transparent md:py-10 lg:py-20 md:top-0 top-[-330px] px-10">
            <div className="bg-transparent">
              <h1 className="bg-transparent lg:bg-[#e9d5ef]">Polygon Guild Jaipur</h1>
              <h1 className='bg-transparent'>Roadshow</h1>
            </div>
            <br />
            <div className="bg-transparent">
              <p className='bg-transparent'>6th November, 2022 · Jaipur</p>
            </div>
            <br />
            <div className="hidden md:contents bg-transparent">
              <button className=" bg-purple-800 p-4 text-white font-bold rounded-xl hover:bg-[#5a008e97] hover:scale-[1.05] ease-in duration-200 text-sm md:text-xl">
                Apply now
              </button>
            </div>
          </div>
        </div>
        <div className="md:pt-[0px] pt-[345px] m-0">
         <MovingBar/> 
        </div>
      </div>
    </div>
  );
}
