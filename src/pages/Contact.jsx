import React from "react";
import { Link } from "react-router";


function Contact() {
  return (
    <>
      <div
      
        className="xl:bg-cover bg-no-repeat bg-center w-full h-48 sm:h-96 md:h-64 lg: xl:h-[90vh] "
        style={{ backgroundImage: "url('/images/Rectangle 82 (2).png')" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white font-mersad pt-20 lg:pt-32 xl:pt-[390px] px-4 lg:pl-20 xl:pl-14">
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
          type="file" id="certificate" name="certificate" accept=".pdf,.jpg,.jpeg,.png"
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
              className="bg-[#145A8D] text-white px-6 py-2 rounded-md"
            >
              SUBMIT
            </button>
        
      </div>
        
 {/* form */}       


        
      </form>
    </section>
  



    

      {/* get in touch */}
      <section className=" px-6 py-16 md:min-h-[100vh] xl:min-h-[100vh] sm:min-h-[150vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#D9D9D933] h-[100vh]">

        <div className="px-10 py-14">
          <form className="space-y-6 ">
            <div>
              <label className="block text-black font-medium mb-2 ">Your Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-4 rounded-md bg-gray-200 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">Lorem</label>
              <input
                type="text"
                placeholder="Student"
                className="w-full p-4 rounded-md bg-gray-200 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                rows="6 "
                className="w-full p-4 rounded-md bg-gray-200 placeholder-gray-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-md"
            >
              SEND
            </button>
          </form>
        </div>


        <div className="text-black space-y-6 p-14">
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
            <div>
            <div className="flex">
            <span>
             <img src="/images/Phone receiver.png" alt="Call Us" />
           </span>
            Call us
              </div>
              <h3 className="text-black">0832846083</h3>
              </div>
           
              <div>
            <div className="flex">
            <span>
             <img src="/images/Email.png" alt="Call Us" />
           </span>
             Email us
              </div>
              <h3 className="text-black">seventhdaymkhosana@gmail.com</h3>
              </div>
           
              <div>
            <div className="flex">
            <span>
             <img src="/images/Maps.png" alt="Call Us" />
           </span>
             Email us
              </div>
              <h3 className="text-black">seventhdaymkhosana@gmail.com</h3>
              </div>
           
             

            
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;
