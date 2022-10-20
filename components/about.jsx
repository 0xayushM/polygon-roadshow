import React from 'react'
import Image from 'next/image';
import about from '../public/about.png'

const About = () => {
  return (
    <div id="about">
      <div className="relative">
        <div className="z-[-2] bg-transparent mb-[-6px]">
          <Image src={about} alt="image" />
        </div>
        <div className="absolute md:px-24 lg:px-40 bg-transparent py-20 md:py-20 lg:py-40 px-10">
          <div className="p-10 lg:px-10 rounded-xl grid grid-cols-1 gap-10 lg:grid-cols-2 bg-white/30">
            <div className="md:p-20 pt-10 bg-transparent">
              <h1 className="text-[45px] md:text-8xl bg-transparent">
                Celebrating our love for building
              </h1>
            </div>
            <div className="md:p-20 py-5 lg:py-20 bg-transparent">
              <p className="font-thin text-[15px] leading-5 md:text-lg tracking-0 bg-transparent">
                ETHIndia is a hackathon — a movement with the goal of inspiring
                and fostering a community of builders promoting technological
                advancements for Ethereum. It’s a place where the leading minds
                in the Ethereum ecosystem are uniting with 1500+ builders from
                around the globe to build decentralized applications for the
                future. And we invite you to be one of them. Help us build a
                garden where everyone is self-sovereign, where everyone is an
                owner, where hierarchies don’t exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
