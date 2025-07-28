import React from "react";
import Banner from "../assets/components/Banner";
import { Link } from "react-router";

function Home() {
  return (
    <main>
      <Banner />
      <section className="bg-white justify-center items-center align-middle  p-9 ">
        <div className="about-content h-130 gap-1 md:gap-11">
          <div id="flex-col">
            <h1 className="text-[#145A8D] text-[12px]  md:text-1xl">
              About us
            </h1>
            <h2 className="text-[13px] md:text-2xl" id="ptag">
              learn more about our mission, values, <br /> and community
            </h2>
            <p className="text-gray-500   md:w-[80%]   ">
              At Mkhosana Adventist Secondary School, we're dedicated to
              creating a supportive and inclusive community that fosters
              academic excellence, creativity, and personal growth.
            </p>
            <div className="list">
              <li>Respect and Kindness</li>
              <li>Academic Integrity</li>
              <li>Personal Responsibility</li>
            </div>
            <p className="-mb-7 text-sm font-black">PASS RATE</p>
            <div
              className="bg-[#E4E9EF] w-2/4 h-3 rounded-2xl "
              id="progressbar"
            >
              <div className="bg-[#1B9897] h-3 w-60 rounded-2xl"></div>
            </div>
            <button
              className="bg-[#145A8D] w-32 h-9 md:mb-0 mb-[2rem] align-middle text-white"
              id="btn"
            >
            <Link to="/about">Readmore</Link>
            </button>
          </div>

          <div className="w-50  md:w-120 items-center justify-center relative">
            <img
              src="/images/about.png"
              alt=""
              className="w-[100%] h-[100%] object-center object-cover"
            />
            <div className="image-components ">
              <div className="top-rectangle flex flex-col items-center justify-center space-y-1 text-center p-2">
                <img src="/images/Vision.png" alt="" />
                <h2 className="text-xs font-bold">VISION</h2>
                <p className="text-xs font-extralight">
                  To develop future-ready leader who exemplify wisdom,
                  compassion and devotion to God's princeples in a changing
                  world
                </p>
              </div>
              <div className="second-rectangle flex flex-col items-center justify-center space-y-1 text-center p-2">
                <img src="/images/Goal.png" alt="" />
                <h2 className="text-white font-bold text-xs">MISSION</h2>
                <p className="text-xs text-white">
                  To educate and inspire students in a christian centeredd
                  environment, nurturing thier God given potential through
                  rigorous acadenics and services to humanity
                </p>
              </div>
              <div className="last-rectangle flex flex-col items-center justify-center space-y-1 text-center">
                <img src="/images/Star.png" alt="" />
                <h2 className="text-xs font-bold">GOAL</h2>
                <p className="text-xs">
                  Build strong relationship between the school, parents and the
                  wider community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* facilities */}
      <section className="pt-19 pb-12 bg-gray-300 sm:flex flex-col ">
        <h2 className=" font-bold mb-6 md:ml-[3em] ml-6 text-blue-700 text-sm ">
          FACILITIES
        </h2>
        <div className="md:grid md:grid-cols-3   md:gap-[] gap[1rem]  p-2  w-[100%] space-y-4 md:pl-[2.5em]">
          <div className="grid grid-cols-1 gap-6 sm:flex flex-col ">
            <div className="bg-blue-600 md:w-90 w-full px-[1rem] h-60 rounded-3xl flex flex-col items-baseline  gap-0.5 sm:w-full">
              <h3 className="text-white font-bold border-b-4 border-white md:w-60 w-full mt-18 ">
                CLASSROOMS
              </h3>
              <p className="text-white md:w-80 text-xs   mb-4">
                At mkhosana adventist secondary school we prioritize durability,
                cost-efficiency and sustainablity in our infrastructure to
                ensure students learn in a safe, comfortable and functional
                environment. Here's why zinc sheet roofing and wall are ideal
                for our classrooms
              </p>
            </div>
            <div className="md:grid md:grid-cols-2 grid-cols-1 md:w-90 space-x-1 space-y-[1rem] gap-6  ">
              <div className="md:w-45 w-full h-70 relative rounded-3xl">
                <img
                  src="/images/about.png"
                  alt=""
                  className="object-cover h-70 w-full  rounded-3xl"
                />
                <div className="absolute inset-0 bg-[#000c] rounded-3xl  opacity-100 flex items-baseline justify-end pb-8 flex-col pl-3">
                  <h2 className="text-white text-xl font-bold border-b-4 border-white">
                    comfortable
                  </h2>
                  <p className="text-xs text-white">
                    Quiet Study Zones for focused individual work. Group
                    Discussion Areas for collaborative projects. Reading Corners
                    with natural lighting for relaxed reading.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl shadow-lg bg-white h-70 px-[1rem] md:w-45 w-full flex flex-col items-baseline-last justify-baseline">
                <h5 className="border-b-4 border-black text-left md:w-full w-[90%] font-bold text-sm mt-19">
                  Technology Integration
                </h5>
                <p className="text-xs md:w-[100%] w-[90%]">
                  Computers with Internet access for research. Printing &
                  Photocopying services for academic needs.
                </p>
              </div>
            </div>
          </div>

          <div className=" md:w-90 md:h-135 w-full rounded-3xl relative items-baseline">
            <img src="/images/center.png" alt="" className="w-full h-full" />
            <div className="absolute inset-0 bg-black rounded-3xl transition-4 opacity-50  flex items-baseline-last justify-baseline flex-col px-[1rem] ">
              <h2 className="text-white text-xl font-bold border-b-4  border-white mt-90 w-full z-30">
                comfortable
              </h2>
              <p className="text-xs text-white">
                A Hub of Knowledge & InspirationAt Mkhosana Adventis Secondary
                School, our library is more than just a room with books—it’s a
                vibrant learning space designed to ignite curiosity, support
                academic growth, and nurture a love for reading and research. We
                take pride in offering a well-stocked, organized, and
                learner-friendly environment where students can explore, study,
                and discover new ideas.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-70 md:w-90 w-full rounded-3xl bg-white shadow-lg  flex items-baseline-last justify-baseline flex-col px-[1rem] ">
              <h1 className="border-b-4 border-black w-full  mt-9">
                Seventh-day Adventist Resources
              </h1>
              <p className="text-xs text-left">
                .A dedicated section for Bible study guides, Ellen G. White
                books, and devotional materials.
              </p>
            </div>
            <div className="h-60 md:w-90 w-full bg-blue-600   rounded-3xl flex items-baseline-last justify-baseline flex-col px-[1rem]">
              <h1 className="border-b-4 border-white w-full -ml-23 mt-24 text-white">
                CLASSROOMS
              </h1>
              <p className="text-xs text-white">
              Our modern classrooms are equipped with technology to enhance learning.
              </p>
            </div>
          </div>
        </div>
        <button className="mt-9 md:ml-[2em] ml-5 rounded-md font-semibold border-2 border-blue-600 w-36 h-12">
          <Link to="/comingSoon">Donate</Link>
        </button>
      </section>
      {/*holiday  */}
      <section className="holiday">
        <div className="bg-blue-700 md:w-full md:h-83 md:mt-82 flex justify-between items-center md:p-23 p-2 h-full relative">
          <div className="md:w-110 w-[100%] gap-8  flex flex-col md:gap-9 ">
            <h1 className="text-white text-sm -mb-6">
              HOLIDAY LESSONS FOR ALL CHILDREN
            </h1>
            <p className="text-white text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              facilis debitis, provident sunt odit velit ullam temporibus iusto
              non quasi. Dicta expedita alias nihil repudiandae voluptate
              blanditiis ipsa rem iusto perspiciatis recusandae doloremque
              tempore dolores accusamus sequi molestiae eaque laboriosam
              voluptatum exercitationem, commodi natus vel harum?
            </p>
            <button className="bg-white w-32 h-11 cursor-pointer ">
              <Link to="/comingSoon">Learnmore</Link>
            </button>
          </div>
          <div className="md:absolute md:w-160 md:h-160 md:flex  md:right-3 md:-top-76 hidden">
            <img
              src="/images/chair.png"
              alt=""
              className=" md:w-160 object-center object-cover w-full h-160"
            />
          </div>
        </div>
      </section>
      {/* hello services */}
      <section className="md:p-19 md:pt-21 pt-13">
        <h1 className="pb-13 text-blue-800 pl-2 text-xs font-bold mt-1">
          WHY CHOOSE US
        </h1>
        <div className=" w-full md:grid md:grid-cols-2 grid-cols-1  md:gap-15 space-y-3">
          <div className="relative  md:w-150 w-[100%] ">
            <div className="flex flex-col gap-2 p-5 md:p-0 w-[100%]">
              <div className="flex gap-3">
                <div className="bg-blue-800 md:h-35 h-[90px] w-54 rounded-2xl"></div>
                <div className="md:h-35 h-[90px] w-45 rounded-2xl bg-gray-200"></div>
              </div>
              <div className="flex gap-3">
                <div className="bg-blue-800 md:h-35 h-[90px] w-80 rounded-2xl"></div>
                <div className="md:h-35 h-[90px] w-45 rounded-2xl bg-gray-200"></div>
              </div>

              <div className="flex gap-3">
                <div className="bg-blue-800 md:h-35 h-[90px] w-100 rounded-2xl"></div>
                <div className="md:h-35 h-[90px] w-45 rounded-2xl bg-gray-200 text-center flex items-center justify-center">
                  <p className="" id="counter">
                    0
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/images/boy.png"
              alt=""
              className="absolute z-20 md:-top-32 top-0 md:h-140 h-[100%] md:-left-21 object-cover object-center w-[100%]"
            />
          </div>

          <div className=" flex flex-col gap-1  p-5  ">
            <h1 className="text-xs text-yellow-500 font-medium border-t-4 border-amber-500 border-l-4 md:-ml-9 ml-2 h-7 w-9 p-9 sm:text-red-600">
              ACHIEVEMENTS
            </h1>
            <div
              className="md:w-140 h-25 mt-2.5 text-balance pl-6 flex items-center rounded-2xl w-[100%] align-middle "
              id="tex"
            >
              <h3>
                <span className="text-yellow-500  font-bold">1.</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus vero nostrum voluptates sint consequuntur ipsa.
              </h3>
            </div>
            <div
              className="md:w-140 h-25  pl-5 rounded-2xl bg-white text-balance  w-[100%]"
              id="tex"
            >
              <h3>
                <span className="text-yellow-500 font-bold ">2.</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                vero nostrum voluptates sint consequuntur ipsa.
              </h3>
            </div>
            <div
              className="md:w-140  w-[100%] h-25 text-balance flex items-center pl-6 rounded-2xl"
              id="tex"
            >
              <h3>
                <span className="text-yellow-500 font-bold">3.</span>Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus vero
                nostrum voluptates sint consequuntur ipsa.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
