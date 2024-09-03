"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FaBookmark, FaSearch } from 'react-icons/fa';
import { MdOutlineDarkMode } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";


const DashboardNavbar = () => {


const session = useSession();

const user = session?.data?.user;
    return (
       
            <div className="navbar  bg-[#f5f5f5] border-b">
  <div className="flex-1">
    <p className="btn btn-ghost block text-xl">Welcome {user?.name}   <br /> <span className='text-sm font-normal'>  Here’s what’s happening with your  store today.</span></p>
   

      </div>
  <div className="flex-none gap-2">
  <div className="relative mr-8">

  <button className="absolute inset-y-0 right-0 px-3  text-[#a4abb4]  rounded-r transition border-l duration-300">
            <FaSearch/>
            </button> 

            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs pr-10"
            />
            {/* <button className="absolute inset-y-0 right-0 px-3 bg-[#283142] text-white hover:bg-[#1b212c] rounded-r transition duration-300">
              Search
            </button> */}
          </div>
<span className='bg-white p-4 rounded-full' >
<FaBookmark className='text-[#999999]  text-lg '/></span>
<span className='bg-white p-4 rounded-full' >
<MdOutlineDarkMode className='text-[#999999]  text-lg '/></span>
<span className='bg-white p-4 rounded-full mr-8' >
<IoIosNotifications className='text-[#999999]  text-lg '/></span>
    <div className="dropdown dropdown-end border-l">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image height={200} width={200}
            alt="Tailwind CSS Navbar component"
            src={user?.image} />
        </div>
      </div>
     
    </div>
  </div>
</div>
       
    );
};

export default DashboardNavbar;