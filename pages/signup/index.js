import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SignUPVector } from "../../utils/icon.export";
// import axios from "axios";

export default function Signup() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({
  //   mode:'onChange'
  // });

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    username: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.conPassword) {
      setError("Passwords did not match");
    } else {
      setError("");
    }
    console.log(formData);
  };

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
              <form onSubmit={handleFormSubmit}>
                <div className="flex justify-between mb-6">
                  <div className="w-[48%] flex">
                    <input
                      type="text"
                      name="fName"
                      placeholder="First Name"
                      required
                      className="border-textSecondary border rounded-lg focus:border-primary outline-none text-textSecondary text-xs font-light px-4 py-3 flex-1"
                      onChange={handleChange}
                      value={formData.fName}
                    ></input>
                  </div>
                  <div className="w-[48%] flex">
                    <input
                      type="text"
                      name="lName"
                      placeholder="Last Name"
                      required
                      className="border-textSecondary border rounded-lg focus:border-primary outline-none text-textSecondary text-xs font-light px-4 py-3 flex-1"
                      onChange={handleChange}
                      value={formData.lName}
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <div className="w-[48%] flex">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      required
                      className="border-textSecondary border rounded-lg focus:border-primary outline-none text-textSecondary text-xs font-light px-4 py-3 flex-1"
                      onChange={handleChange}
                      value={formData.username}
                    ></input>
                  </div>
                  <div className="w-[48%] flex">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="border-textSecondary border rounded-lg focus:border-primary outline-none text-textSecondary text-xs font-light px-4 py-3 flex-1"
                      onChange={handleChange}
                      value={formData.email}
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mb-8">
                  <div className="w-[48%] flex">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      className="border-textSecondary border rounded-lg focus:border-primary outline-none text-textSecondary text-xs font-light px-4 py-3 flex-1"
                      onChange={handleChange}
                      value={formData.password}
                    ></input>
                  </div>
                  <div className="w-[48%] flex">
                    <input
                      type="password"
                      name="conPassword"
                      placeholder="Confirm Password"
                      required
                      className="border-textSecondary border rounded-lg focus:border-primary outline-none text-textSecondary text-xs font-light px-4 py-3 flex-1"
                      onChange={handleChange}
                      value={formData.conPassword}
                    ></input>
                  </div>
                </div>
                <div>{error}</div>
                <Link href="/profile">
                  <button
                    type="submit"
                    className="rounded-lg relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer bg-gradient-to-tr bg-primary text-white w-full"
                  >
                    <div className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-32 opacity-10"></div>
                    <div className="relative font-medium">Create Account</div>
                  </button>
                </Link>
              </form>
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
