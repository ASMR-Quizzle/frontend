import React from "react";

export const QuestionContainer = ({ question }) => {
  return (
    <div className="bg-surfacePrimary rounded-md px-8 py-4 my-4">
      <div className="flex justify-between">
        <div className="text-xl font-bold ">{`Question ${question.id} `}</div>
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

      <div className="w-full my-4 flex">
        <p className="ml-auto">
          <span className="font-bold text-lg">Status:</span>{" "}
          {question.status === "Not Reviewed" ? (
            <span className="text-lg text-primary">Not Reviewed</span>
          ) : question.status === "Under Review" ? (
            <span className="text-lg text-statusOrange">Under Review</span>
          ) : question.status === "Accepted" ? (
            <span className="text-lg text-statusGreen">Accepted</span>
          ) : question.status === "Rejected" ? (
            <span className="text-lg text-statusRed">Rejected</span>
          ) : (
            <span className="text-lg text-slate-500">N/A</span>
          )}
        </p>
      </div>
    </div>
  );
};
