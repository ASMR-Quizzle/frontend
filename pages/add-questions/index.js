import { useEffect, useState } from 'react';

import { QuestionContainer } from '../../components/add-questions/questionContainer.js';
import { Sidebar } from '../../components/shared/sidebar';
import axiosInstance from '../../utils/axiosInstance';

const questionUnit = () => {
  return Object.assign(
    {},
    {
      tags: [],
      description: '',
      subject: 'Select Subject',
      grade: 'Select Grade',
      board: 'Select Board',
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
      subject: 'Select Subject',
      grade: 'Select Grade',
      board: 'Select Board',
      options: ['', ''],
      answer: -1,
    },
  ]);

  useEffect(() => {
    console.log(questionsList);
  }, [questionsList]);

  const [newQuestionsList, setNewQuestionsList] = useState([
    {
      topics: [],
      question: '',
      A: '',
      B: '',
      C: '',
      D: '',
      answer: '',
      difficulty_score: 0,
      explanation: '',
    },
  ]);

  const convertQuestionsList = () => {
    questionsList.map((question, index) => {
      newQuestionsList[index].topics.push(question.subject);
      newQuestionsList[index].topics.push(question.grade);
      newQuestionsList[index].topics.push(question.board);
      question.tags.forEach((tag) => {
        newQuestionsList[index].topics.push(tag);
      });
      newQuestionsList[index].question = question.description;
      newQuestionsList[index].A = question.options[0] ?? '';
      newQuestionsList[index].B = question.options[1] ?? '';
      newQuestionsList[index].C = question.options[2] ?? '';
      newQuestionsList[index].D = question.options[3] ?? '';
      if (question.answer === 0) newQuestionsList[index].answer = 'A';
      else if (question.answer === 1) newQuestionsList[index].answer = 'B';
      else if (question.answer === 2) newQuestionsList[index].answer = 'C';
      else if (question.answer === 3) newQuestionsList[index].answer = 'D';
      else newQuestionsList[index].answer = '';
    });

    newQuestionsList.map((q) => {
      console.log(q);
    });
  };

  const submitQuestions = () => {
    convertQuestionsList();
    newQuestionsList.map((question) => {
      axiosInstance
        .post('/question/set', question)
        .then((res) => {
          setQuestionsList([
            {
              tags: [],
              description: '',
              subject: '',
              grade: '',
              options: ['', ''],
              answer: -1,
            },
          ]);

          setNewQuestionsList([
            {
              topics: [],
              question: '',
              A: '',
              B: '',
              C: '',
              D: '',
              answer: '',
              difficulty_score: 0,
              explanation: '',
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
          alert('A similar already exists!');
        });
    });
  };

  const addQuestion = () => {
    setQuestionsList([...questionsList, questionUnit()]);
  };

  return (
    <div className='w-full flex h-screen'>
      <Sidebar isActive={{ add_question: true }} />
      <div className=' w-5/6 px-[141px]  max-h-screen overflow-y-auto'>
        <p className='text-2xl subpixel-antialiased font-bold pt-4'>
          Add Questions
        </p>

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
        <div className='flex justify-between mt-5 pb-4'>
          <button
            className='w-[49%] py-4 text-base text-primary font-semibold rounded-md bg-primaryAccent '
            onClick={addQuestion}
          >
            Add Question
          </button>
          <button
            onClick={submitQuestions}
            className='w-[49%] py-4 text-base text-white font-semibold rounded-md bg-primary '
          >
            Submit Questions
          </button>
        </div>
      </div>
    </div>
  );
}
