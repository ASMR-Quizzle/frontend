import React, { useState } from 'react';
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
} from '../../utils/icon.export';

export const QuestionContainer = () => {
  const [tags, setTags] = useState([]);
  const [tagData, setTagData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTagData((tagData) => ({
      ...tagData,
      [name]: value,
    }));
    // use useMemo Cool!  };
  };
  const addTags = () => {
    tags.push(
      <button
        key={tags.length}
        className='py-2 px-4 bg-primaryAccent text-primary rounded-md mt-2'
      >
        <input
          type='text'
          name={tags.length}
          className='bg-primaryAccent'
          onChange={(e) => handleChange(e)}
          value={tagData[tags.length]}
        />
        <span className='text-lg font-semibold ml-2 rounded-full'>x</span>
      </button>
    );
    setTags([...tags]);
  };

  return (
    <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4'>
      <p className='text-xl subpixel-antialiased font-bold '>
        This is an example question
      </p>
      <div className='flex flex-wrap space-x-2 space-y-2'>
        {tags.map((i) => {
          return i;
        })}
        <button
          className='py-2 px-4 bg-primaryAccent text-primary rounded-md mt-2'
          onClick={addTags}
        >
          <span className='text-lg font-semibold '>+</span> Add Tags
        </button>
      </div>
      <input
        className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 my-4 py-4 px-8 w-[100%] rounded-md'
        placeholder='Add a description here....'
      ></input>
      <div className='flex '>
        <span className='my-auto mr-4 text-lg font-semibold '>A</span>
        {/* <div className='w-full'> */}
        <div className='bg-white flex w-full justify-between rounded-[10px]'>
          <input
            className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 my-4 px-8 '
            placeholder='Option A'
          ></input>
          <div className='flex mr-6'>
            <img src={LightCheckPNG.src} className='my-auto mr-4' />
            <img src={CrossPNG.src} className='my-auto' />
          </div>
        </div>
      </div>
      <div className='mt-4 text-primary font-semibold flex justify-end space-x-2'>
        <span className='text-lg '>+</span>{' '}
        <span className='my-auto'>Add Option</span>
      </div>
    </div>
  );
};
