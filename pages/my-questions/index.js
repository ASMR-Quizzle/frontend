import { QuestionContainer } from "../../components/my-questions/questionContainer";
import { Sidebar } from "../../components/shared/sidebar";
import questionsList from "../../data/questionsList.js";

export default function Home() {
  return (
    <div className="w-full flex h-screen">
      <Sidebar isActive={{ my_questions: true }} />
      <div className=" w-5/6 px-[141px]  max-h-screen overflow-y-auto">
        <p className="text-2xl subpixel-antialiased font-bold pt-4">
          My Questions
        </p>

        {questionsList
          ? questionsList.map((question) => {
              return (
                <QuestionContainer key={question.id} question={question} />
              );
            })
          : null}
      </div>
    </div>
  );
}
