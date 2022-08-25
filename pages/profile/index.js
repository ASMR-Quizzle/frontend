import * as style from '@dicebear/avatars-jdenticon-sprites';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { Metamask } from '../../components/sub-components/buttons/metamask';
import { Sidebar } from '../../components/shared/sidebar';
import { Slider } from '../../components/sub-components/carousel/carousel';
import { TestStartModal } from '../../components/test/testStartModal';
import axiosInstance from '../../utils/axiosInstance';
import { createAvatar } from '@dicebear/avatars';
import { isLogin } from '../../utils/routes';

export default function Home() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    is_setter: false,
    is_reviewer: false,
    questions_accepted: 0,
    questions_reviewed: 0,
    phone_number: 0,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    if (!isLogin()) {
      window.location.pathname = '/logout';
      return;
    }
    axiosInstance
      .get('/user/profile')
      .then((res) => {
        setFormData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert('Error occured while fetching profile.');
        console.log(err);
      });
  }, [setFormData]);

  let svg = createAvatar(style, {
    seed: 'atharva',
  });
  console.log(svg);
  return (
    <div className='w-full flex h-screen'>
      {modalIsOpen ? (
        <TestStartModal toggleModal={toggleModal} modalIsOpen={modalIsOpen} />
      ) : null}
      <Sidebar isActive={{ profile: true }} />
      <div className=' w-5/6 px-[141px] max-h-screen overflow-y-auto flex flex-row my-3'>
        <div className='flex flex-col justify-center w-1/2 bg-surfacePrimary rounded-md py-4 px-2 '>
          <div
            className='w-36 h-36 mx-auto rounded-full mb-8 p-6 bg-white border-4 border-primaryAccent '
            dangerouslySetInnerHTML={{ __html: svg }}
          ></div>
          <form className='w-full max-w-lg mx-auto'>
            <div className='flex flex-wrap mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-first-name'
                >
                  First Name
                </label>
                <input
                  className='appearance-none block w-full bg-white placeholder-slate-400 rounded py-3 px-4 mb-3 leading-tight '
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                  value={formData.first_name}
                />
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-last-name'
                >
                  Last Name
                </label>
                <input
                  className='appearance-none block w-full bg-white placeholder-slate-400 rounded py-3 px-4 leading-tight '
                  id='grid-last-name'
                  type='text'
                  placeholder='Doe'
                  value={formData.last_name}
                />
              </div>
            </div>
            <div className='flex flex-wrap mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-email'
                >
                  Email
                </label>
                <input
                  className='appearance-none block w-full bg-white placeholder-slate-400  rounded py-3 px-4 mb-3 leading-tight '
                  id='grid-email'
                  type='email'
                  placeholder='abc@gmail.com'
                  value={formData.email}
                />
              </div>
            </div>
            <div className='flex flex-wrap mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-phone'
                >
                  Phone Number
                </label>
                <input
                  className='appearance-none block w-full bg-white placeholder-slate-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-phone'
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                  placeholder='+91-9876543210'
                />
                <button className='w-full py-4 text-base text-white font-semibold rounded-md bg-primary '>
                  Verify your Phone Number
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='w-1/2 flex flex-col '>
          <div className='h-1/3 bg-surfacePrimary rounded-md px-8 mb-2 py-2 mx-2 flex flex-col justify-evenly'>
            <p className='text-2xl font-extrabold mt-2'>My Roles</p>
            <div className='my-8 flex flex-row justify-between '>
              {/* <div className='flex flex-col justify-between w-full'> */}
              <div
                className={`flex flex-col my-auto${
                  formData.is_setter ? 'hidden' : ' '
                }`}
              >
                <span className='text-xl text-center font-bold'>
                  Question Setter
                </span>
                <a className='text-primary w-full text-center transition duration-150 border-b-2 border-transparent hover:underline hover:decoration-2 mr-auto cursor-pointer'>
                  <p>Your Eligible Topics</p>
                </a>
              </div>
              {/* </div> */}
              {/* <div className='flex justify-between w-full'> */}
              <div
                className={`flex flex-col my-auto${
                  formData.is_reviewer ? 'hidden' : ' '
                }`}
              >
                <span className='text-xl text-center font-bold'>
                  Question Reviewer
                </span>
                <a className='text-primary w-full text-center transition duration-150 border-b-2 border-transparent hover:underline hover:decoration-2 mr-auto cursor-pointer'>
                  <p>Your Eligible Topics</p>
                </a>
              </div>
            </div>

            <button
              className='px-4 py-2 text-base text-white font-semibold rounded-md bg-primary'
              onClick={toggleModal}
            >
              Take a Test Now!
            </button>

            {/* </div> */}
          </div>
          <div className='h-1/3 bg-surfacePrimary rounded-md px-8 mb-2 py-2 mx-2 flex flex-col justify-evenly'>
            <div className='flex justify-between'>
              <p className='text-2xl font-extrabold  my-auto'>My Rewards</p>
              <Metamask />
            </div>
            <div className='my-8 px-8 '>
              <Slider />
            </div>
          </div>
          <div className='h-1/3 bg-surfacePrimary rounded-md px-8 py-2 mx-2 flex flex-col justify-evenly'>
            <div className='flex flex-col '>
              <p className='text-2xl font-extrabold  my-auto'>My Statistics</p>
              <div className='my-8'>
                <div className='flex justify-between my-4'>
                  <span className='text-xl font-semibold '>
                    Total Questions Reviewed by You:
                  </span>
                  <span className='text-xl font-bold'>45</span>
                </div>
                <div className='flex justify-between my-4'>
                  <span className='text-xl font-semibold '>
                    Total Questions Set by You:
                  </span>
                  <span className='text-xl font-bold'>69</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
