import { ProfileNavbar } from '../../components/shared/profile-navbar';
import { QuestionContainer } from '../../components/test/questionContainer';
import React from 'react';
import testQuestions from '../../data/testQuestions';
import { CountdownTimer } from '../../components/sub-components/countdown/CountdownTimer';

const ChooseRole = () => {
  return (
    <div>
      <CountdownTimer />
      <ProfileNavbar />

      <div className='w-full px-36 max-h-screen'>
        {testQuestions
          ? testQuestions.map((question, questionIndex) => {
              return (
                <QuestionContainer
                  key={question.id}
                  question={question}
                  questionIndex={questionIndex}
                />
              );
            })
          : null}
        <div className='flex justify-between'>
          <button className='w-full my-4 py-4 mr-2 text-base text-white font-semibold rounded-md bg-primary '>
            Submit Test
          </button>

          <button className='w-full my-4 py-4 ml-2 text-base text-white font-semibold rounded-md bg-statusRed'>
            End Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
