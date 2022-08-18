import Link from "next/link";
import React from "react";
import { SignInVector } from "../../utils/icon.export.js";

export default function Login() {
  return (
    <div className="flex flex-col font-primary">
      <main className="flex flex-col">
        {/* full screen block */}
        <div className="flex w-full min-h-screen">
          {/* Sign In Section */}
          <div className="flex flex-col bg-white w-2/3 justify-center items-center">
            <div className="w-1/2">
              <div className="flex flex-col">
                <p className="font-bold text-3xl mb-6 text-black">Sign In</p>
                <p className="font-medium text-xl text-black mb-8">
                  Login to your account to start adding questions
                </p>
                <div className="flex">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    className="border-textSecondary border rounded-lg focus:border-primary outline-none mb-3 flex-1 text-textSecondary text-xs font-light px-4 py-3"
                  ></input>
                </div>
                <div className="flex">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border-textSecondary border rounded-lg focus:border-primary outline-none mb-3 flex-1 text-textSecondary text-xs font-light px-4 py-3"
                  ></input>
                </div>
                <div className="my-5 font-normal text-right text-sm text-textPrimary">
                  <a href="#" className="hover:text-primary">
                    Forgot Password?
                  </a>
                </div>
                <button type="submit">
                  <div className="bg-primary text-white font-semibold text-lg flex justify-center py-2 rounded-lg">
                    Sign In
                  </div>
                </button>
                <p className="text-black pt-3">
                  Don&apos;t have an account?
                  <Link href="/signup">
                    <a>
                      <span className="text-primary font-medium hover:font-extrabold">
                        {" "}
                        Register
                      </span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* Vector Section */}
          <div className="flex flex-col bg-primary w-1/3 items-center justify-center">
            <img src={SignInVector.src} width="375px" className=""></img>
            <p className="text-white font-medium text-2xl w-2/3 text-center">
              Just a click here and another there and you are logged in!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
