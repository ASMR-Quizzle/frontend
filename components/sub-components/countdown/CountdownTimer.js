import React from 'react';

export const CountdownTimer = ({ testEndTime }) => {
  return (
    <div>
      <span className='countdown font-mono text-2xl'>
        <span style={{ '--value': 10 }}></span>:
        <span style={{ '--value': 24 }}></span>:
        <span style={{ '--value': 42 }}></span>
      </span>
    </div>
  );
};
