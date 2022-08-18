import React from "react";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar.js";
import { LandingVector } from "../../utils/icon.export.js";

export default function Home() {
  return (
    <div className="flex flex-col font-primary w-full min-h-screen justify-between">
      <Navbar />
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col ">
          <div className="text-6xl flex flex-col">
            <span className="text-black font-semibold">The only place</span>
            <span className="text-primary font-bold my-6">for Questions!</span>
          </div>
          <p className="font-normal text-black text-2xl mb-6">
            A crowd sourced question bank
          </p>
          <button className="border-2 rounded-lg border-primary w-1/3 py-2 hover:bg-primaryAccent ">
            <span className="text-primary">Know More</span>
          </button>
        </div>
        <img src={LandingVector.src} className="w-2/5"></img>{" "}
      </div>
    </div>
  );
}
