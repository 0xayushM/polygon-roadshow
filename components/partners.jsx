import React from 'react'
import MovingBar2 from './movingBar2';
import PartnersData from './partnersData';

const Partners = () => {
  return (
    <div id="partners">
      <div className="flex flex-col items-center justify-center px-20 py-5 lg:py-10">
        <h1>Partners</h1>
      </div>
      <div className="flex items-center justify-center px-10 lg:px-40">
        <div>
          <PartnersData image="" />
        </div>
      </div>
      <div className="pt-[20px] m-0">
        <MovingBar2 />
      </div>
    </div>
  );
}

export default Partners
