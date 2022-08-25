import { Fragment, useEffect, useRef, useState } from 'react';
import { MdClear, MdDelete } from 'react-icons/md';
import { Menu, Transition } from '@headlessui/react';

import { BsCheckLg } from 'react-icons/bs';
import { DeleteModal } from '../shared/delete-modal';
import { FiChevronDown } from 'react-icons/fi';

export const QuestionContainer = ({
  questionsList,
  setQuestionsList,
  questionIndex,
}) => {
  const [selectgrade, setSelectGrade] = useState('Select Grade');
  const [othergrade, setOtherGrade] = useState();
  const [selectsubject, setSelectSubject] = useState('Select Subject');
  const [othersubject, setOtherSubject] = useState();

  const grade = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    'UG',
    'PG',
    'PhD',
    'Other',
  ];

  const subjects = [
    'Hindi',
    'English',
    'History',
    'Geography',
    'Civics',
    'Maths',
    'Science',
    'Civics',
    'Information Communication',
    'Personality Development',
    'Other',
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const alphabets = ['A', 'B', 'C', 'D'];

  const sendArray = [];
  const sendData = () => {
    sendArray.push(selectgrade);
    sendArray.push(selectsubject);
    questionsList[questionIndex].tags.map((tag) => {
      sendArray.push(tag);
    });
  };

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
      <div className='flex items-end text-lg mt-4'>
        <p className='font-bold text-black mr-2 my-auto'>Grade:</p>
        <div className='flex'>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button className='inline-flex w-full justify-center rounded-md bg-primaryAccent px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                {selectgrade}
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
              <Menu.Items className='absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                <div className='px-1 py-1'>
                  {grade.map((topic, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-primary text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={() => {
                              setSelectGrade(topic);
                              setOtherGrade('');
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
          <div className='flex flex-row ml-5'>
            {selectgrade == 'Other' ? (
              <input
                type='text'
                className='bg-primaryAccent focus:outline-none text-sm text-primary p-1'
                placeholder='Other Grade'
                value={othergrade}
                onChange={(e) => {
                  setOtherGrade(e.target.value);
                }}
              ></input>
            ) : null}
          </div>
        </div>
      </div>
      <div className='flex items-end text-lg mt-4'>
        <p className='font-bold text-black mr-2 my-auto'>Subject:</p>
        <div className='flex'>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button className='inline-flex w-full justify-center rounded-md bg-primaryAccent px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                {selectsubject}
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
                  {subjects.map((topic, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-primary text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={() => {
                              setSelectSubject(topic);
                              setOtherSubject('');
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
          <div className='flex flex-row ml-5'>
            {selectsubject == 'Other' ? (
              <input
                type='text'
                className='bg-primaryAccent focus:outline-none text-sm text-primary p-1'
                value={othersubject}
                onChange={(e) => {
                  setOtherSubject(e.target.value);
                }}
                placeholder='Other Subject'
              ></input>
            ) : null}
          </div>
        </div>
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
                className='bg-primaryAccent focus:outline-none placeholder:font-medium placeholder-textSecondary p-1'
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
                  className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 my-4 px-8 focus:outline-none w-full'
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
