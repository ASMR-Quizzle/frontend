import { useEffect, useState } from "react";

import { QuestionContainer } from "../../components/review-questions/questionContainer";
import { Sidebar } from "../../components/shared/sidebar";
import reviewQuestions from "../../data/reviewQuestions";

export default function Home() {
  const [selection, setSelection] = useState("");

  const handleSelection = (e) => {
    console.log(e.target.value);
    setSelection(e.target.value);
    console.log(selection);
  };

  const filter_reviewQuestions = reviewQuestions.filter((question) => {
    if (selection === "Maths") {
      return question.topic === "Maths";
    } else if (selection === "Chemistry") {
      return question.topic === "Chemistry";
    } else if (selection === "Physics") {
      return question.topic === "Physics";
    } else {
      return question;
    }
  });

  return (
    <div className="w-full flex h-screen">
      <Sidebar isActive={{ review_questions: true }} />
      <div className=" w-5/6 px-[141px] max-h-screen overflow-y-auto">
        <div className="flex ">
          <p className="text-2xl subpixel-antialiased font-bold pt-4">
            Review Questions
          </p>
          <p className="flex items-end ml-10 text-xl">
            <p className="font-bold text-black mr-2">Filter:</p>
            <select
              className="bg-primary rounded-md text-white"
              value={selection}
              onChange={handleSelection}
            >
              <option defaultValue>All Topics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Maths</option>
            </select>
          </p>
        </div>
        {filter_reviewQuestions
          ? filter_reviewQuestions.map((question) => {
              return (
                <QuestionContainer key={question.id} question={question} />
              );
            })
          : null}
      </div>
    </div>
  );
}
