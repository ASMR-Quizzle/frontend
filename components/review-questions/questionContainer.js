import React, { useState } from 'react';

import axiosInstance from '../../utils/axiosInstance';

//A card which iterates

export const QuestionContainer = ({ questionIdx, questions, setQuestion }) => {
  const onSubmitReview = () => {
    axiosInstance
      .post('/question/review', questions[questionIdx])
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4'>
      <div className='flex'>
        <div className='text-xl font-bold '>{`Question ID ${questions[questionIdx].id} `}</div>
      </div>
      <div className='flex flex-wrap space-x-2 space-y-2'>
        {questions[questionIdx].topics.map((topic, idx) => {
          return (
            <span className='bg-primaryAccent text-primary rounded-md mt-2 focus:outline-none placeholder-textSecondary placeholder:italic py-2 px-4 min-w-fit' key={idx}>
              {topic}
            </span>
          );
        })}
      </div>
      <p className='py-4 w-[100%] grow text-textPrimary'>
        {questions[questionIdx].question}
      </p>

      <div className='flex flex-col spacing-y-2'>
        {questions[questionIdx].A ? (
          questions[questionIdx].answer !== 'A' ? (
            <div className='flex flex-row'>
              <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg font-semibold my-auto'>
                  A
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-textPrimary my-auto mx-4'>
                  {questions[questionIdx].A}
                </p>
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
                <p className='text-statusGreen my-auto mx-4'>
                  {questions[questionIdx].A}
                </p>
              </div>
            </div>
          )
        ) : null}
        {questions[questionIdx].B ? (
          questions[questionIdx].answer !== 'B' ? (
            <div className='flex flex-row mt-4'>
              <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg font-semibold my-auto'>
                  B
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-textPrimary my-auto mx-4'>
                  {questions[questionIdx].B}
                </p>
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
                <p className='text-statusGreen my-auto mx-4'>
                  {questions[questionIdx].B}
                </p>
              </div>
            </div>
          )
        ) : null}
        {questions[questionIdx].C ? (
          questions[questionIdx].answer !== 'C' ? (
            <div className='flex flex-row mt-4'>
              <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg font-semibold my-auto'>
                  C
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-textPrimary my-auto mx-4'>
                  {questions[questionIdx].C}
                </p>
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
                <p className='text-statusGreen my-auto mx-4'>
                  {questions[questionIdx].C}
                </p>
              </div>
            </div>
          )
        ) : null}
        {questions[questionIdx].D ? (
          questions[questionIdx].answer !== 'D' ? (
            <div className='flex flex-row mt-4'>
              <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                <div className='w-full text-center text-lg font-semibold my-auto'>
                  D
                </div>
              </div>
              <div className='flex-grow flex'>
                <p className='text-textPrimary my-auto mx-4'>
                  {questions[questionIdx].D}
                </p>
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
                <p className='text-statusGreen my-auto mx-4'>
                  {questions[questionIdx].D}
                </p>
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
            value={questions[questionIdx].difficulty_score}
            onChange={(e) => {
              questions[questionIdx].difficulty_score = e.target.value;
              setQuestion([...questions]);
            }}
          ></input>
          <p className='w-1/12 my-auto'>
            {questions[questionIdx].difficulty_score}
          </p>
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
            value={questions[questionIdx].acceptance_score}
            onChange={(e) => {
              questions[questionIdx].acceptance_score = e.target.value;
              setQuestion([...questions]);
            }}
          ></input>
          <p className='w-1/12 my-auto'>
            {questions[questionIdx].acceptance_score}
          </p>
        </div>
      </div>
      <label
        htmlFor='reviewer_notes'
        className='my-auto mb-2 mr-2 text-sm font-medium text-black'
      >
        Reviewer Notes:
      </label>
      <textarea
        id={'reviewer_notes'}
        className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 my-4 py-4 px-8 w-[100%] rounded-md resize-y grow '
        rows={5}
        onChange={(e) => {
          questions[questionIdx].reviewer_notes = e.target.value;
          setQuestion([...questions]);
        }}
        name='description'
        value={questions[questionIdx].reviewer_notes}
      ></textarea>

      <div className='flex mb-4 mt-8 w-full'>
        <button
          onClick={onSubmitReview}
          className='w-1/4 m-auto py-3 text-base text-white font-semibold rounded-md bg-primary '
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};
