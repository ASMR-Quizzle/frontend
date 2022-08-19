import React, { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2022-08-21T18:20:00+05:30') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className='flex flex-col w-full fixed'>
      <div className='bg-statusOrange  ml-4 mr-auto rounded-md py-4 px-4 flex justify-evenly hover:cursor-pointer '>
        {/* <span className='my-auto text-2xl font-extrabold'></span> */}
        {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
          <p>
            <span className='text-xl font-extrabold'>{timeLeft.hours}</span>
            <span className='text-xl font-extrabold'>:</span>
            <span className='text-xl font-extrabold'>{timeLeft.minutes}</span>
            <span className='text-xl font-extrabold'>:</span>
            <span className='text-xl font-extrabold'>{timeLeft.seconds}</span>
          </p>
        ) : (
          <p>Time is up 🔥</p>
        )}
      </div>
    </div>
  );
};
