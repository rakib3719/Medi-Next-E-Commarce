"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { TbUserPlus } from "react-icons/tb";
import { FaRegUser, FaEnvelope, FaLock, FaUpload } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { imageUpload } from '../utilities/photoUpload';



const Register = () => {
const router = useRouter()
const [loading, setLoading] = useState(false)

    const registarHandle = async(e) => {
        e.preventDefault();
        setLoading(true)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const file = e.target.photo.files[0] || null;

 


    const imageURL = await imageUpload(file);


const photoURL = imageURL?.data?.data?.
delete_url || null;



try {




    const user = {
        name,
        email,
        password,
        photoURL
    }
    
    const response = await fetch('registar/api', {
        method:"POST",
         body: JSON.stringify(user),
         headers: {
             'Content-Type': 'application/json',
         }
     })

console.log("response", response);

if(response.status === 200){
   toast.success("Registar success")
   setLoading(false)
   setTimeout(() => {
    router.push('/');
  }, 3000);
}
else{
    toast.error(response.statusText)
    setLoading(false)
}


} catch (error) {
   toast.error(error.message)
   setLoading(false)
}
    }
    return (
        <div className="flex pb-20 items-center justify-center  bg-gray-50">
            <ToastContainer/>
            <div className="w-full mt-24 max-w-[700px] pb-8 space-y-6 bg-white shadow-lg">
                <div className='flex w-full items-center font-semibold text-lg gap-4 text-white px-8 py-2 bg-[#2b97a3]'>
                    <h1 className='text-3xl'><TbUserPlus /></h1>
                    <h1 className=''>Create an Account</h1>
                </div>

                <div className='md:flex'>
                    <form onSubmit={registarHandle} className="mt-8 space-y-6 px-8 w-full">
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only flex">Full Name</label>
                                <div className="relative flex items-center">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaRegUser className="text-[#ababab] text-lg " />
                                    </span>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2b97a4] focus:border-[#2b97a4] sm:text-sm"
                                        placeholder="Full Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only flex">Email Address</label>
                                <div className="relative flex items-center">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="text-[#ababab] text-lg " />
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2b97a4] focus:border-[#2b97a4] sm:text-sm"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only flex">Password</label>
                                <div className="relative flex items-center">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-[#ababab] text-lg " />
                                    </span>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2b97a4] focus:border-[#2b97a4] sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="photo" className="sr-only flex">Profile Photo</label>
                                <div className="relative flex items-center">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUpload className="text-[#ababab] text-lg " />
                                    </span>
                                    <input
                                        id="photo"
                                        name="photo"
                                        type="file"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2b97a4] focus:border-[#2b97a4] sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2b97a4] hover:bg-[#248892] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b97a4] items-center gap-2"
                            >
                                <FaUserAlt className='mb-1' /> {
                                    loading ? "Loading" : "Register"
                                }
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 px-8 w-full">
                        <h1 className='font-semibold'>ALREADY HAVE AN ACCOUNT?</h1>
                        <p className="font-medium text-[#4f4f4f]">
                            Sign in to your account to continue!
                        </p>

                        <Link
                            href={'/login'}
                            className="group relative flex w-full justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2b97a4] hover:bg-[#248892] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b97a4]"
                        >
                            SIGN IN NOW
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
