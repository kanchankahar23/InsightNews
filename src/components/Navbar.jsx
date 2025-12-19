import React from "react";
import logo from "../assets/Logo.png"; // your Insight News logo

const Navbar = () => {
  return (
    <header className="w-full border-b">

      <div className="w-full flex justify-between items-center px-6 py-2 text-sm text-gray-700">
        {/* 🔹 LOGO CENTER */}
        <div className="flex gap-4">
          <span>December 19, 2025</span>
          <span className="text-red-600 font-semibold cursor-pointer">
            e-Paper
          </span>
        </div>
        <div className="w-full flex justify-center items-center ">
          <img
            src={logo}
            alt="Insight News"
            className="w-72 h-auto object-contain "
          />
        </div>
        <div className="flex gap-6 items-center">
          <span className="cursor-pointer">LOGIN</span>
          <button className="bg-red-600 text-white px-4 py-1 rounded text-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>




      {/* 🔹 MENU BAR */}
      <nav className="w-full flex justify-center gap-10 py-3 border-t text-lg font-semibold">
        <a href="#" className="hover:text-red-600">India</a>
        <a href="#" className="hover:text-red-600">World</a>
        <a href="#" className="hover:text-red-600">Movies</a>
        <a href="#" className="hover:text-red-600">Sport</a>
        <a href="#" className="hover:text-red-600">Data</a>
        <a href="#" className="hover:text-red-600">Health</a>
        <a href="#" className="hover:text-red-600">Opinion</a>
        <a href="#" className="hover:text-red-600">Science</a>
        <a href="#" className="hover:text-red-600">Business</a>
        <a href="#" className="hover:text-red-600">Premium</a>
      </nav>

    </header>
  );
};

export default Navbar;
