import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    function onChange(e){
        setEmail(e.target.value);
        }
  return (
    <section>
        <h1 className='text-3xl text-center mt-6 font-bold mb-12 md:mb-6'>Reset Password</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
            <div className='md:w-[67%] lg:w-[50%]'>
                <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1373&q=80" alt="key" className='w-full rounded-2xl'/>
            </div>
        
            <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20 lg:mt-0 sm:mt-6'>
                <form>
                    <input type="email" id="email" value={email} onChange={onChange} placeholder='Email Address' className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out cursor-pointer'/>
                    
                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                        <p>
                            Don't have an account?
                            <Link to="/sign-up" className='text-red-500 hover:text-red-700 ml-1 transition-duration-200'>Register</Link>
                        </p>
                        <p className='right'>
                            <Link to="/sign-in" className='text-blue-500 hover:text-blue-700 ml-1 transition-duration-200'>Sign in
                            </Link>
                        </p>
                    </div>
                    <button type="submit" className='mt-3 w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>Reset Password</button>
                    <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                        <p className='my-4 text-center font-semibold'>OR</p>
                    </div>
                    <OAuth />
                </form>
                
            </div>
        </div>
    </section>
  )
}
