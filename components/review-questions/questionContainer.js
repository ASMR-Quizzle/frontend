import React, { useState } from 'react';

//A card which iterates

export const QuestionContainer = ({ question }) => {
  const [difficulty, setDifficulty] = useState(5);
  const [acceptance, setAcceptance] = useState(50);

  return (
    <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4'>
      <div className='flex'>
        <div className='text-xl font-bold '>{`Question ID ${question.id} `}</div>
      </div>
      <div className='flex flex-wrap space-x-2 space-y-2'>
        <span className='bg-primaryAccent text-primary rounded-md mt-2 focus:outline-none placeholder-textSecondary placeholder:italic py-2 px-4 min-w-fit'>
          {question.topic}
        </span>
      </div>
      <p className='py-4 w-[100%] grow text-textPrimary'>{question.question}</p>

      <div className='flex flex-col spacing-y-2'>
        {question.A ? (
          question.answer !== 'A' ? (
            <div className='flex flex-row'>
              <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg font-semibold my-auto'>
                  A
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-textPrimary my-auto mx-4'>{question.A}</p>
              </div>
            </div>
          ) : (
            <div className='flex flex-row'>
              <div className='bg-statusGreen h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg text-white font-semibold my-auto'>
                  A
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-statusGreen my-auto mx-4'>{question.A}</p>
              </div>
            </div>
          )
        ) : null}
        {question.B ? (
          question.answer !== 'B' ? (
            <div className='flex flex-row mt-4'>
              <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg font-semibold my-auto'>
                  B
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-textPrimary my-auto mx-4'>{question.B}</p>
              </div>
            </div>
          ) : (
            <div className='flex flex-row mt-4'>
              <div className='bg-statusGreen h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg text-white font-semibold my-auto'>
                  B
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-statusGreen my-auto mx-4'>{question.B}</p>
              </div>
            </div>
          )
        ) : null}
        {question.C ? (
          question.answer !== 'C' ? (
            <div className='flex flex-row mt-4'>
              <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg font-semibold my-auto'>
                  C
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-textPrimary my-auto mx-4'>{question.C}</p>
              </div>
            </div>
          ) : (
            <div className='flex flex-row mt-4'>
              <div className='bg-statusGreen h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg text-white font-semibold my-auto'>
                  C
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-statusGreen my-auto mx-4'>{question.C}</p>
              </div>
            </div>
          )
        ) : null}
        {question.D ? (
          question.answer !== 'D' ? (
            <div className='flex flex-row mt-4'>
              <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg font-semibold my-auto'>
                  D
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-textPrimary my-auto mx-4'>{question.D}</p>
              </div>
            </div>
          ) : (
            <div className='flex flex-row mt-4'>
              <div className='bg-statusGreen h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg text-white font-semibold my-auto'>
                  D
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-statusGreen my-auto mx-4'>{question.D}</p>
              </div>
            </div>
          )
        ) : null}
      </div>

      <div className='w-full my-4 flex flex-col mt-8'>
        <div className='w-auto flex'>
          <p className='w-1/5 mr-4 font-bold text-lg my-auto'>
            Difficulty Score:
          </p>
          <input
            type='range'
            min='0'
            max='10'
            step='0.01'
            className='w-full mr-5'
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
          ></input>
          <p className='w-1/12 my-auto'>{difficulty}</p>
        </div>
        <div className='w-auto flex mt-2'>
          <p className='w-1/5 mr-4 font-bold text-lg my-auto'>
            Acceptance Score:
          </p>
          <input
            type='range'
            min='0'
            max='100'
            step='0.01'
            className='w-full mr-5'
            value={acceptance}
            onChange={(e) => {
              setAcceptance(e.target.value);
            }}
          ></input>
          <p className='w-1/12 my-auto'>{acceptance}</p>
        </div>
      </div>

      <div className='flex mb-4 mt-8 w-full'>
        <button className='w-1/4 m-auto py-3 text-base text-white font-semibold rounded-md bg-primary '>
          Submit Review
        </button>
      </div>
    </div>
  );
};
