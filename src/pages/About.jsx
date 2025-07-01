import React from "react";
import { Link } from "react-router";




function About() {
  return (
    <main>
      {/* banner */}
      <section className="xl:h-[90vh] xl:w-full lg:min-h-auto: bg-gray-200 xl:bg-cover flex gap-28 ">
<div className="xl:pl-12 xl:pt-[150px] ">
  <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl font-mersad">Learn More <br />About Our School</h1>
  <p className="font-mersad mt-6">At Mkhosana Adventisits  Secondary School we are a Seventh-day <br /> Adventist Christian school committed to excellence in spiritual growth, <br /> academics, and character development. Our Christ-centered <br /> environment integrates faith with learning, promotes healthy living, and <br /> fosters a spirit of service - preparing students not just for academic <br /> success, but for meaningful lives of purpose on earth and for eternity."</p>
  <button className="bg-blue-900 w-40 h-11 cursor-pointer text-white mt-8">
    more
   </button>
</div>
<div className="xl:w-70 xl:h-72  xl:mt-32 flex-2/5 " >
<img src="/images/Rectangle 70.png " alt="" />
<div className=" relative xl:left-10">
  <img className="absolute xl:bottom-[220px] " src="/images/pngwing.com.png" alt="" />
</div>
<div className="relative top-14">
  <img className="absolute bottom-[2px] left-44 " src="/images/BOOKS 2.png" alt="" />
</div>
</div>

      </section>
 
      {/* second section */}
      <section></section>

      {/* third section */}
      <section className="w-auto xl:h-[70vh]">
       <div className="bg-blue-900 xl:min-h-[55vh] w-full mt-36  ">

<div className="flex justify-center items-center gap-[170px] pt-14">
       <div>
        <div className="xl:w-24 xl:h-24 bg-white rounded-full"> 
        <img src="/images/Money bag.png" alt="" />
        </div>
        <div className="text-white">
        <h2 className="text-1xl ml-8 xl:pt-5">FEES</h2>
        <p className="text-5xl ml-6 xl:pt-5">21</p>
        </div>
        </div>


      <div>
        <div className="xl:w-24 xl:h-24 bg-white rounded-full"> 
        <img src="/images/Results.png" alt="" />
        </div>
        <div className="text-white">
        <h2 className="xl:text-1xl xl:ml-3 xl:pt-5">PASS RATE</h2>
        <p className="xl:text-5xl xl:ml-3.5 xl:pt-5">21</p>
        </div>
        </div>

        <div>
        <div className="xl:w-24 xl:h-24 bg-white rounded-full"> 
        <img src="/images/Children.png" alt="" />
        </div>
        <div className="text-white">
        <h2 className="xl:text-1xl xl:pt-5">TOTAL STUDENTS</h2>
        <p className="xl:text-5xl xl:ml-6 xl:pt-5">21</p>
        </div>
        </div>

<div>
        <div className="xl:w-24 xl:h-24 bg-white rounded-full"> 
        <img src="/images/Teach.png" alt="" />
        </div>
        <div className="text-white">
        <h2 className="xl:text-1xl xl:ml-3.5 xl:pt-5">TEACHERS</h2>
        <p className="xl:text-5xl xl:ml-5 xl:pt-5">21</p>
        </div>
        </div>
        
        </div> 
        </div>
        
      </section>

      {/* fourth section */}
      <section className="h-[80vh] w-full xl:px-20">
        <div>
          <h6>SUBJECTS OFFERED</h6>
          <p>Learn more about our mission, values ,<br /> and community</p>
        </div>

        
      </section>

      {/* fifth section */}
      <section></section>

      {/* sixthy section */}
      <section></section>
    </main>
  );

};

export default About;
