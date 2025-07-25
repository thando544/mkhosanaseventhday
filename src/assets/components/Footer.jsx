import React from "react";
import { Link } from "react-router";


import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-10">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">MASS</h2>
          <p className="text-sm text-gray-300">Education Is Key</p>
          <div className="space-y-1">
            <div className="flex gap-1">
              <div className="w-6 h-5 bg-gray-700" />
              <div className="w-6 h-5 bg-gray-700" />
            </div>
            <div className="flex gap-1">
              <div className="w-8 h-5 bg-gray-700" />
              <div className="w-6 h-5 bg-gray-700" />
            </div>
            <div className="flex gap-1">
              <div className="w-10 h-5 bg-gray-700" />
              <div className="w-6 h-5 bg-gray-700" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h3 className="font-semibold">Navigation</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Home</li>
            <li>School Fees</li>
            <li>About</li>
            <li>Sports</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold">Quick links</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Social Media</li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-2">
          <h3 className="font-semibold">Services</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Social Media</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-2 ">
          <h3 className="text-sm">Subscribe to receive news</h3>
          <form className="flex   items-stretch  w-[90%]">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 w-[100%] text-black text-sm  bg-white "
            />
            <button className="bg-blue-600 px-4 py-2 text-sm text-white ">
              <Link to ="/comingSoon">Subscribe</Link>
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex  gap-4 md:flex sm:justify-between sm:items-center text-sm text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-lg" />
            <span>Mkhosana mainstreet, Victoria Falls</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-lg" />
            <span>013 883456234</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <span>seventhdaysmkhosana@gmail.com</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center sm:justify-start">
          <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
          <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        SADC2025 - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
