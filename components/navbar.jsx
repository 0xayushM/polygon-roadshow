import Image from 'next/image';
import React from 'react'
import logo from '../public/logo.png'
import Link from 'next/link';
import logo2 from '../public/logo-2.png'

const Navbar = () => {
  return (
    <div className="">
      <div className="h-30 w-full p-5 md:px-20 lg:px-40 bg-transparent z-[10]">
        <div
          id="navbar"
          className="bg-purple-300 border-b-4 border-purple-800 px-5 rounded-xl flex justify-between place-content-between items-center"
        >
          <Link href="/">
            <div className="hidden lg:contents bg-transparent lg:px-5 pt-2">
              <Image
                src={logo}
                alt="polygon"
                height="35px"
                width="160px"
                className="bg-transparent"
              />
            </div>
          </Link>
          <Link href="/">
            <div className="contents lg:hidden bg-transparent md:px-5 pt-2">
              <Image
                src={logo2}
                alt="polygon"
                height="45px"
                width="45px"
                className="bg-transparent"
              />
            </div>
          </Link>
          <div className="flex">
            <ul className="hidden md:flex bg-purple-300">
              <Link href="/#about">
                <li className="bg-purple-300 border-t-4 border-transparent hover:border-purple-800 py-3 px-0 font-medium text-lg mx-4 m-2 ease-in duration-200">
                  About
                </li>
              </Link>
              <Link href="/#speakers">
                <li className="bg-purple-300 border-t-4 border-transparent hover:border-purple-800 py-3 px-0 font-medium text-lg mx-4 m-2 ease-in duration-200">
                  Speakers
                </li>
              </Link>
              <Link href="/#partners">
                <li className="bg-purple-300 border-t-4 border-transparent hover:border-purple-800 py-3 px-0 font-medium text-lg mx-4 m-2 ease-in duration-200">
                  Partners
                </li>
              </Link>
              <Link href="/#venue">
                <li className="bg-purple-300 border-t-4 border-transparent hover:border-purple-800 py-3 px-0 font-medium text-lg mx-4 m-2 ease-in duration-200">
                  Venue
                </li>
              </Link>
            </ul>
            <div className="md:px-4 bg-purple-300 items-center justify-center flex py-2">
              <button className="bg-purple-800 p-3 px-4 text-white font-bold rounded-xl hover:bg-[#5a008e97] hover:scale-[1.05] ease-in duration-200 text-sm">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
