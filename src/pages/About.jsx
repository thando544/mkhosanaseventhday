import React from "react";
import { Link } from "react-router";




function About() {
  return (
    <main>
      {/* banner */}
      <section className="xl:h-[90vh] xl:w-full lg:min-h-auto: bg-gray-200 xl:bg-cover flex gap-28 ">
<div className="xl:pl-12 xl:pt-[150px] ">
  <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl font-Mersad">Learn More <br />About Our School</h1>
  <p className="font-Mersad mt-6">At Mkhosana Adventisits  Secondary School we are a Seventh-day <br /> Adventist Christian school committed to excellence in spiritual growth, <br /> academics, and character development. Our Christ-centered <br /> environment integrates faith with learning, promotes healthy living, and <br /> fosters a spirit of service - preparing students not just for academic <br /> success, but for meaningful lives of purpose on earth and for eternity."</p>
  <button className="bg-[#145A8D] w-40 h-11 cursor-pointer text-white mt-8">
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
      <section className="bg-white-100 w-full p-8 h-auto">
        <div className="flex items-center w-full justify-center gap-4 mt-24 ">
          <div className="relative h-170 w-160  flex items-center justify-center pl-29">
            <div className="absolute w-70 h-30 bg-[#C8B916] rounded-3xl border-4 border-white z-50 top-7 left-5">
              <div className="  flex justify-center items-center">
              <img className="relative bottom-12" src="/images/Medal.png" alt="" />
              </div>
              <div className="text-white text-[20px] flex justify-center absolute bottom-9 left-7">
              <h1>CELEBRATING  12 YEARS</h1>
              </div>
            </div>
            <div className="absolute w-70 h-90 bg-[#BFCBDA] rounded-4xl border-8 border-white z-50 left-5"></div>
            <div className="bg-gray-400 w-98 h-160 absolute rounded-4xl z-10"></div>
          </div>

          <div className=" w-160 h-170 flex flex-col  -gap-7">
            <h1 className="text-[#C8B916]">Our Story</h1>
            <h2 className="text-3xl text-black font-lighter">
              Our Adventist Story
            </h2>
            <p className=" text-1xl">
            At Mkhosana Adventist Secondary School we are more than just an educational institution—we are a Christ-centered community, dedicated to nurturing students in mind, body, and spirit, in harmony with the distinctive values of ,Seventh-day Adventist education. As an SDA school, we integrate ,faith, learning, and service ,into every aspect of school life, ensuring that students not only excel academically but also develop a deep, personal relationship with God. Our commitment to,holistic education, means we emphasize, character development, healthful living, and a life of service, grounded in Biblical truth and the teachings of the Adventist Church., 
            </p>

            <div className="flex items-center  gap-4 w-160">
              <div className=" bg-[#BFCBDA] h-60 w-70 rounded-2xl ">
                <div className="text-[11px] px-3 ">
                <div className="flex py-6 text-2xl gap-2">
            <span>
             <img className="w-6 h-6" src="/images/hist.png" alt="Call Us" />
           </span>
           FOUNDING STORY
              </div>
                <p>Inspired by Ellen White's counsel that "education should restore the image of God in the soul," a small group of devoted church members pooled their resources to establish Mkhosana Adventist Secondary School.</p>
                </div>
              </div>

              <div className="bg-[#145A8D] h-60 w-70 rounded-2xl">
                <div className="text-[11px] px-3 py-5 text-white">
                <div className="flex text-2xl gap-2">
            <span>
             <img className="w-6 h-6" src="/images/Difficulties (1).png" alt="Call Us" />
           </span>
           CHALLENGES
              </div>
                  <p className="py-2">1. Limited Funding, The pioneer team sacrificed personal salaries and held community fundraisers to purchase basic school supplies.</p>
                  <p>2.Skepticism from Community, Many local parents initially distrusted the "new church school," preferring government institutions .</p>
                  <p className="py-2">3.Facility Struggles, The first campus lacked proper labs, sports facilities, or even consistent electricity.</p>
                </div>
              </div>
            </div>
            <button className="bg-[#145A8D] h-13 w-36 ml-4 text-white">
              Donate
            </button>
          </div>
        </div>
      </section>

      {/* third section */}

      <section className="w-auto xl:h-[70vh]">
       <div className="bg-gradient-to-r from-[#145A8D] to-[#061927] xl:min-h-[55vh] w-full mt-36  ">

<div className="flex justify-center items-center gap-[170px] pt-14">
       <div>
        <div className="xl:w-24 xl:h-24 bg-white rounded-full"> 
        <img src="/images/Hand.png" alt="" />
        </div>
        <div className="text-white">
        <h2 className="text-1xl ml-8 xl:pt-5">FEES</h2>
        <p className="text-5xl ml-6 xl:pt-5">21</p>
        </div>
        </div>


      <div>
        <div className="xl:w-24 xl:h-24 bg-white rounded-full"> 
        <img src="/images/Bar chart.png" alt="" />
        </div>
        <div className="text-white">
        <h2 className="xl:text-1xl xl:ml-3 xl:pt-5">PASS RATE</h2>
        <p className="xl:text-5xl xl:ml-3.5 xl:pt-5">21</p>
        </div>
        </div>

        <div>
        <div className="xl:w-24 xl:h-24 bg-white rounded-full"> 
        <img src="/images/Read.png" alt="" />
        </div>
        <div className="text-white">
        <h2 className="xl:text-1xl xl:pt-5">TOTAL STUDENTS</h2>
        <p className="xl:text-5xl xl:ml-6 xl:pt-5">21</p>
        </div>
        </div>

<div>
        <div className="xl:w-24 xl:h-24 bg-white rounded-full"> 
        <img src="/images/Teach (1).png" alt="" />
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
      <section className="h-[120vh] w-full xl:px-20">
        <div>
          <h6 className="text-[#C8B916]">SUBJECTS OFFERED</h6>
          <p className="text-2xl mt-5">Learn more about our mission, values ,<br /> and community</p>
        </div>

<<<<<<< HEAD
        <table className="min-w-full table-auto border border-gray-300 bg-gray-100 mt-20 ">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-[#033253] uppercase">
            <th className="px-4 py-2 border w-60">FORM 1-4</th>
            <th className="px-4 py-2 border w-60">ARTS</th>
            <th className="px-4 py-2 border w-60">COMMERCIALS</th>
            <th className="px-4 py-2 border w-60">SCIENCES</th>
            <th className="px-4 py-2 border w-60">EXTRACURRICULAR <br /> ACTIVITIES</th>
           
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800 border-r-0 ">
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">History</td>
            <td className="px-4 py-2 border-r-1">Accounting</td>
            <td className="px-4 py-2 border-r-1">Physics</td>
            <td className="px-4 py-2 border-r-1">Computer Science</td>
            

          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">Mathematics</td>
            <td className="px-4 py-2 border-r-1">Business studies</td>
            <td className="px-4 py-2 border-r-1">Chemistry</td>
            <td className="px-4 py-2 border-r-1">Woodwork Practical</td> 
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">English Literature</td>
            <td className="px-4 py-2 border-r-1">Commerce</td>
            <td className="px-4 py-2 border-r-1">Biology</td>
            <td className="px-4 py-2 border-r-1">Metalwork Practical</td> 
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">Ndebele Literature</td>
            <td className="px-4 py-2 border-r-1">Economics</td>
            <td className="px-4 py-2 border-r-1">Geography</td>
            <td className="px-4 py-2 border-r-1">Music</td> 
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">English Language</td>
            <td className="px-4 py-2 border-r-1">English Language</td>
            <td className="px-4 py-2 border-r-1">English Language</td>
            <td className="px-4 py-2 border-r-1">Art</td> 
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">Ndebele Ulimi</td>
            <td className="px-4 py-2 border-r-1">Ndebele Ulimi</td>
            <td className="px-4 py-2 border-r-1">Ndebele Ulimi</td>
            <td className="px-4 py-2 border-r-1">Agriculture</td> 
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">Family Religious Studies</td>
            <td className="px-4 py-2 border-r-1">Shona Rurimi</td>
            <td className="px-4 py-2 border-r-1">History</td>
            <td className="px-4 py-2 border-r-1">Food Technology & Design</td> 
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">Heritage Studies</td>
            <td className="px-4 py-2 border-r-1">Combined Science</td>
            <td className="px-4 py-2 border-r-1">Family Religious Studies</td>
            <td className="px-4 py-2 border-r-1">Texture Technology & Design</td> 
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">Shona Rurimi</td>
            <td className="px-4 py-2 border-r-1">Family Religious Studies</td>
            <td className="px-4 py-2 border-r-1">Mathematics</td>
            <td className="px-4 py-2 border-r-1"></td> 
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">Combined Science</td>
            <td className="px-4 py-2 border-r-1">History</td>
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1"></td> 
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1">Sociology</td>
            <td className="px-4 py-2 border-r-1">Mathematics</td>
            <td className="px-4 py-2 border-r-1"></td>
            <td className="px-4 py-2 border-r-1"></td> 
          </tr>
        </tbody>
      </table>

        </section>

    
      
=======
        

      <section>
        charlotte
      </section>

      {/* fourth section */}
      <section>
        charlotte

      </section>
>>>>>>> 575ed86be09eb00284dfb3478883e84efef91b88

      {/* fifth section */}
      <section className="bg-[#145A8D] w-full h-[90vh] flex items-center justify-center text-white mb-20">
 <div className="relative h-100 w-160  flex items-center justify-center pl-29">
            <div className="absolute w-[274px] h-[317px]  z-50 left-0">
              <img className=" w-[274px] h-[317px] " src="/images/Rectangle 78.png" alt="" /></div>
            <div className=" w-[334px] h-[485px] absolute z-10">
              <img className="w-[334px] h-[485px]" src="/images/Rectangle 77.png" alt="" />
            </div>
          </div>

<div className="flex flex-col  -space-y-5 text-left">
  <h1 className="text-[#C8B916] text-xs font-extrabold">Adventist church</h1>
  <h2 className="text-4xl">The seventh day adventist <br /> church</h2>
  <p className="w-90 text-1xl font-extralight">The senthday adventist (SDA) Church is a global Protestant Christian denomination of Revelation 14. With over 22 million members worldwide, the chrch emphasizes</p>
  <li className="list">Holistic Health (Mind, Body, Spirit-*Thessalonians 5:23*)</li>
  <li className="list">Christ-Centered Education (Proverbs 22:6)</li>
  <li className="list">Service & Mission (*Mathew 28:19-20*)</li>
  <div className="flex items-center mt-8">
<img src="/images/Check.png" alt="about-img" />
<h2>TRUSTED ADVENTIS SCHOOL</h2>
  </div>
</div>
      </section>

      {/* sixthy section */}
      <section></section>
    </main>
  );

};

export default About;
