import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col font-primary">
      <main className="flex flex-col">
        {/* full screen block */}
        <div className="flex w-full min-h-screen">
          {/* Sign In Section */}
          <div className="flex flex-col bg-white w-2/3 justify-center">
            <div className="w-1/2 ml-52">
              <div className="flex flex-col">
                <p className="font-bold text-3xl pb-6 text-black">Sign In</p>
                <p className="font-medium text-xl text-black mb-8">
                  Login to your account to start adding questions
                </p>
                <div className="border-textSecondary border rounded-lg flex mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    className="outline-none m-2 flex-1 text-textSecondary text-sm font-light"
                  ></input>
                </div>
                <div className="border-textSecondary border rounded-lg flex">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="outline-none m-2 flex-1 text-textSecondary text-sm font-light"
                  ></input>
                </div>
                <div className="my-5 font-normal text-right text-sm text-textPrimary">
                  <a href="#">Forgot Password?</a>
                </div>
                <a href="#">
                  <div className="bg-primary text-white font-semibold text-xl flex justify-center py-2 rounded-lg hover:bg-primaryAccent hover:text-iconPrimary">
                    Sign In
                  </div>
                </a>
                <p className="text-black pt-3">
                  Don't have an account?
                  <a href="#">
                    <span className="text-primary font-medium"> Register</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Vector Section */}
          <div className="flex flex-col bg-primary w-1/3 items-center justify-center">
            <img src="/signinPgVector.png" width="375px" className=""></img>
            <p className="text-white font-medium text-2xl w-2/3 text-center">
              Just a click here and another there and you are logged in!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
