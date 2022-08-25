import React, { useEffect, useState } from "react";

import { ContactUsVector } from "../../utils/icon.export.js";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar.js";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col font-primary">
      <Navbar />
      <main className="flex flex-col">
        {/* full screen block */}
        <div className="flex w-full min-h-screen">
          <div className="flex flex-col  w-1/2 items-start justify-center ml-16 my-32 rounded-xl ">
            <span className="text-2xl  font-semibold ">Get a quote.</span>
            <span>
              Fill up the form and our team will get back to you within a
              moment!
            </span>
            <img
              src={ContactUsVector.src}
              width="500px"
              className="mx-auto"
            ></img>
          </div>
          {/* Sign In Section */}
          <div className=" w-1/2 justify-center items-center my-auto ">
            <div className="bg-primaryAccent rounded-lg px-8 py-16 mx-32 my-auto">
              <form onSubmit={handleSubmit}>
                <div className="w-full">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name / Institute Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="username"
                    placeholder="Name"
                    className="border-textSecondary border rounded-lg focus:border-primary outline-none mb-3 w-full text-textSecondary text-xs font-light px-4 py-3"
                    onChange={handleChange}
                    value={formData.email}
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="mail"
                  >
                    mail
                  </label>
                  <input
                    id="mail"
                    type="email"
                    name="mail"
                    placeholder="E-mail"
                    className="border-textSecondary border rounded-lg focus:border-primary outline-none mb-3 w-full text-textSecondary text-xs font-light px-4 py-3"
                    onChange={handleChange}
                    value={formData.password}
                  ></input>
                </div>
                <div className="mb-8 w-full">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    className="border-textSecondary border rounded-lg focus:border-primary outline-none w-full text-textSecondary text-xs font-light px-4 py-3"
                    onChange={handleChange}
                    value={formData.password}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="rounded-lg relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer bg-gradient-to-tr bg-primary text-white"
                >
                  <div className="relative font-medium">Send Message</div>
                </button>
              </form>
            </div>
          </div>
          {/* Vector Section */}
        </div>
      </main>
    </div>
  );
}
