import Link from 'next/link';
import { QuizzleLogo } from '../../utils/icon.export.js';
import React from 'react';

export default function Nav() {
  return (
    <div>
      <nav className='flex items-center justify-between flex-wrap p-5 font-primary fixed w-full bg-white shadow-md'>
        <div className='flex items-center flex-shrink-0 mr-6 '>
          <img src={QuizzleLogo.src}></img>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <Link href='/home'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-6 text-xl cursor-pointer'>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-6 text-xl cursor-pointer'>
                About Us
              </a>
            </Link>
            <Link href='/institute-login'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-6 text-xl cursor-pointer'>
                Collaborate
              </a>
            </Link>
            <Link href='/contact'>
              <a
                href='#'
                className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-6 text-xl cursor-pointer'
              >
                Contact Us
              </a>
            </Link>
            <a
              href='#'
              className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary text-xl cursor-pointer'
            >
              Help
            </a>
          </div>
          <div>
            <Link href={'/login'}>
              <a
                href='#'
                className='inline-block font-primary text-lg font-semibold lg:px-8 lg:py-2 px-6 py-2 bg-primary rounded-lg text-white mt-4 lg:mt-0'
              >
                Login
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
