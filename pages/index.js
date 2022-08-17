import { useState, useEffect } from 'react';
import {
  AddQuestionPNG,
  CrossPNG,
  DarkCheckPNG,
  LightCheckPNG,
  LogoPNG,
  LogoutPNG,
  MyQuestionsPNG,
  ProfilePNG,
  SettingsPNG,
} from '../utils/icon.export.js';

// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { QuestionContainer } from '../components/add-questions/questionContainer.js';

export default function Home() {
  useEffect(() => {
    if (questionsList.length == 0) {
      addQuestion();
    }
  }, []);
  const [{ questionsList }, setQuestionsList] = useState({
    questionsList: [],
  });
  const addQuestion = () => {
    questionsList.push(<QuestionContainer key={questionsList.length} />);
    setQuestionsList({ questionsList: [...questionsList] });
    console.log(questionsList);
  };

  return (
    <div className='w-full flex'>
      <div className=' w-1/6 bg-surfacePrimary h-screen'>
        <div>
          <img src={LogoPNG.src} className='mx-auto mt-10' />
        </div>
        <div className='mt-16'>
          <ul className='list-none '>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={ProfilePNG.src} alt='profile' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  Profile
                </div>
              </div>
            </li>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={AddQuestionPNG.src} alt='add_question' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  Add Question
                </div>
              </div>
            </li>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={MyQuestionsPNG.src} alt='my_quesiton' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  My Questions
                </div>
              </div>
            </li>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={SettingsPNG.src} alt='settings' />
                </div>
                <div className='font-normal text-textPrimary text-xl my-auto'>
                  Settings
                </div>
              </div>
            </li>
            <li>
              <div className='flex borer-2 cursor-pointer hover:bg-primaryAccent p-4'>
                <div className='mr-4 w-8'>
                  <img src={LogoutPNG.src} alt='login' />
                </div>
                <div className='font-normal text-textPrimary text-xl'>
                  Logout
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=' w-5/6 h-screen px-[141px] my-4'>
        <p className='text-2xl subpixel-antialiased font-bold'>Add Questions</p>
        {questionsList}
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
