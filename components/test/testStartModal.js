import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import React from 'react';
import Link from 'next/link';
import { TestRoleSelector } from '../sub-components/dropdowns/testRoleSelector';

export const TestStartModal = ({ toggleModal, modalIsOpen }) => {
  return (
    <Transition appear show={modalIsOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10 ' onClose={toggleModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Select Test for the Roles below:
                </Dialog.Title>
                <div className='flex flex-row justify-evenly p-4 '>
                  <TestRoleSelector
                    data={['Setter', 'Reviewer']}
                    label={'Role'}
                  />
                  <TestRoleSelector
                    data={['Physics', 'Chemistry', 'Maths']}
                    label={'Topic'}
                  />
                </div>
                {/* <span className='text-statusOrange font-light italic'>
                  Duration of the test will be 60 minutes.
                </span> */}

                <div className='mt-4 flex '>
                  <Link href='/test'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-white font-semibold bg-primary'
                    >
                      Start Test
                    </button>
                  </Link>
                  <Link href='/profile'>
                    <button
                      type='button'
                      className='text-primary font-semibold rounded-md bg-primaryAccent inline-flex justify-center border border-transparent px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-2'
                      onClick={toggleModal}
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
