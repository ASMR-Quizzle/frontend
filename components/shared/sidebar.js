import { IS_REVIEWER_KEY, IS_SETTER_KEY } from '../../utils/types';

import { BsPlusLg } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';
import { MdOutlineExitToApp } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { QuizzleLogo } from '../../utils/icon.export.js';
import React from 'react';

export const Sidebar = ({ isActive }) => {
  const [isReviewer, setIsReviewer] = React.useState(false);
  const [isSetter, setIsSetter] = React.useState(false);

  React.useEffect(() => {
    setIsReviewer(JSON.parse(sessionStorage.getItem(IS_REVIEWER_KEY)));
    setIsSetter(JSON.parse(sessionStorage.getItem(IS_SETTER_KEY)));
  }, [setIsReviewer, setIsSetter]);

  return (
    <div className='w-1/6 bg-surfacePrimary max-h-screen overflow-y-auto flex flex-col flex-grow h-full'>
      <div className='ml-8'>
        <img src={QuizzleLogo.src} className='mt-10 h-12' />
      </div>
      <div className='mt-8'>
        <ul className='list-none'>
          <li>
            <Link href='/add-questions'>
              <div
                className={`${
                  isSetter ? '' : 'hidden'
                } flex cursor-pointer p-4 pl-8 ${
                  isActive['add_question'] === true
                    ? 'bg-slate-300'
                    : 'hover:bg-primaryAccent'
                }`}
              >
                <div className='mr-4 w-8 my-auto '>
                  <BsPlusLg className='text-textPrimary h-5 w-5' />
                </div>
                <div className={`font-normal text-textPrimary text-xl `}>
                  <a>Add Question</a>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href='/my-questions'>
              <div
                className={`flex cursor-pointer p-4 pl-8 ${
                  isActive['my_questions'] === true
                    ? 'bg-slate-300'
                    : 'hover:bg-primaryAccent'
                }`}
              >
                <div className='mr-4 w-8 my-auto'>
                  <FaClipboardList className='text-textPrimary h-6 w-6' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  <a>My Questions</a>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href='/review-questions'>
              <div
                className={`${
                  isReviewer ? '' : 'hidden'
                } flex cursor-pointer p-4 pl-8 ${
                  isActive['review_questions'] === true
                    ? 'bg-slate-300'
                    : 'hover:bg-primaryAccent'
                }`}
              >
                <div className='mr-4 w-8 my-auto'>
                  <MdRateReview className='text-textPrimary h-6 w-6' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  <a>Review Questions</a>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='mt-auto mb-8'>
        <ul className='list-none'>
          <li>
            <Link href='/profile'>
              <div
                className={`flex cursor-pointer p-4 pl-8 ${
                  isActive['profile'] === true
                    ? 'bg-slate-300'
                    : 'hover:bg-primaryAccent'
                }`}
              >
                <div className='mr-4 w-8 my-auto'>
                  <FaUserAlt className='text-textPrimary h-5 w-5' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  Profile
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href='/logout'>
              <div
                className={`flex cursor-pointer p-4 pl-8 ${
                  isActive['logout'] === true
                    ? 'bg-slate-300'
                    : 'hover:bg-primaryAccent'
                }`}
              >
                <div className='mr-4 w-8 my-auto'>
                  <MdOutlineExitToApp className='text-textPrimary h-6 w-6' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  Logout
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
