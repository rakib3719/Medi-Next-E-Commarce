"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Navbar = () => {

    const pathname = usePathname();
  
  const navLink = (
    <>
      <li>
        <Link href="/" className=  {`relative ${pathname === '/' && "text-[#2b97a4]"} font-semibold hover:text-[#2b97a4] transition duration-300`}>
          Home
          <span className="absolute left-0 right-0 -bottom-4 mx-auto w-0 h-1 bg-[#2b97a4] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      <li>
        <Link href="/shop" className={`relative ${pathname === '/shop' && "text-[#2b97a4]"} font-semibold hover:text-[#2b97a4] transition duration-300`}>
          Shop
          <span className="absolute left-0 right-0 -bottom-1 mx-auto w-0 h-1 bg-[#2b97a4] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      {/* Top Section */}
      <div className="hidden  md:flex justify-between items-center p-2 bg-[#2b97a4] text-sm">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs pr-10"
            />
            <button className="absolute inset-y-0 right-0 px-3 bg-[#283142] text-white hover:bg-[#1b212c] rounded-r transition duration-300">
              Search
            </button>
          </div>
          <div className="bg-white py-3 rounded px-6">
            Call us: <a href="tel:+1234567890" className="font-semibold text-[#ef4281]">+123 456 7890</a>
          </div>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost flex items-center gap-2">
              Languages
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="dropdown-content menu p-2 shadow bg-white rounded-box w-32">
              <li><a>English</a></li>
              <li><a>বাংলা</a></li>
              <li><a>Español</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Responsive Top Section for Smaller Screens */}
      <div className="md:hidden flex flex-col space-y-2 p-2 bg-[#2b97a4] text-sm">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full pr-10"
          />
          <button className="absolute inset-y-0 right-0 px-3 bg-[#283142] text-white hover:bg-[#1b212c] rounded-r transition duration-300">
            Search
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="bg-white py-3 rounded px-6">
            Call us: <a href="tel:+1234567890" className="font-semibold text-[#ef4281]">+123 456 7890</a>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost flex items-center gap-2">
              Languages
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="dropdown-content menu p-2 shadow bg-white rounded-box w-32">
              <li><a>English</a></li>
              <li><a>বাংলা</a></li>
              <li><a>Español</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="navbar bg-white border">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLink}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl font-bold text-[#2b97a4]">
            MediNext
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 menu-horizontal px-1 items-center">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end flex items-center space-x-6">
          <Link href="/cart" className="hover:text-[#2b97a4] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.5-7h-13L5.2 4H19a1 1 0 011 1v2a1 1 0 01-1 1H7m-2 0h2l2 10m0 0h10m-12 0a1 1 0 11-1-1m12 1a1 1 0 11-1-1m0 0H9m12 0H9" />
            </svg>
          </Link>
          <Link href="/login" className="btn bg-[#2b97a4] text-white hover:bg-[#248892] transition duration-300">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
