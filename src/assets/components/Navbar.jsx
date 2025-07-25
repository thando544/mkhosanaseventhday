import React, { useState } from "react";
import { HiOutlineBell } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flex items-center justify-between px-9 py-4 shadow-md sticky z-90 top-0  backdrop-blur-md ">
      <a href="/" className="flex items-center text-2xl font-bold">
        <img src="/images/logo.png" alt="logo" className="h-8 mr-2" />
        MASS
      </a>

      <ul className="hidden md:flex gap-4 text-lg items-center" id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-4 pr-10 py-2  shadow-md border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <CiSearch className="text-2xl text-gray-500" />
            </div>
          </div>
        </li>
        <li>
          <Link to="/comingSoon">
          <HiOutlineBell className="text-2xl cursor-pointer" />
          </Link>
        </li>
      </ul>

      <button
        className="hidden md:block bg-[#145A8D] text-white px-4 py-1 w-[120px]"
        id="navBtn"
      >
        Enroll
      </button>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start px-6 py-4 gap-4 z-70">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/sports" onClick={toggleMenu}>
            Sports
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <HiOutlineBell className="text-2xl cursor-pointer" />
          <button className="bg-[#145A8D] text-white w-full py-2 rounded">
            Enroll
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
