import { FaUser } from 'react-icons/fa';

import React from 'react';

export const ProfileNavbar = () => {
  return (
    <div className='flex flex-col w-full fixed'>
      <div className='bg-surfacePrimary  mr-6 ml-auto rounded-md py-4 px-4 flex justify-evenly hover:cursor-pointer '>
        <FaUser className='w-4 h-4  rounded-lg  text-textSecondary my-auto mx-2' />
        <span className='my-auto font-bold'>AN</span>
      </div>
    </div>
  );
};
