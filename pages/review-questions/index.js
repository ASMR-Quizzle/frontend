import { Fragment, useEffect, useRef, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { FiChevronDown } from 'react-icons/fi';
import { QuestionContainer } from '../../components/review-questions/questionContainer';
import { Sidebar } from '../../components/shared/sidebar';
import axiosInstance from '../../utils/axiosInstance';
import reviewQuestions from '../../data/reviewQuestions';

export default function Home() {
  const [selection, setSelection] = useState('All Topics');
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const handleSelection = (e) => {
    setSelection(e.target.value);
    setFilteredQuestions(
      reviewQuestions.filter(
        (question) =>
          question.topics.includes(e.target.value) &&
          !filteredQuestions.includes(question)
      )
    );
    if (selection == 'All Topics') {
      setFilteredQuestions(reviewQuestions);
      return;
    }
  };

  useEffect(() => {
    axiosInstance.get('/question/review').then((res) => {
      setReviewQuestions(res.data.data);
      setFilteredQuestions(res.data.data);
      console.log(res.data.data);
    });
    axiosInstance.get('/question/topics').then((res) => {
      setTopics(res.data.data);
      console.log(res.data.data);
    });
  }, [setReviewQuestions, setTopics]);

  return (
    <div className='w-full flex h-screen'>
      <Sidebar isActive={{ review_questions: true }} />
      <div className=' w-5/6 px-[141px] max-h-screen overflow-y-auto'>
        <div className='flex '>
          <p className='text-2xl subpixel-antialiased font-bold pt-4'>
            Review Questions
          </p>
        </div>
        <div className='flex items-end text-lg mt-4'>
          <p className='font-bold text-black mr-2 my-auto'>Filter:</p>
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
                  <Menu.Item value={'All Topics'}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-primary text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={(e) => {
                          handleSelection(e);
                        }}
                      >
                        All Topics
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className='px-1 py-1 '>
                  {topics.map((topic, index) => {
                    return (
                      <Menu.Item value={topic.name} key={topic.id}>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-primary text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={(e) => {
                              handleSelection(e);
                            }}
                          >
                            {topic.name}
                          </button>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {filteredQuestions.map((question, idx) => {
          return (
            <QuestionContainer
              key={question.id}
              questionIdx={idx}
              questions={filteredQuestions}
              setQuestion={setFilteredQuestions}
            />
          );
        })}
      </div>
    </div>
  );
}
