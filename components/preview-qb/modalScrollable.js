import 'katex/dist/katex.min.css';

import { BlockMath, InlineMath } from 'react-katex';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

import Latex from 'react-latex-next';
import React from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';

export const ModalScrollable = ({ data, toggleModal, modalIsOpen }) => {
  const [checked, setChecked] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchState, setSearchState] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      checked.push(true);
    }
    setChecked([...checked]);
  }, []);

  return (
    <Transition appear show={modalIsOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={toggleModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed min-h-fit inset-0 flex items-center justify-center p-4 '>
          {/* Container to center the panel */}
          <div className='flex items-center justify-center'>
            {/* The actual dialog panel  */}

            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='transform max-h-screen rounded-2xl bg-white p-6 shadow-xl transition-all overflow-scroll mx-auto min-w-fit'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Generated Question Bank Preview!
                </Dialog.Title>
                {console.log(isFiltered)}
                {isFiltered === false ? (
                  <div className='overflow-y-auto'>
                    <div>
                      <input
                        className='p-2 mt-2'
                        p
                        value={input}
                        onChange={(e) => {}}
                      />{' '}
                    </div>
                    {data.map((ele, i) => {
                      return (
                        <div className='flex flex-row space-x-4' key={i}>
                          <input
                            type='checkbox'
                            checked={checked[i]}
                            value={checked[i]}
                            onChange={() => {
                              checked[i] = !checked[i];
                              setChecked([...checked]);
                            }}
                          />
                          <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4 w-full'>
                            <div className='flex justify-between'>
                              <div className='text-xl font-bold '>{`Question ID ${data[i].id} `}</div>
                            </div>

                            <p className='py-4 w-[100%] grow text-textPrimary'>
                              <Latex>{data[i].question}</Latex>
                            </p>
                            <div className='flex flex-row'>
                              <div className='flex flex-row w-1/2'>
                                <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                                  <div className='w-full text-center text-lg font-semibold my-auto'>
                                    A
                                  </div>
                                </div>
                                {/* <div className=''> */}
                                <p className='text-textPrimary my-auto mx-4'>
                                  <Latex>
                                    {data[i].A.startsWith('\\(')
                                      ? data[i].A + ')'
                                      : data[i].A}
                                  </Latex>
                                </p>
                              </div>
                              {/* </div> */}
                              <div className='flex flex-row w-1/2'>
                                <div className='bg-white h-12 w-12 rounded-md mr-4 flex '>
                                  <div className='w-full text-center text-lg font-semibold my-auto'>
                                    B
                                  </div>
                                </div>
                                {/* <div className='flex-grow flex'> */}
                                <p className='text-textPrimary my-auto mx-4'>
                                  <Latex>
                                    {data[i].B.startsWith('\\(')
                                      ? data[i].B + ')'
                                      : data[i].B}
                                  </Latex>
                                </p>
                                {/* </div> */}
                              </div>
                            </div>
                            <div className='flex flex-row mt-2'>
                              <div className='flex flex-row w-1/2'>
                                <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                                  <div className='w-full text-center text-lg font-semibold my-auto'>
                                    C
                                  </div>
                                </div>
                                {/* <div className=''> */}
                                <p className='text-textPrimary my-auto mx-4'>
                                  <Latex>
                                    {data[i].C.startsWith('\\(')
                                      ? data[i].C + ')'
                                      : data[i].C}
                                  </Latex>
                                </p>
                              </div>
                              {/* </div> */}
                              <div className='flex flex-row w-1/2'>
                                <div className='bg-white h-12 w-12 rounded-md mr-4 flex '>
                                  <div className='w-full text-center text-lg font-semibold my-auto'>
                                    D
                                  </div>
                                </div>
                                {/* <div className='flex-grow flex'> */}
                                <p className='text-textPrimary my-auto mx-4'>
                                  <Latex>
                                    {data[i].D.startsWith('\\(')
                                      ? data[i].D + ')'
                                      : data[i].D}
                                  </Latex>
                                </p>
                                {/* </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <button
                      className='rounded-lg relative flex items-center justify-center px-3.5 py-2 cursor-pointer bg-primary text-white w-full'
                      onClick={() => {
                        setIsFiltered(true);
                      }}
                    >
                      Generate Question Bank
                    </button>
                  </div>
                ) : (
                  <div className='overflow-y-auto'>
                    <div id='pdf-element'>
                      {data.map((ele, i) => {
                        return checked[i] ? (
                          <div className='flex flex-row space-x-4' key={i}>
                            <div className='bg-surfacePrimary rounded-md px-8 py-4 my-4 w-full'>
                              <div className='flex justify-between'>
                                <div className='text-xl font-bold '>{`Question ID ${data[i].id} `}</div>
                              </div>

                              <p className='py-4 w-[100%] grow text-textPrimary'>
                                <Latex>{data[i].question}</Latex>
                              </p>
                              <div className='flex flex-row'>
                                <div className='flex flex-row w-1/2'>
                                  <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                                    <div className='w-full text-center text-lg font-semibold my-auto'>
                                      A
                                    </div>
                                  </div>
                                  {/* <div className=''> */}
                                  <p className='text-textPrimary my-auto mx-4'>
                                    <Latex>
                                      {data[i].A.startsWith('\\(')
                                        ? data[i].A + ')'
                                        : data[i].A}
                                    </Latex>
                                  </p>
                                </div>
                                {/* </div> */}
                                <div className='flex flex-row w-1/2'>
                                  <div className='bg-white h-12 w-12 rounded-md mr-4 flex '>
                                    <div className='w-full text-center text-lg font-semibold my-auto'>
                                      B
                                    </div>
                                  </div>
                                  {/* <div className='flex-grow flex'> */}
                                  <p className='text-textPrimary my-auto mx-4'>
                                    <Latex>
                                      {data[i].B.startsWith('\\(')
                                        ? data[i].B + ')'
                                        : data[i].B}
                                    </Latex>
                                  </p>
                                  {/* </div> */}
                                </div>
                              </div>
                              <div className='flex flex-row mt-2'>
                                <div className='flex flex-row w-1/2'>
                                  <div className='bg-white h-12 w-12 rounded-md mr-4 flex'>
                                    <div className='w-full text-center text-lg font-semibold my-auto'>
                                      C
                                    </div>
                                  </div>
                                  {/* <div className=''> */}
                                  <p className='text-textPrimary my-auto mx-4'>
                                    <Latex>
                                      {data[i].C.startsWith('\\(')
                                        ? data[i].C + ')'
                                        : data[i].C}
                                    </Latex>
                                  </p>
                                </div>
                                {/* </div> */}
                                <div className='flex flex-row w-1/2'>
                                  <div className='bg-white h-12 w-12 rounded-md mr-4 flex '>
                                    <div className='w-full text-center text-lg font-semibold my-auto'>
                                      D
                                    </div>
                                  </div>
                                  {/* <div className='flex-grow flex'> */}
                                  <p className='text-textPrimary my-auto mx-4'>
                                    <Latex>
                                      {data[i].D.startsWith('\\(')
                                        ? data[i].D + ')'
                                        : data[i].D}
                                    </Latex>
                                  </p>
                                  {/* </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                    <div className='flex flex-row space-x-4'>
                      <button
                        className='rounded-lg flex items-center justify-center px-3.5 py-2 cursor-pointer bg-primary text-white w-1/2'
                        onClick={() => {
                          const input = document.getElementById('pdf-element');
                          const answerKey = `<div id="answeer-key"><table><tr><th>Question</th><th>Answer</th></tr>`;
                          data.map((question, i) => {
                            answerKey += `<tr><td>${question.id}</td><td>${question.answer}</td></tr>`;
                          });
                          answerKey += `</table></div>`;
                          const pdf = new jsPDF({
                            unit: 'px',
                            format: 'a4',
                            userUnit: 'px',
                          });
                          pdf
                            .html(input, { html2canvas: { scale: 0.3 } })
                            .then(() => {
                              pdf.save('question-bank.pdf');
                            });

                          const answerPdf = new jsPDF({
                            unit: 'px',
                            format: 'a4',
                            userUnit: 'px',
                          });
                          answerPdf
                            .html(answerKey, { html2canvas: { scale: 0.5 } })
                            .then(() => {
                              answerPdf.save('answer-key.pdf');
                            });
                        }}
                      >
                        Download PDF
                      </button>
                      <a
                        className='rounded-lg flex items-center justify-center px-3.5 py-2 cursor-pointer bg-primary text-white w-1/2'
                        href='http://localhost:8000/question/bank?topics=Physics+Chemistry+Mathematics&easy=5+5+5&medium=5+5+5&hard=5+5+5&type=csv'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <button>Download CSV</button>
                      </a>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
