import React, { Component } from "react";
import { HiOutlineBell } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex items-center justify-between h-23 p-9 shadow-md sticky z-30 top-0 ">
      <a
        href=""
        className="flex items-center justify-center text-2xl font-bold "
      >
        <img src="/images/logo.png" alt="logo" />
        MASS
      </a>
      <ul className="flex gap-4 text-1xl items-center">
        <li>
          <Link className="" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/sports">Sport</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div class="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search"
            class="w-full pl-4 pr-10 py-2 border-0 shadow-2xl rounded-md focus:outline-none focus:ring-2 "
          />
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <CiSearch className="cursor-pointer text-2xl">
              <path
                fill-rule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM10 16a6 6 0 100-12 6 6 0 000 12z"
                clip-rule="evenodd"
              />
            </CiSearch>
          </div>
        </div>
        <li>
          <a className="list-none text-2xl" href="">
            <HiOutlineBell />
          </a>
        </li>
      </ul>

      <button
        className="bg-blue-600 text-white h-8 w-29 cursor-pointer"
        id="navBtn"
      >
        Enroll
      </button>

      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
