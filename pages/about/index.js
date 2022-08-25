import { AboutImage } from "../../utils/icon.export.js";
import Navbar from "../../components/navbar/navbar.js";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col font-primary w-full min-h-screen">
      <Navbar />
      <div className="flex flex-col bg-black h-1/3 w-full">
        <div className="bg-primary"></div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-primary w-full">hhhhh</div>
        <div className="mb-5 flex flex-col">
          <div className="flex flex-col text-center mb-5 mt-6">
            <span className="text-black font-bold text-4xl">
              Crowd Sourced Model
            </span>
            <span className="text-primary font-extrabold text-4xl">
              For Generating Questions
            </span>
          </div>
          <span>
            Thouands of specific topic questions can be generated using this
            AI-ML monitored portal.
          </span>
          <span>
            Problem Setter and Problem Reviewer get rewards after submitting and
            reviewing questions.
          </span>
        </div>
        <img src={AboutImage.src} className="w-3/5 rounded-lg shadow-xl"></img>
      </div>
    </div>
  );
}
