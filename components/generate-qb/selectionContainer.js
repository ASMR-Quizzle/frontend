import { ActionMeta, OnChangeValue } from 'react-select';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

import CreatableSelect from 'react-select/creatable';
import { FiChevronDown } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

export const SelectionContainer = ({ topicList, setTopicList, topicIndex }) => {
  const topics = [
    'Physics',
    'Chemistry',
    'Biology',
    'Mathematics',
    'Hindi',
    'English',
    'History',
    'Geography',
    'Civics',
    'Science',
    'Civics',
    'Information Communication',
    'Personality Development',
    'Other',
  ];
  const grade = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    'UG',
    'PG',
    'PhD',
    'Other',
  ];
  const [selection, setSelection] = useState('Select a Topic');
  const [gradeSelection, setGradeSelection] = useState('Select a Grade');

  const available = {
    easy: 120,
    medium: 90,
    hard: 30,
  };

  const options = [];

  axios
    .get('http://localhost:8000/question/topics')
    .then((res) => {
      res.data.data.map((option) => {
        if (option.question_count > 0) {
          options.push({ value: option.id, label: option.name });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });

  const addTags = () => {
    console.log(topicList);
    if (
      topicList[topicIndex].tags.length === 0 ||
      topicList[topicIndex].tags[topicList[topicIndex].tags.length - 1] !== ''
    ) {
      topicList[topicIndex].tags.push('');
      setTopicList([...topicList]);
    }
  };
  const addRemoveTags = () => {
    console.log(topicList);
    if (
      topicList[topicIndex].removeTags.length === 0 ||
      topicList[topicIndex].removeTags[
        topicList[topicIndex].removeTags.length - 1
      ] !== ''
    ) {
      topicList[topicIndex].removeTags.push('');
      setTopicList([...topicList]);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(value);
    console.log(name);
    const index = e.target.getAttribute('index');
    if (
      topicList[topicIndex][name] === 'easy' ||
      topicList[topicIndex][name] === 'medium' ||
      topicList[topicIndex][name] === 'hard'
    ) {
      topicList[topicIndex][name] == value;
    }
    //else {
    //   topicList[topicIndex][name][index] = value;
    // }

    console.log(topicList[topicIndex][name]);
    setTopicList([...topicList]);
  };

  const onAddTagsChange = (e) => {
    let topics = Array.from(e.map((o) => o.label));
    topicList[topicIndex].tags = topics;
    setTopicList([...topicList]);
  };

  const onExcludeTagsChange = (e) => {
    let topics = Array.from(e.map((o) => o.label));
    topicList[topicIndex].removeTags = topics;
    setTopicList([...topicList]);
  };

  return (
    <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4 flex flex-col'>
      <div className='flex mb-2'>
        <div className='flex justify-between'>
          <label className='block my-auto mb-2 mr-2 text-sm font-medium text-black'>
            Topic:
          </label>
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
              <Menu.Items className='absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                <div className='px-1 py-1 '>
                  {topics.map((topic, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-primary text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={() => {
                              setSelection(topic);
                            }}
                          >
                            {topic}
                          </button>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <label
            className='block my-auto mb-2 mr-2 text-sm font-medium text-black ml-8'
            htmlFor='easy'
          >
            Grade:
          </label>
          <Menu as='div' className='relative inline-block text-left '>
            <div>
              <Menu.Button className='inline-flex w-full justify-center rounded-md bg-primaryAccent px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                {gradeSelection}
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
              <Menu.Items className='absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                <div className='px-1 py-1 '>
                  {grade.map((g, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-primary text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={() => {
                              setGradeSelection(g);
                            }}
                          >
                            {g}
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
        <MdDelete
          className='ml-auto h-6 w-6 text-statusRed cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 my-auto'
          onClick={() => {
            topicList.splice(topicIndex, 1);
            setTopicList([...topicList]);
          }}
        />
      </div>
      <div>
        <label className='my-auto mb-2 mr-2 text-sm font-medium text-black'>
          Tags to be added:
        </label>
        <CreatableSelect
          isMulti
          options={options}
          isValidNewOption={() => false}
          onChange={onAddTagsChange}
        />
        {/* {topicList[topicIndex].tags &&
          topicList[topicIndex].tags.map((ele, i) => {
            return (
              <button
                key={i}
                className='p-1 min-w-fit bg-primaryAccent text-primary rounded-md mt-2 mr-2'
              >
                <input
                  type='text'
                  name='tags'
                  index={i}
                  className='bg-primaryAccent focus:outline-none placeholder:font-medium placeholder-textSecondary'
                  onChange={handleChange}
                  value={topicList[topicIndex].tags[i]}
                  placeholder='Enter Tag'
                />
                <span
                  className='text-lg font-semibold ml-2 rounded-full'
                  onClick={() => {
                    topicList[topicIndex].tags.splice(i, 1);
                    setTopicList([...topicList]);
                  }}
                >
                  x
                </span>
              </button>
            );
          })}
        <button
          className='p-1 ml-2 bg-primaryAccent text-primary rounded-md mt-2 focus:outline-none'
          onClick={addTags}
        >
          <span className='text-lg font-semibold '>+</span> Add Tag
        </button> */}
      </div>
      <div>
        <label className='my-auto mb-2 mr-2 text-sm font-medium text-black'>
          Excluded Tags:
        </label>
        <CreatableSelect
          isMulti
          options={options}
          isValidNewOption={() => false}
          onChange={onExcludeTagsChange}
        />
        {/* {topicList[topicIndex].removeTags &&
          topicList[topicIndex].removeTags.map((ele, i) => {
            return (
              <button
                key={i}
                className='p-1 min-w-fit bg-statusRedAccent text-statusRed rounded-md mt-2 mr-2'
              >
                <input
                  type='text'
                  name='removeTags'
                  index={i}
                  className='bg-statusRedAccent focus:outline-none placeholder:font-medium placeholder-textSecondary'
                  onChange={handleChange}
                  value={topicList[topicIndex].removeTags[i]}
                  placeholder='Enter Tag'
                />
                <span
                  className='text-lg font-semibold ml-2 rounded-full'
                  onClick={() => {
                    topicList[topicIndex].removeTags.splice(i, 1);
                    setTopicList([...topicList]);
                  }}
                >
                  x
                </span>
              </button>
            );
          })}
        <button
          className='p-1 ml-2 bg-statusRedAccent text-statusRed rounded-md mt-2 focus:outline-none'
          onClick={addRemoveTags}
        >
          <span className='text-lg font-semibold '>+</span> Add Tag
        </button> */}
      </div>
      <div className='flex mt-8'>
        <div className='flex-1 mr-4'>
          <label
            className='block mb-2 text-sm font-medium text-black'
            htmlFor='easy'
          >
            {`No. of Easy Questions (Available: ${available.easy})`}
          </label>
          <input
            id='easy'
            className='bg-white text-textPrimary text-sm rounded-lg block w-full p-2 placeholder-slate-500-400'
            type='number'
            name='easy'
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className='flex-1 mr-4'>
          <label
            className='block mb-2 text-sm font-medium text-black'
            htmlFor='medium'
          >
            {`No. of Medium Questions (Available: ${available.medium})`}
          </label>
          <input
            id='medium'
            className='bg-white text-textPrimary text-sm rounded-lg block w-full p-2 placeholder-slate-500-400 '
            required
            type='number'
            name='medium'
            onChange={handleChange}
          ></input>
        </div>
        <div className='flex-1'>
          <label
            className='block mb-2 text-sm font-medium text-black'
            htmlFor='hard'
          >
            {`No. of Hard Questions (Available: ${available.hard})`}
          </label>
          <input
            id='hard'
            className='bg-white text-textPrimary text-sm rounded-lg block w-full p-2 placeholder-slate-500-400 '
            required
            name='hard'
            type='number'
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </div>
  );
};
