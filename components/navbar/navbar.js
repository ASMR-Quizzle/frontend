import React from "react";
import Link from "next/link";

import { LogoPNG } from "../../utils/icon.export.js";

export default function Nav() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-5 font-primary">
        <div className="flex items-center flex-shrink-0 mr-6 ">
          <img src={LogoPNG.src}></img>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-6 text-xl"
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-6 text-xl"
            >
              About Us
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-6 text-xl"
            >
              Collaborate
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-6 text-xl"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary text-xl"
            >
              Help
            </a>
          </div>
          <div>
            <Link href={"/login"}>
              <a
                href="#"
                className="inline-block text-xl font-medium lg:px-8 lg:py-2 px-6 py-2 bg-primary rounded-lg text-white hover:bg-primaryAccent hover:text-iconPrimary mt-4 lg:mt-0"
              >
                Login
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
