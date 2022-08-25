import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import MetaTagsComponent from '../../components/meta-tags-component';
import { SignInVector } from '../../utils/icon.export.js';
import axiosInstance from '../../utils/axiosInstance';
import { login } from '../../utils/routes';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axiosInstance
      .post('/auth/login', formData)
      .then((res) => {
        login(res);
        window.location.pathname = '/profile';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MetaTagsComponent page='Login' />
      <div className='flex flex-col font-primary'>
        <main className='flex flex-col'>
          {/* full screen block */}
          <div className='flex w-full min-h-screen'>
            {/* Sign In Section */}
            <div className='flex flex-col bg-white w-2/3 justify-center items-center'>
              <div className='w-1/2'>
                <div className='flex flex-col'>
                  <p className='font-bold text-3xl mb-6 text-black'>Sign In</p>
                  <p className='font-medium text-xl text-black mb-8'>
                    Login to your account to start adding questions
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
                    <div className='my-5 font-normal text-right text-sm text-textPrimary'>
                      <a href='#' className='hover:text-primary'>
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      type='submit'
                      className='rounded-lg relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer bg-gradient-to-tr bg-primary text-white w-full'
                    >
                      <div className='absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-32 opacity-10'></div>
                      <div className='relative font-medium'>Login</div>
                    </button>
                  </form>
                  <p className='text-black pt-3'>
                    Don&apos;t have an account?
                    <Link href='/signup'>
                      <a>
                        <span className='text-primary font-medium hover:font-extrabold'>
                          {' '}
                          Register
                        </span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* Vector Section */}
            <div className='flex flex-col bg-primary w-1/3 items-center justify-center'>
              <img src={SignInVector.src} width='375px' className=''></img>
              <p className='text-white font-medium text-2xl w-2/3 text-center'>
                Just a click here and another there and you are logged in!
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
