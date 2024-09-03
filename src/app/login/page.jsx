"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { TbLogin2 } from "react-icons/tb";
import { FaKey, FaRegUser, FaUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { signIn } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Login = () => {

    
    const [loading, setLoading] = useState(false)
    const route = useRouter()
const loginHandle =async (e) => {
    e.preventDefault()
    setLoading(true)
    const email = e.target.email.value;
    const password = e.target.password.value;
const response = await signIn("credentials", {
    email,
    password,

    redirect: false
})

if(response.status === 200){
    toast.success("Login success")
    setLoading(false)
    route.push('/')
}
else{
    toast.error("Incorrect email or passwowrd plz try again!")
    setLoading(false)
}


}


    return (
        <div className="flex items-center justify-center  bg-gray-50 pb-20">

<ToastContainer/>
          
            <div className="w-full max-w-[700px] mt-24  pb-8 space-y-6 bg-white  shadow-lg">

            <div className='flex w-full items-center font-semibold text-lg gap-4 text-white px-8 py-2 bg-[#2b97a3]'>

<h1 className='text-3xl'> <TbLogin2/></h1>
<h1 className=''>Sign in now</h1>



</div>



              <div className='md:flex '>


                
              <form onSubmit={loginHandle} className="mt-8 space-y-6 px-8">
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only flex">Email address</label>

                            <div className="relative flex items-center">
  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FaUser className="text-[#ababab] text-lg " />
  </span>
  <input
    id="email"
    name="email"
    type="email"
    autoComplete="email"
    required
    className="block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2b97a4] focus:border-[#2b97a4] sm:text-sm"
    placeholder="Email address"
  />
</div>

                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only flex">Password</label>

                            <div className="relative flex items-center">
  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FaKey className="text-[#ababab] text-lg " />
  </span>
  <input
    id="password"
    name="password"
    type="password"
    autoComplete="password"
    required
    className="block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2b97a4] focus:border-[#2b97a4] sm:text-sm"
    placeholder="Password"
  />
</div>

                        </div>
                        
                    </div>

                    <div className="flex items-center justify-between">
                     

                        <div className="text-sm">
                            <Link href="/forgot-password" className="font-medium text-[#ababab] hover:text-[#248892]">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2b97a4] hover:bg-[#248892] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b97a4]  items-center gap-2"
                        >
                 <FaUnlockAlt className='mb-1'/>     { loading ? "Loading": "Sign in"}
                        </button>
                    </div>
                </form>

                <div className="mt-6 px-8">

                    <h1 className='font-semibold '>NEW HERE?</h1>
                   
               
                        <p className="font-medium  text-[#4f4f4f]  ">
                        Registration is free and easy!
                        </p>

                        <ul className='space-y-2 mt-4 italic list-style'>

                            <li>Faster checkout</li>
                            <li>Save multiple shipping addresses</li>
                            <li>View and track orders and mor</li>
                        </ul>
                
                    <Link
                         href={'/registar'}
                            className="group relative flex w-full justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2b97a4] hover:bg-[#248892] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b97a4]"
                        >
                CREATE AN ACCOUNT
                        </Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Login;
