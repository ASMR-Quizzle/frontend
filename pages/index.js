import { QuestionContainer } from '../components/add-questions/questionContainer.js';
import { Sidebar } from '../components/shared/sidebar';
import { useState } from 'react';

const questionUnit = () => {
  return Object.assign(
    {},
    {
      tags: [],
      description: '',
      options: ['', ''],
      answer: -1,
    }
  );
};

export default function Home() {
  const [questionsList, setQuestionsList] = useState([
    {
      tags: [],
      description: '',
      options: ['', ''],
      answer: -1,
    },
  ]);
  const addQuestion = () => {
    setQuestionsList([...questionsList, questionUnit()]);
  };

  return (
    <div className='w-full flex h-screen'>
      <Sidebar />
      <div className=' w-5/6 h-screen px-[141px] my-4'>
        <p className='text-2xl subpixel-antialiased font-bold'>Add Questions</p>

        {questionsList.map((elem, index) => {
          return (
            <QuestionContainer
              key={index}
              setQuestionsList={setQuestionsList}
              questionsList={questionsList}
              questionIndex={index}
            />
          );
        })}
        <div className='flex justify-between mt-5'>
          <button
            className='w-[49%] py-4 text-base text-primary font-semibold rounded-md bg-primaryAccent '
            onClick={addQuestion}
          >
            Add Question
          </button>
          <button className='w-[49%] py-4 text-base text-white font-semibold rounded-md bg-primary '>
            Submit Questions
          </button>
        </div>
      </div>
    </div>
  );
}
