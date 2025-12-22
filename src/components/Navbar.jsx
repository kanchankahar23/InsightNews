import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar = ({ setCategoryitem }) => {
  const [open, setOpen] = useState(false);

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology"

  ];

  return (
    <header className="w-full sticky top-0 bg-white border-b z-50">
      <div className="flex items-center justify-between px-4 py-1">
        <div className="hidden md:flex gap-4 text-sm text-gray-700">
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
          <span className="cursor-pointer font-bold text-gray-700 hover:border-b-2 border-red-700">
            LOGIN
          </span>
          <button className="bg-red-600 hover:bg-transparent hover:text-red-600 border hover:border-red-500 transition duration-300 font-bold text-white px-4 py-1 rounded">
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
          } md:flex md:justify-center md:gap-10 border-t md:border-0 px-4`}
      >
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => {
              console.log(item)
              setCategoryitem(item);
              setOpen(false);
            }}
            className="block py-2 md:py-3 text-center text-lg font-semibold hover:text-red-600"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
