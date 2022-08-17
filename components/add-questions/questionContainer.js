import { MdClear, MdDelete } from 'react-icons/md';
import React, { useState } from 'react';

import { BsCheckLg } from 'react-icons/bs';
import { DeleteModal } from '../shared/delete-modal';

export const QuestionContainer = ({
  questionsList,
  setQuestionsList,
  questionIndex,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const alphabets = ['A', 'B', 'C', 'D'];

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const index = e.target.getAttribute('index');

    if (name === 'description' || name === 'answer') {
      questionsList[questionIndex][name] = value;
    } else {
      questionsList[questionIndex][name][index] = value;
    }
    console.log(questionsList[questionIndex][name]);
    setQuestionsList([...questionsList]);
  };
  const addTags = () => {
    if (
      questionsList[questionIndex].tags.length === 0 ||
      questionsList[questionIndex].tags[
        questionsList[questionIndex].tags.length - 1
      ] !== ''
    ) {
      questionsList[questionIndex].tags.push('');
      setQuestionsList([...questionsList]);
    }
  };

  const addOption = () => {
    questionsList[questionIndex]['options'].push('');
    setQuestionsList([...questionsList]);
  };

  return (
    <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4'>
      {modalIsOpen ? (
        <DeleteModal
          questionsList={questionsList}
          setQuestionsList={setQuestionsList}
          questionIndex={questionIndex}
          toggleModal={toggleModal}
          modalIsOpen={modalIsOpen}
        />
      ) : null}
      <div className='flex justify-between'>
        <div className='text-xl font-bold '>
          {`Question ${questionIndex + 1} `}
        </div>
        <MdDelete
          className='h-6 w-6 text-statusRed cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 my-auto'
          onClick={toggleModal}
        />
      </div>
      <div className='flex flex-wrap space-x-2 space-y-2'>
        {questionsList[questionIndex].tags.map((ele, i) => {
          return (
            <button
              key={i}
              className='py-2 px-4 min-w-fit bg-primaryAccent text-primary rounded-md mt-2'
            >
              <input
                type='text'
                name='tags'
                index={i}
                className='bg-primaryAccent focus:outline-none placeholder-textSecondary placeholder:italic p-1'
                onChange={handleChange}
                value={questionsList[questionIndex].tags[i]}
                placeholder='Enter Tag'
              />
              <span
                className='text-lg font-semibold ml-2 rounded-full'
                onClick={() => {
                  questionsList[questionIndex].tags.splice(i, 1);
                  setQuestionsList([...questionsList]);
                }}
              >
                x
              </span>
            </button>
          );
        })}
        <button
          className='py-2 px-4 bg-primaryAccent text-primary rounded-md mt-2 focus:outline-none'
          onClick={addTags}
        >
          <span className='text-lg font-semibold '>+</span> Add Tags
        </button>
      </div>
      <textarea
        className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 my-4 py-4 px-8 w-[100%] rounded-md resize-y grow '
        rows={5}
        placeholder='Add your question here'
        onChange={handleChange}
        name='description'
        value={questionsList[questionIndex].description}
      ></textarea>
      {questionsList[questionIndex].options.map((ele, i) => {
        return (
          <div key={i}>
            <div className='flex mb-4'>
              <span className='my-auto mr-4 text-lg font-semibold '>
                {alphabets[i]}
              </span>
              <div className='bg-white flex w-full justify-between rounded-[10px]'>
                <input
                  className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 my-4 px-8 focus:outline-none'
                  placeholder={`Option ${alphabets[i]}`}
                  name='options'
                  index={i}
                  onChange={handleChange}
                  value={questionsList[questionIndex].options[i]}
                ></input>
                <div className='flex mr-2'>
                  {questionsList[questionIndex].answer === i ? (
                    <div
                      className='h-10 w-10 bg-statusGreen rounded-md my-auto mr-2'
                      onClick={() => {
                        questionsList[questionIndex].answer = -1;
                        setQuestionsList([...questionsList]);
                      }}
                    >
                      <BsCheckLg className='mx-auto h-5 w-5 my-[0.6rem] text-statusGreenAccent hover:cursor-pointer' />
                    </div>
                  ) : (
                    <div
                      className='h-10 w-10 bg-statusGreenAccent rounded-md my-auto mr-2'
                      onClick={() => {
                        questionsList[questionIndex].answer = i;
                        setQuestionsList([...questionsList]);
                      }}
                    >
                      <BsCheckLg className='mx-auto h-5 w-5 my-[0.6rem] text-statusGreen hover:cursor-pointer' />
                    </div>
                  )}
                  <MdClear
                    className='my-auto h-8 w-8 hover:cursor-pointer'
                    onClick={() => {
                      questionsList[questionIndex].options.splice(i, 1);
                      if (questionsList[questionIndex].answer === i) {
                        questionsList[questionIndex].answer = -1;
                      }
                      setQuestionsList([...questionsList]);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {questionsList[questionIndex].options.length >=
      alphabets.length ? null : (
        <div
          className='mt-4 text-primary font-semibold flex justify-end space-x-2 cursor-pointer'
          onClick={addOption}
        >
          <span className='text-lg '>+</span>{' '}
          <span className='my-auto'>Add Option</span>
        </div>
      )}
    </div>
  );
};
