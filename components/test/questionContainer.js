import React, { useEffect, useState } from 'react';

export const QuestionContainer = ({ question, questionIndex }) => {
  const [chosenAnswer, setChosenAnswer] = useState('');

  return (
    <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4'>
      <div className='flex justify-between'>
        <div className='text-xl font-bold '>{`Question ${
          questionIndex + 1
        } `}</div>
      </div>
      <p className='py-4 w-[100%] grow text-textPrimary'>{question.question}</p>

      <div className='flex flex-col spacing-y-2'>
        {question.A && chosenAnswer === 'A' ? (
          <div
            className='flex flex-row mb-2 cursor-pointer'
            onClick={() => {
              setChosenAnswer('');
            }}
          >
            <div className='bg-statusGreen h-12 w-12 rounded-md mr-4 flex'>
              <div className='w-full text-white text-center text-lg font-semibold my-auto'>
                A
              </div>
            </div>
            <div className='flex-grow flex'>
              <p className='text-textPrimary my-auto mx-4'>{question.A}</p>
            </div>
          </div>
        ) : (
          <div
            className='flex flex-row mb-2 cursor-pointer'
            onClick={() => {
              setChosenAnswer('A');
            }}
          >
            <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
              <div className='w-full text-center text-lg font-semibold my-auto'>
                A
              </div>
            </div>
            <div className='flex-grow flex'>
              <p className='text-textPrimary my-auto mx-4'>{question.A}</p>
            </div>
          </div>
        )}
        {question.B && chosenAnswer === 'B' ? (
          <div
            className='flex flex-row mb-2 cursor-pointer'
            onClick={() => {
              setChosenAnswer('');
            }}
          >
            <div className='bg-statusGreen h-12 w-12 rounded-md mr-4 flex'>
              <div className='w-full text-white text-center text-lg font-semibold my-auto'>
                B
              </div>
            </div>
            <div className='flex-grow flex'>
              <p className='text-textPrimary my-auto mx-4'>{question.B}</p>
            </div>
          </div>
        ) : (
          <div
            className='flex flex-row mb-2 cursor-pointer'
            onClick={() => {
              setChosenAnswer('B');
            }}
          >
            <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
              <div className='w-full text-center text-lg font-semibold my-auto'>
                B
              </div>
            </div>
            <div className='flex-grow flex'>
              <p className='text-textPrimary my-auto mx-4'>{question.B}</p>
            </div>
          </div>
        )}
        {question.C && chosenAnswer === 'C' ? (
          <div
            className='flex flex-row mb-2 cursor-pointer'
            onClick={() => {
              setChosenAnswer('');
            }}
          >
            <div className='bg-statusGreen h-12 w-12 rounded-md mr-4 flex'>
              <div className='w-full text-white text-center text-lg font-semibold my-auto'>
                C
              </div>
            </div>
            <div className='flex-grow flex'>
              <p className='text-textPrimary my-auto mx-4'>{question.C}</p>
            </div>
          </div>
        ) : (
          <div
            className='flex flex-row mb-2 cursor-pointer'
            onClick={() => {
              setChosenAnswer('C');
            }}
          >
            <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
              <div className='w-full text-center text-lg font-semibold my-auto'>
                C
              </div>
            </div>
            <div className='flex-grow flex'>
              <p className='text-textPrimary my-auto mx-4'>{question.C}</p>
            </div>
          </div>
        )}
        {question.D && chosenAnswer === 'D' ? (
          <div
            className='flex flex-row mb-2 cursor-pointer'
            onClick={() => {
              setChosenAnswer('');
            }}
          >
            <div className='bg-statusGreen h-12 w-12 rounded-md mr-4 flex'>
              <div className='w-full text-white text-center text-lg font-semibold my-auto'>
                D
              </div>
            </div>
            <div className='flex-grow flex'>
              <p className='text-textPrimary my-auto mx-4'>{question.D}</p>
            </div>
          </div>
        ) : (
          <div
            className='flex flex-row mb-2 cursor-pointer'
            onClick={() => {
              setChosenAnswer('D');
            }}
          >
            <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
              <div className='w-full text-center text-lg font-semibold my-auto'>
                D
              </div>
            </div>
            <div className='flex-grow flex'>
              <p className='text-textPrimary my-auto mx-4'>{question.D}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
