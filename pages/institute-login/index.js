import { InsituteSignInVector, SignInVector } from '../../utils/icon.export.js';
import React, { useState } from 'react';

import Link from 'next/link';
import Navbar from '../../components/navbar/navbar.js';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className='flex flex-col font-primary'>
      <Navbar />
      <main className='flex flex-col'>
        {/* full screen block */}
        <div className='flex w-full min-h-screen'>
          <div className='flex flex-col bg-primary w-1/5 items-center justify-center'>
            <img src={SignInVector.src} width='375px' className=''></img>
            {/* <p className='text-white font-medium text-2xl w-2/3 text-center'>
              Just a click here and another there and you are logged in!
            </p> */}
          </div>
          {/* Sign In Section */}
          <div className='flex flex-col bg-white w-3/5 justify-center items-center'>
            <div className='w-1/2'>
              <div className='flex flex-col'>
                <p className='font-bold text-3xl mb-6 text-black'>
                  Institute Sign-In
                </p>
                <p className='font-medium text-xl text-black mb-8'>
                  Login to generate question banks!
                </p>
                <form onSubmit={handleSubmit}>
                  <div className='flex'>
                    <input
                      type='username'
                      name='username'
                      required
                      placeholder='Username'
                      className='border-textSecondary border rounded-lg focus:border-primary outline-none mb-3 flex-1 text-textSecondary text-xs font-light px-4 py-3'
                      onChange={handleChange}
                      value={formData.email}
                    ></input>
                  </div>
                  <div className='flex'>
                    <input
                      type='password'
                      name='password'
                      required
                      placeholder='Password'
                      className='border-textSecondary border rounded-lg focus:border-primary outline-none flex-1 text-textSecondary text-xs font-light px-4 py-3'
                      onChange={handleChange}
                      value={formData.password}
                    ></input>
                  </div>
                  <Link href='/generate-qb'>
                    <button
                      type='submit'
                      className='my-4 rounded-lg relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer bg-gradient-to-tr bg-primary text-white w-full'
                    >
                      <div className='absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-32 opacity-10'></div>
                      <div className='relative font-medium'>Login</div>
                    </button>
                  </Link>
                </form>
                <p className='text-black pt-3'>
                  <Link href='/contact-us'>
                    <a>
                      <span className='font-medium underline hover:font-semibold'>
                        Contact us for collaboration!
                      </span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* Vector Section */}
          <div className='flex flex-col bg-primary w-1/5 items-center justify-center'>
            <img
              src={InsituteSignInVector.src}
              width='305px'
              className=''
              alt='Sign In'
            ></img>
            {/* <p className='text-white font-medium text-2xl w-2/3 text-center'>
              Just a click here and another there and you are logged in!
            </p> */}
          </div>
        </div>
      </main>
    </div>
  );
}
