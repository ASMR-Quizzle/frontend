import React, { useState } from 'react';

import Link from 'next/link';
import { QuizzleLogo } from '../../utils/icon.export';
import { SelectionContainer } from '../../components/generate-qb/selectionContainer';
import testQuestions from '../../data/testQuestions';

const topicUnit = () => {
  return Object.assign(
    {},
    {
      topicName: '',
      grade,
      easy: 0,
      medium: 0,
      hard: 0,
      tags: [],
      removeTags: [],
    }
  );
};
const GenerateQb = () => {
  const [topicList, setTopicList] = useState([
    {
      topicName: '',
      easy: 0,
      medium: 0,
      hard: 0,
      tags: [],
      removeTags: [],
    },
  ]);
  const addTopic = () => {
    setTopicList([...topicList, topicUnit()]);
  };
  return (
    <div>
      <nav className='flex items-center justify-between flex-wrap p-5 font-primary w-full bg-white shadow-md'>
        <div className='flex items-center flex-shrink-0 mr-6 '>
          <img src={QuizzleLogo.src} />
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='ml-auto'>
            <Link href={'/home'}>
              <a
                href='#'
                className='inline-block font-primary text-lg font-semibold lg:px-8 lg:py-2 px-6 py-2 bg-primary rounded-lg text-white mt-4 lg:mt-0'
              >
                Logout
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div className='w-full px-36 max-h-screen'>
        {topicList.map((elem, index) => {
          return (
            <SelectionContainer
              key={index}
              topicList={topicList}
              setTopicList={setTopicList}
              topicIndex={index}
            />
          );
        })}

        <div className='flex justify-between mt-5 pb-4'>
          <button
            className='w-[49%] py-4 text-base text-primary font-semibold rounded-md bg-primaryAccent'
            onClick={addTopic}
          >
            Add Topic
          </button>
          <button className='w-[49%] py-4 text-base text-white font-semibold rounded-md bg-primary '>
            Generate Question Bank
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateQb;
