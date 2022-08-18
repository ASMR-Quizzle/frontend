import Link from "next/link";
import React from "react";
import { SignUPVector } from "../../utils/icon.export";

export default function Signup() {
  return (
    <div className="flex flex-col font-primary">
      <main className="flex flex-col">
        <div className="flex w-full min-h-screen justify-center">
          {/* Vector Section */}
          <div className="w-1/3 bg-primary flex flex-col justify-center items-center">
            <img src={SignUPVector.src} className="" width="375px"></img>
            <p className="w-2/3 text-center text-white text-2xl font-medium">
              You are just a few clicks away from creating an account!
            </p>
          </div>
          {/* Signup section */}
          <div className="w-2/3 bg-white justify-center items-center flex">
            <div className="flex flex-col w-1/2">
              <p className="font-bold text-3xl mb-6 text-black">Register</p>
              <p className="font-medium text-xl text-black mb-8">
                Create an account to start adding questions.
              </p>
              {/* Row-wise inputs */}
              <div className="flex justify-between mb-6">
                <div className=" border border-textPrimary rounded-lg w-[48%] flex">
                  <input
                    type="text"
                    name="fName"
                    placeholder="First Name"
                    className="outline-none m-3 flex-1 text-textSecondary text-xs font-light"
                  ></input>
                </div>
                <div className=" border border-textPrimary rounded-lg w-[48%] flex">
                  <input
                    type="text"
                    name="LName"
                    placeholder="Last Name"
                    className="outline-none m-3 flex-1 text-textSecondary text-xs font-light"
                  ></input>
                </div>
              </div>
              <div className="flex justify-between mb-6">
                <div className=" border border-textPrimary rounded-lg w-[48%] flex">
                  <input
                    type="tel"
                    name="phNumber"
                    placeholder="Phone Number"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    className="outline-none m-3 flex-1 text-textSecondary text-xs font-light"
                  ></input>
                </div>
                <div className=" border border-textPrimary rounded-lg w-[48%] flex">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="outline-none m-3 flex-1 text-textSecondary text-xs font-light"
                  ></input>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div className=" border border-textPrimary rounded-lg w-[48%] flex">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="outline-none m-3 flex-1 text-textSecondary text-xs font-light"
                  ></input>
                </div>
                <div className=" border border-textPrimary rounded-lg w-[48%] flex">
                  <input
                    type="password"
                    name="ConPassword"
                    placeholder="Confirm Password"
                    className="outline-none m-3 flex-1 text-textSecondary text-xs font-light"
                  ></input>
                </div>
              </div>
              <button type="submit">
                <div className="bg-primary text-white font-semibold text-lg py-2 rounded-lg">
                  Create Account
                </div>
              </button>
              <p className="text-black pt-3">
                Already have an account?
                <Link href="/login">
                  <a>
                    <span className="text-primary font-medium hover:font-extrabold">
                      {" "}
                      Login
                    </span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
