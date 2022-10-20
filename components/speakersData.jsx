import React from 'react'
import Image from 'next/image';

const SpeakersData = ({ speaker, name, organisation }) => {
  return (
    <div>
      <div className="h-[180px] lg:h-[350px]">
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="rounded-[2%] lg:mx-auto my-0 hover:bg-purple-500/50 ease-in duration-300 w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] mt-100px -rotate-[20deg] origin-center ">
            <div className="rounded-[3%] hover:bg-purple-600/50 ease-in duration-300 origin-center rotate-[10deg] w-[120px] h-[120px]  md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
              <div className="rounded-[5%] bg-purple-600 hover:bg-purple-600 ease-in duration-300 origin-center rotate-[10deg] w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] shadow-black shadow-md">
                <Image
                  src={speaker}
                  alt="speaker"
                  layout='fill'
                  className="max-w-[100%] rounded-[5%]"
                />
              </div>
            </div>
            <div className="rotate-[20deg] bg-transparent flex flex-col items-center justify-center my-2 py-1 lg:mt-6 lg:pr-[130px] pr-[70px] ">
              <p className="text-sm lg:text-xl bg-transparent text-purple-900 font-bold">
                {name}
              </p>
              <p className="text-sm lg:text-xl bg-transparent text-purple-800">
                {organisation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersData
