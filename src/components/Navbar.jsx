import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed border-b">
      <div className="flex items-center justify-between px-4 py-1">
        <div className="hidden md:flex gap-4  text-sm text-gray-700">
          <span className="font-bold">Dec 19, 2025</span>
          <span className="text-red-600 font-bold cursor-pointer">
            e-Paper
          </span>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={logo}
            alt="Insight News"
            className="w-52 md:w-72 h-auto object-contain"
          />
        </div>
        <div className="hidden md:flex gap-6 items-center text-sm">
          <span className="cursor-pointer font-bold text-gray-700 border-red-700 transition duration-200 hover:border-b-2">LOGIN</span>
          <button className="bg-red-600 hover:bg-none   hover:bg-transparent hover:text-red-600 border hover:border-red-500
             transition duration-300  font-bold text-white px-4 py-1 rounded">
            SUBSCRIBE
          </button>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      <nav
        className={`${open ? "block" : "hidden"
          } md:flex md:justify-center md:gap-10 border-t md:border-0 px-4 md:px-0`}
      >
        {[
          "India",
          "World",
          "Movies",
          "Sport",
          "Data",
          "Health",
          "Opinion",
          "Science",
          "Business",
          "Premium",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="block py-2 md:py-3 text-center text-lg font-semibold hover:text-red-600"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
