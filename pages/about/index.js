import { AboutImage } from '../../utils/icon.export.js';
import Navbar from '../../components/navbar/navbar.js';
import React from 'react';

export default function About() {
  return (
    <div className='flex flex-col font-primary w-full min-h-screen justify-between mx-auto'>
      <Navbar />
      <div className='flex flex-col justify-evenly items-center'></div>
      <img src={AboutImage.src} className='w-2/5'></img>
    </div>
  );
}
