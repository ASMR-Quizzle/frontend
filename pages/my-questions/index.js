import { QuestionContainer } from '../../components/my-questions/questionContainer';
import React from 'react';
import { Sidebar } from '../../components/shared/sidebar';
import { Tab } from '@headlessui/react';
import axiosInstance from '../../utils/axiosInstance';
import questionsList from '../../data/questionsList.js';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function MyQuestions() {
  const [myQuestions, setMyQuestions] = React.useState([]);
  const [myReviewQuestions, setMyReviewQuestions] = React.useState([]);

  React.useEffect(() => {
    axiosInstance
      .get('/question/set')
      .then((res) => {
        setMyQuestions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance
      .get('/question/reviewer/list')
      .then((res) => {
        setMyReviewQuestions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setMyQuestions, setMyReviewQuestions]);

  return (
    <div className='w-full flex h-screen'>
      <Sidebar isActive={{ my_questions: true }} />
      <div className='w-5/6 px-[141px]  max-h-screen overflow-y-auto'>
        <p className='text-2xl subpixel-antialiased font-bold pt-4'>
          My Questions
        </p>

        <Tab.Group>
          <Tab.List className='flex mt-4 space-x-1 rounded-xl bg-primaryAccent p-1'>
            <Tab
              key='reviewer'
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                  selected
                    ? 'bg-primary text-white shadow'
                    : 'text-black bg-primaryAccent'
                )
              }
            >
              Reviewer
            </Tab>
            <Tab
              key='setter'
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                  selected
                    ? 'bg-primary text-white shadow'
                    : 'text-black bg-primaryAccent'
                )
              }
            >
              Setter
            </Tab>
          </Tab.List>
          <Tab.Panels className='mt-2'>
            <Tab.Panel
              key='reviewer'
              className={classNames(
                'rounded-xl bg-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none'
              )}
            >
              {myReviewQuestions &&
                myReviewQuestions.map((question) => (
                  <QuestionContainer key={question.id} question={question} />
                ))}
            </Tab.Panel>
            <Tab.Panel
              key='setter'
              className={classNames(
                'rounded-xl bg-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none'
              )}
            >
              {myQuestions &&
                myQuestions.map((question) => (
                  <QuestionContainer key={question.id} question={question} />
                ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
