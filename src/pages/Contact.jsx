import React from "react";
import { Link } from "react-router";

function Contact() {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat md:bg-center  md:bg-no-repeat w-full h-[70vh]  md:bg-cover md:h-[80vh] lg: xl:h-[90vh] "
        style={{ backgroundImage: "url('/images/Rectangle 82.png')" }}
        id="contact-bg"
      >
        <h1 className=" md:pt-[600px] md:text-5xl text-4xl pt-[300px] text-white font-mersad leading-tight 1.25  xl:pt-[390px] px-4 lg:pl-20 xl:pl-14">
          Become A Part <br /> Of Our Community
        </h1>
      </div>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex justify-center ">
          <h1 className="text-5xl">Enroll</h1>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-7 mt-24">
          {/* Name */}
          <div>
            <h1>NAME</h1>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 border-none bg-[#F4F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* address */}
          <div>
            <h1>ADDRESS</h1>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 border-none bg-[#F4F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Gender */}
          <div>
            <h1>GENDA</h1>
            <select className="w-full p-3 border-none bg-[#F4F3F3] rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value=""></option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* previous school name*/}
          <div>
            <h1>PREVIOUS SCHOOL NAME</h1>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 border-none bg-[#F4F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Birth Date */}
          <div>
            <h1>DOB</h1>
            <input
              type="date"
              className="w-full p-3 border-none bg-[#F4F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country Code Dropdown + Number */}
          <div>
            <h1>PHONE NUMBER</h1>
            <select className="w-full p-3 border-none rounded-md bg-[#F4F3F3] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="+263"> +263</option>
              <option value="+27"> +27</option>
              <option value="+260">+260</option>
            </select>
          </div>

          {/* Birth number */}
          <div>
            <h1>BIRTH NUMBER</h1>
            <input
              type="number"
              placeholder=""
              className="w-full p-3 border-none rounded-md bg-[#F4F3F3] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* previous school results */}
          <div>
            <h1>PREVIOUS SCHOOL RESULTS</h1>
            <input
              type="file"
              placeholder=""
              className="w-full p-3 border-none rounded-md bg-[#F4F3F3] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/*  birth certificate */}
          <div>
            <h1>ATTACH BIRTH CERTIFICATE</h1>
            <input
              type="file"
              id="certificate"
              name="certificate"
              accept=".pdf,.jpg,.jpeg,.png"
              placeholder=""
              className="w-full p-3 border-none rounded-md bg-[#F4F3F3] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* form */}
          <div>
            <h1>FORM</h1>
            <select className="w-full p-3 border-none rounded-md bg-[#F4F3F3] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#145A8D] text-white px-12 py-2 rounded-md"
            >
              <Link to="/comingSoon">SUBMIT</Link>
            </button>
          </div>

          {/* form */}
        </form>
      </section>

      {/* get in touch */}
      <section className=" px-6 py-16 xl:min-h-[100vh] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#D9D9D933] ">
          <div className="px-10 py-14">
            <form className="space-y-6 ">
              <div>
                <label className="block text-black font-medium mb-2 ">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name" required
                  className="w-full p-4 rounded-md bg-gray-200 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email" required
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md bg-gray-200 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows="6 "
                  className="w-full p-4 rounded-md bg-gray-200 placeholder-gray-400 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-900 text-white px-12 py-2 rounded-md "
              >
                <Link to="/comingSoon">SEND</Link>
              </button>
            </form>
          </div>

          <div className="text-black space-y-6 p-14 ">
            <div>
              <p className="text-sm text-blue-800 font-semibold uppercase mb-1">
                Contact Us
              </p>
              <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>

{/* XL: Full paragraph */}
<p className="text-base xl:block hidden">
  At Mkhosana Adventist Secondary School, we believe every
  conversation is an opportunity to encourage, guide, and inspire.
  Whether you’re a parent exploring our Seventh-day Adventist values,
  a donor supporting our mission, or a community member seeking
  collaboration, we’re here to listen and assist. Our doors and hearts
  are open to discuss admissions, spiritual growth, or how you can
  contribute to nurturing the next generation of faith-filled leaders.
  Reach out today — because education rooted in Christ thrives through connection!
</p>

{/* MD: Short version */}
<p className="text-base md:block xl:hidden hidden">
  At Mkhosana Adventist Secondary School, we value every conversation —
  whether you’re a parent, donor, or community member, we're here to help
  guide and inspire. Let's connect and grow together in Christ!
</p>

            </div>

            <div className="xl:grid md:grid-cols-2 gap-y-12 text-sm text-blue-800 font-semibold uppercase xl:mt-14">
              <div>
                <div className="flex gap-2">
                  <span>
                    <img src="/images/Phone receiver.png" alt="Call Us" />
                  </span>
                  Call us
                </div>
                <h3 className="text-black mt-3">0832846083</h3>
              </div>

              <div>
                <div className="xl:flex flex gap-2 xl:mt-0 mt-7">
                  <span>
                    <img src="/images/Email.png" alt="Call Us" />
                  </span>
                  Email us
                </div>
                <h3 className="text-black">seventhdaymkhosana@gmail.com</h3>
              </div>

              <div>
                <div className="flex gap-2 xl:mt-0 mt-7">
                  <span>
                    <img src="/images/Maps.png" alt="Call Us" />
                  </span>
                  ADDRESS
                </div>
                <h3 className="text-black w-72"> Mkhosana mainstreet, .  Victoria Falls</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
