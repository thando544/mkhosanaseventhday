import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="w-full bg-black h-125 p-4">
        <div className=" w-full h-100 flex items-center justify-center  pr-13 gap-3  text-white">
          <div className="h-89 w-60 -mt-9  flex flex-col items-baseline justify-center p-0">
            <h1 className="text-white text-6xl">MASS</h1>
            <p className="text-white -mt-9 w-40">Education is key</p>

            <div className="w-90 h-30 grid grid-cols-2">
              <img src="/images/blocks.png" alt="" className="h-36 w-90" />
            </div>
          </div>

          <div className="h-89 w-60  flex flex-col items-baseline justify-center p-4 text-white">
            <h2 className="font-bold">Navigation</h2>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
          </div>

          <div className="h-89 w-60  flex flex-col items-baseline justify-center p-4 text-white">
            <h2 className="font-bold">Quick links</h2>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">SocialMedia</a>
            </li>
          </div>

          <div className="h-89 w-60  flex flex-col items-baseline justify-center p-4 text-white -mt-4">
            <h2 className="font-bold">Services</h2>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">SocialMedia</a>
            </li>
          </div>

          <div className="h-29 -mt-40 w-70  flex flex-col items-start justify-center p-4 text-white">
            <h2 className="font-bold">Subscribe to receive news</h2>
            <div className="flex">
              <input
                type="email "
                required
                className="bg-white w-50 text-black pl-5"
              />
              <button
                type="submit"
                className="bg-blue-700 h-10 w-34 text-white cursor-pointer"
              >
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 border-gray-700 justify-center items-center flex pt-7">
          <p className="text-gray-500">SDA2025.All Rights Reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
