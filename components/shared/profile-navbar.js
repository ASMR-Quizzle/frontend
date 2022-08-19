import { FaUser } from 'react-icons/fa';
import React from 'react';

export const ProfileNavbar = () => {
  return (
    <div className='flex w-full fixed'>
      <div className='bg-surfacePrimary mr-6 ml-auto rounded-md py-4 px-4 flex justify-between'>
        <FaUser className='w-4 h-4  rounded-lg  text-textSecondary my-auto mx-2' />
        <span className='my-auto'>AN</span>
      </div>
    </div>
  );
};
