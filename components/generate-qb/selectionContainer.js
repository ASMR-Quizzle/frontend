import { Fragment, useEffect, useRef, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { FiChevronDown } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

export const SelectionContainer = ({ topicList, setTopicList, topicIndex }) => {
  const topics = ['Physics', 'Chemistry', 'Maths'];

  const [selection, setSelection] = useState('Select a Topic');

  const available = {
    easy: 120,
    medium: 90,
    hard: 30,
  };

  return (
    <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4 flex flex-col'>
      <div className='flex'>
        <label
          className='block my-auto mb-2 mr-2 text-sm font-medium text-black'
          htmlFor='easy'
        >
          Topic:
        </label>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex w-full justify-center rounded-md bg-primaryAccent px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
              {selection}
              <FiChevronDown
                className='ml-2 -mr-1 h-5 w-5 text-black'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 '>
                {topics.map((topic, index) => {
                  return (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-primary text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => {
                            setSelection(topic);
                          }}
                        >
                          {topic}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <MdDelete
          className='ml-auto h-6 w-6 text-statusRed cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 my-auto'
          onClick={() => {
            topicList.splice(topicIndex, 1);
            setTopicList([...topicList]);
          }}
        />
      </div>
      <div className='flex mt-8'>
        <div className='flex-1 mr-4'>
          <label
            className='block mb-2 text-sm font-medium text-black'
            htmlFor='easy'
          >
            {`No. of Easy Questions (Available: ${available.easy})`}
          </label>
          <input
            id='easy'
            className='bg-white text-textPrimary text-sm rounded-lg block w-full p-2 placeholder-slate-500-400'
            type='number'
            required
          ></input>
        </div>
        <div className='flex-1 mr-4'>
          <label
            className='block mb-2 text-sm font-medium text-black'
            htmlFor='medium'
          >
            {`No. of Medium Questions (Available: ${available.medium})`}
          </label>
          <input
            id='medium'
            className='bg-white text-textPrimary text-sm rounded-lg block w-full p-2 placeholder-slate-500-400 '
            required
            type='number'
          ></input>
        </div>
        <div className='flex-1'>
          <label
            className='block mb-2 text-sm font-medium text-black'
            htmlFor='hard'
          >
            {`No. of Hard Questions (Available: ${available.hard})`}
          </label>
          <input
            id='hard'
            className='bg-white text-textPrimary text-sm rounded-lg block w-full p-2 placeholder-slate-500-400 '
            required
          ></input>
        </div>
      </div>
    </div>
  );
};
