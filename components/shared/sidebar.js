import {
  AddQuestionPNG,
  LogoPNG,
  LogoutPNG,
  MyQuestionsPNG,
  ProfilePNG,
  SettingsPNG,
} from "../../utils/icon.export.js";

export const Sidebar = ({ isActive }) => {
  return (
    <div className="w-1/6 bg-surfacePrimary max-h-screen overflow-y-auto flex flex-col flex-grow">
      <div>
        <img src={LogoPNG.src} className="ml-6 mt-10 mr-auto" />
      </div>
      <div className="mt-16">
        <ul className="list-none ">
          <li>
            <div
              className={`flex cursor-pointer p-4 ${
                isActive["profile"] === true
                  ? " bg-slate-300"
                  : "hover:bg-primaryAccent"
              }`}
            >
              <div className="mr-4 w-8 my-auto">
                <img src={ProfilePNG.src} alt="profile" />
              </div>
              <div className="font-normal text-textPrimary text-xl">
                Profile
              </div>
            </div>
          </li>
          <li>
            <div
              className={`flex cursor-pointer p-4 ${
                isActive["add_question"] === true
                  ? " bg-slate-300"
                  : "hover:bg-primaryAccent"
              }`}
            >
              <div className="mr-4 w-8 my-auto">
                <img src={AddQuestionPNG.src} alt="add_question" />
              </div>
              <div className="font-normal text-textPrimary text-xl">
                Add Question
              </div>
            </div>
          </li>
          <li>
            <div
              className={`flex cursor-pointer p-4 ${
                isActive["my_questions"] === true
                  ? " bg-slate-300"
                  : "hover:bg-primaryAccent"
              }`}
            >
              <div className="mr-4 w-8 my-auto">
                <img src={MyQuestionsPNG.src} alt="my_quesiton" />
              </div>
              <div className="font-normal text-textPrimary text-xl">
                My Questions
              </div>
            </div>
          </li>
          <li>
            <div
              className={`flex cursor-pointer p-4 ${
                isActive["settings"] === true
                  ? " bg-slate-300"
                  : "hover:bg-primaryAccent"
              }`}
            >
              <div className="mr-4 w-8 my-auto">
                <img src={SettingsPNG.src} alt="settings" />
              </div>
              <div className="font-normal text-textPrimary text-xl my-auto">
                Settings
              </div>
            </div>
          </li>
          <li>
            <div
              className={`flex cursor-pointer p-4 ${
                isActive["logout"] === true
                  ? " bg-slate-300"
                  : "hover:bg-primaryAccent"
              }`}
            >
              <div className="mr-4 w-8 my-auto">
                <img src={LogoutPNG.src} alt="login" />
              </div>
              <div className="font-normal text-textPrimary text-xl">Logout</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
