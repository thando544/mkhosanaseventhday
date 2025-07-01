import React from "react";

import { Link } from "react-router";

function Contact() {
  return (
    <>
      <div
        className="xl:bg-cover bg-center w-full h-48 sm:h-96 md:h-64 lg:w-full xl:h-[90vh]"
        style={{ backgroundImage: "url('/images/Rectangle 82 (2).png')" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white font-mersad pt-20 lg:pt-32 xl:pt-[390px] px-4 lg:pl-20 xl:pl-14">
          Become A Part <br /> Of Our Community
        </h1>
      </div>

      {/* contact form */}
      <section className="min-h-screen flex items-start justify-center lg:justify-start bg-white px-4 sm:px-6 lg:px-20 py-12">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-black mb-10 uppercase text-center lg:text-left font-mersad">
            Enroll
          </h2>

        
          <form className="space-y-6">
            
            <div>
              <label className="block text-gray-700 mb-1 font-medium uppercase">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium uppercase">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full p-4 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium uppercase">
                Age
              </label>
              <input
                type="text"
                placeholder="Enter your age"
                className="w-full p-4 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium uppercase">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-4 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </form>
        </div>
      </section>

      {/* get in touch */}
      <section className="bg-customgray px-6 py-16 md:px-20 xl:h-[100vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-black font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-4 rounded-md bg-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">Lorem</label>
              <input
                type="text"
                placeholder="Student"
                className="w-full p-4 rounded-md bg-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 rounded-md bg-white placeholder-gray-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>


        <div className="text-black space-y-6">
          <div>
            <p className="text-sm text-blue-800 font-semibold uppercase mb-1">
              Contact Us
            </p>
            <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
              turpis, accumsan a odio a, vestibulum rhoncus arcu. Proin et leo
              id massa finibus condimentum. Integer odio purus, dapibus eget.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-8 text-sm text-blue-800 font-semibold uppercase">
            <div>Call Us</div>
            <div>Email Us</div>
            <div>Address</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;
