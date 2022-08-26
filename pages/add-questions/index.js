import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import { MdCloudUpload } from 'react-icons/md';
import Papa from 'papaparse';
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
  const success = (msg) => toast.success(msg);
  const error = (msg) => toast.error(msg);
  const [dedup, setDedup] = useState(false);
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

  const [csvFile, setCsvFile] = useState(null);

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
          success('Questions submitted successfully');
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
          error(
            'Error occured while submitting question, please check all fields'
          );
        });
    });
  };

  const addQuestion = () => {
    setQuestionsList([...questionsList, questionUnit()]);
  };

  const onFileChange = (event) => {
    setCsvFile(event.target.files[0]);
    // Papa.parse(event.target.files[0], {
    //   complete: (results) => {
    //     console.log(results.data[0][0]);
    //     questionsList = [];
    //     for (let i = 1; i < results.data.length; i++) {
    //       questionsList.push({
    //         question: results.data[i][0],
    //         options: [
    //           results.data[i][1],
    //           results.data[i][2],
    //           results.data[i][3],
    //           results.data[i][4],
    //         ],
    //         answer: () => {
    //           if (results.data[i][5] === 'A') return 0;
    //           else if (results.data[i][5] === 'B') return 1;
    //           else if (results.data[i][5] === 'C') return 2;
    //           else if (results.data[i][5] === 'D') return 3;
    //         },
    //         tags: results.data[i][7],
    //         grade: '',
    //         subject: '',
    //       });
    //     }

    //     setQuestionsList([...questionsList]);
    //   },
    // });
  };

  const uploadCSV = () => {
    const formData = new FormData();
    formData.append('file', csvFile, csvFile.name);
    console.log(csvFile);
    axiosInstance
      .post('/question/bulk', formData)
      .then((res) => {
        console.log(res.data);
        if (res.status > 199 && res.status < 300) {
          toast.success('Successfully Uploaded CSV data!');
        }
      })
      .catch((err) => {
        toast.error('An error occured while uploading the CSV');
        console.log(err);
      });
  };

  return (
    <div className='w-full flex h-screen'>
      <Sidebar isActive={{ add_question: true }} />
      <div className=' w-5/6 px-[141px] max-h-screen overflow-y-auto mt-6'>
        <div className='w-full flex flex-row align-middle'>
          <p className='text-2xl subpixel-antialiased font-bold pt-4'>
            Add Questions
          </p>
          <div className='ml-auto my-auto align-middle flex flex-row'>
            <input
              className='ml-auto my-auto'
              type='file'
              onChange={onFileChange}
            />
            <button
              onClick={() => {
                uploadCSV();
              }}
            >
              <div className='rounded-full p-4 shadow-lg shadow-slate-300 bg-slate-50'>
                <MdCloudUpload className='text-primary h-10 w-10' />
              </div>
            </button>
          </div>
        </div>

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
      <ToastContainer />
    </div>
  );
}
