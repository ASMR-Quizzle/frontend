import {
  AddQuestionPNG,
  CrossPNG,
  DarkCheckPNG,
  LightCheckPNG,
  LogoPNG,
  LogoutPNG,
  MyQuestionsPNG,
  ProfilePNG,
  SettingsPNG,
} from '../utils/icon.export.js';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='w-full flex'>
      <div className=' w-1/6 bg-surfacePrimary h-screen'>
        <div>
          <img src={LogoPNG.src} className='mx-auto mt-10' />
        </div>
        <div className='mt-16'>
          <ul className='list-none '>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={ProfilePNG.src} alt='profile' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  Profile
                </div>
              </div>
            </li>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={AddQuestionPNG.src} alt='add_question' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  Add Question
                </div>
              </div>
            </li>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={MyQuestionsPNG.src} alt='my_quesiton' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  My Questions
                </div>
              </div>
            </li>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={SettingsPNG.src} alt='settings' />
                </div>
                <div className='font-normal text-textPrimary text-xl my-auto'>
                  Settings
                </div>
              </div>
            </li>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={LogoutPNG.src} alt='login' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  Logout
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=' w-5/6 h-screen px-[141px] my-4'>
        <p className='text-2xl subpixel-antialiased font-bold'>Add Questions</p>
        <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4'>
          <p className='text-xl subpixel-antialiased font-bold '>
            This is an example question
          </p>
          <div className='flex flex-wrap space-x-2 space-y-2'>
            <button className='py-2 px-4 bg-primaryAccent text-primary rounded-md mt-2'>
              Operating Systems
              <span className='text-lg font-semibold ml-2 rounded-full '>
                x
              </span>
            </button>
            <button className='py-2 px-4 bg-primaryAccent text-primary rounded-md mt-2'>
              <span className='text-lg font-semibold '>+</span> Add Tags
            </button>
          </div>
          <input
            className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 my-4 py-4 px-8 w-[100%] rounded-md'
            placeholder='Add a description here....'
          ></input>
          <div className='flex '>
            <span className='my-auto mr-4 text-lg font-semibold '>A</span>
            {/* <div className='w-full'> */}
            <div className='bg-white flex w-full justify-between rounded-[10px]'>
              <input
                className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 my-4 px-8 '
                placeholder='Option A'
              ></input>
              <div className='flex mr-6'>
                <img src={LightCheckPNG.src} className='my-auto mr-4' />
                <img src={CrossPNG.src} className='my-auto' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-5'>
          <button className='w-[49%] px-4 py-2 text-sm text-primary font-semibold rounded-md bg-primaryAccent '>
            Add Question
          </button>
          <button className='w-[49%] px-4 py-2 text-sm text-white font-semibold rounded-md bg-primary '>
            Submit Questions
          </button>
        </div>
      </div>
    </div>
  );
}
