import React from "react";

//A card which iterates

export const QuestionContainer = ({ question }) => {
  return (
    <div className="bg-surfacePrimary rounded-md px-8 py-4 my-4">
      <div className="flex">
        <div className="text-xl font-bold ">{`Question ID ${question.id} `}</div>
      </div>
      <div className="flex flex-wrap space-x-2 space-y-2">
        <span className="bg-primaryAccent text-primary rounded-md mt-2 focus:outline-none placeholder-textSecondary placeholder:italic py-2 px-4 min-w-fit">
          {question.topic}
        </span>
      </div>
      <p className="py-4 w-[100%] grow text-textPrimary">{question.question}</p>

      <div className="flex flex-col spacing-y-2">
        {question.A ? (
          question.answer !== "A" ? (
            <div className="flex flex-row">
              <div className="bg-white h-12 w-12 rounded-md mr-4 flex">
                <div className="w-full text-center text-lg font-semibold my-auto">
                  A
                </div>
              </div>
              <div className="flex-grow flex">
                <p className="text-textPrimary my-auto mx-4">{question.A}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row">
              <div className="bg-statusGreen h-12 w-12 rounded-md mr-4 flex">
                <div className="w-full text-center text-lg text-white font-semibold my-auto">
                  A
                </div>
              </div>
              <div className="flex-grow flex">
                <p className="text-statusGreen my-auto mx-4">{question.A}</p>
              </div>
            </div>
          )
        ) : null}
        {question.B ? (
          question.answer !== "B" ? (
            <div className="flex flex-row mt-4">
              <div className="bg-white h-12 w-12 rounded-md mr-4 flex">
                <div className="w-full text-center text-lg font-semibold my-auto">
                  B
                </div>
              </div>
              <div className="flex-grow flex">
                <p className="text-textPrimary my-auto mx-4">{question.B}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row mt-4">
              <div className="bg-statusGreen h-12 w-12 rounded-md mr-4 flex">
                <div className="w-full text-center text-lg text-white font-semibold my-auto">
                  B
                </div>
              </div>
              <div className="flex-grow flex">
                <p className="text-statusGreen my-auto mx-4">{question.B}</p>
              </div>
            </div>
          )
        ) : null}
        {question.C ? (
          question.answer !== "C" ? (
            <div className="flex flex-row mt-4">
              <div className="bg-white h-12 w-12 rounded-md mr-4 flex">
                <div className="w-full text-center text-lg font-semibold my-auto">
                  C
                </div>
              </div>
              <div className="flex-grow flex">
                <p className="text-textPrimary my-auto mx-4">{question.C}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row mt-4">
              <div className="bg-statusGreen h-12 w-12 rounded-md mr-4 flex">
                <div className="w-full text-center text-lg text-white font-semibold my-auto">
                  C
                </div>
              </div>
              <div className="flex-grow flex">
                <p className="text-statusGreen my-auto mx-4">{question.C}</p>
              </div>
            </div>
          )
        ) : null}
        {question.D ? (
          question.answer !== "D" ? (
            <div className="flex flex-row mt-4">
              <div className="bg-white h-12 w-12 rounded-md mr-4 flex">
                <div className="w-full text-center text-lg font-semibold my-auto">
                  D
                </div>
              </div>
              <div className="flex-grow flex">
                <p className="text-textPrimary my-auto mx-4">{question.D}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row mt-4">
              <div className="bg-statusGreen h-12 w-12 rounded-md mr-4 flex">
                <div className="w-full text-center text-lg text-white font-semibold my-auto">
                  D
                </div>
              </div>
              <div className="flex-grow flex">
                <p className="text-statusGreen my-auto mx-4">{question.D}</p>
              </div>
            </div>
          )
        ) : null}
      </div>

      <div className="w-full my-4 flex flex-row mt-8">
        <div className="w-2/3 flex">
          <p className="mr-4 font-bold text-lg my-auto">Difficulty: </p>
          <input type="range" min="0" max="10" className="w-full mr-5"></input>
        </div>
        <p className="flex justify-center items-center font-bold text-lg">
          <span className="font-bold text-lg mr-2">Status:</span>{" "}
          <select className="bg-primary rounded-md text-white">
            <option defaultValue>Needs Review</option>
            <option>Accept</option>
            <option>Reject</option>
          </select>
        </p>
      </div>
    </div>
  );
};
