"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 
import Image from 'next/image';


const Navbar = () => {

    const pathname = usePathname();
    const session = useSession();
    console.log(session);


  const logoutHandle = async()=>{
await signOut()
  }
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
    <div  className={`${pathname === "/adminDashboard" && "hidden"}`}>
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
          {
  session.status !== "authenticated" ? (
    <Link href="/login" className="btn bg-[#2b97a4] text-white hover:bg-[#248892] transition duration-300">
      Join Us
    </Link>
  ) : (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center space-x-2 focus:outline-none">
          <Image src={session?.data?.user?.image || '/default-avatar.png'} width={100 } height={100} alt="Profile Picture" className="w-10 h-10 rounded-full border-2 border-[#2b97a4]" />
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/update-profile"
                  className={`${
                    active ? 'bg-[#2b97a4] text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Update Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/adminDashboard"
                  className={`${
                    active ? 'bg-[#2b97a4] text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Dashboard
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
              onClick={logoutHandle}
                  className={`${
                    active ? 'bg-red-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
