import { MdClear, MdDelete } from 'react-icons/md';
import React, { useState } from 'react';

import { BsCheckLg } from 'react-icons/bs';
import { DeleteModal } from '../shared/delete-modal';

export const QuestionContainer = ({ question }) => {
  //   const [modalIsOpen, setModalIsOpen] = useState(false);

  //   const toggleModal = () => {
  //     setModalIsOpen(!modalIsOpen);
  //   };

  return (
    <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4'>
      {/* {modalIsOpen ? (
        <DeleteModal
          questionsList={questionsList}
          setQuestionsList={setQuestionsList}
          questionIndex={questionIndex}
          toggleModal={toggleModal}
          modalIsOpen={modalIsOpen}
        />
      ) : null} */}
      <div className='flex justify-between'>
        <div className='text-xl font-bold '>{`Question ${question.id} `}</div>
      </div>
      <div className='flex flex-wrap space-x-2 space-y-2'>
        <span className='bg-primaryAccent text-primary rounded-md mt-2 focus:outline-none placeholder-textSecondary placeholder:italic py-2 px-4 min-w-fit'>
          {question.topic}
        </span>
      </div>
      <p className='py-4 w-[100%] grow text-textPrimary'>{question.question}</p>

      <div className='flex mb-4'>
        {question.A ? (
          <>
            <div className='bg-white h-16 w-16 rounded-md mr-4 flex'>
              <div className='w-full text-center text-lg font-semibold m-auto'>
                A
              </div>
            </div>
            <div className='flex w-full justify-between rounded-[10px]'>
              <p className='text-textPrimary my-auto mx-4'>{question.A}</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
