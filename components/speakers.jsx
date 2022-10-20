import Image from "next/image";
import React from "react";
import SpeakersData from "./speakersData";
import partners from '../public/partners.png';

const Speakers = () => {
  return (
    <div id="speakers">
      <hr />
      <div className="flex flex-col items-center justify-center mt-[420px] md:pt-5 lg:mt-[100px] pt-[150px] px-10 py-5 ">
        <h1 className="text-[40px] md:text-8xl pb-10 lg:pb-20 ">Speakers & Judges</h1>
      </div>
      <div className="hidden lg:contents">
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:px-40 gap-0">
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-2 p-5 lg:px-80 gap-0">
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 p-5 lg:px-40 gap-5">
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-2 p-5 lg:px-80 gap-0">
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
        </div>
      </div>
      <div className="contents lg:hidden">
        <div className="grid grid-cols-2 lg:grid-cols-2 px-10 lg:px-80 gap-0">
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
          <SpeakersData
            speaker="/speaker.jpg"
            name="name"
            organisation="organisation"
          />
        </div>
      </div>
      <div className="pt-10 flex items-center justify-center">
        <Image src={partners} alt='' height='200px' width='1000px'/>
      </div>
    </div>
  );
};

export default Speakers;
