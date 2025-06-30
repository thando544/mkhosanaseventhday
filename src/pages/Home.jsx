import React from "react";
import Banner from "../assets/components/Banner";
import Footer from "../assets/components/Footer";

function Home() {
  return (
    <main>
      <Banner />
      <section className="bg-white justify-center items-center align-middle h-150">
        <div className="about-content h-130 gap-11">
          <div className="flex-col ">
            <h1 className="text-blue-600 text-1xl tex">About us</h1>
            <h2 className="text-2xl" id="ptag">
              learn more about our mission, values, <br /> and community
            </h2>
            <p className="text-gray-500 w-2xl" id="lorem">
              At Mkhosana Adventist Secondary School, we're dedicated to
              creating a supportive and inclusive community that fosters
              academic excellence, creativity, and personal growth.
            </p>
            <div className="list">
              <li>Respect and Kindness</li>
              <li>Academic Integrity</li>
              <li>Personal Responsibility</li>
            </div>
            <div className="bg-gray-300 w-2/4 h-3 rounded-2xl">
              <div className="bg-green-500 h-3 w-60 rounded-2xl"></div>
            </div>
            <button className="bg-blue-600 w-32 h-9 text-white">
              Readmore
            </button>
          </div>

          <div className="w-120  items-center justify-center" id="about-image">
            <img src="/images/about.png" alt="" />
            <div className="image-components">
              <div className="top-rectangle"></div>
              <div className="second-rectangle"></div>
              <div className="last-rectangle"></div>
            </div>
          </div>
        </div>
      </section>
      {/* facilities */}
      <section className="pt-19 pb-12 bg-gray-300 sm:flex flex-col">
        <h2 className=" font-bold mb-6 ml-28 text-blue-700 text-sm">
          FACILITIES
        </h2>
        <div className="flex items-center justify-center gap-14 ">
          <div className="grid grid-cols-1 gap-6 sm:flex flex-col ">
            <div className="bg-blue-600 w-100 pl-6 h-60 rounded-3xl flex flex-col items-baseline  gap-0.5 sm:w-full">
              <h3 className="text-white font-bold border-b-4 border-white w-60 mt-18 ">
                CLASSROOMS
              </h3>
              <p className="text-white w-80 text-xs   mb-4">
                At mkhosana adventist secondary school we prioritize durability,
                cost-efficiency and sustainablity in our infrastructure to
                ensure students learn in a safe, comfortable and functional
                environment. Here's why zinc sheet roofing and wall are ideal
                for our classrooms
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-50 h-70 relative rounded-3xl">
                <img
                  src="/images/about.png"
                  alt=""
                  className="object-cover h-70  rounded-3xl"
                />
                <div
                  className="absolute inset-0 bg-black rounded-3xl transition-4 opacity-0 flex items-baseline-last justify-baseline flex-col pl-3"
                  id="hover"
                >
                  <h2 className="text-white text-xl font-bold border-b-4 border-white">
                    comfortable
                  </h2>
                  <p className="text-xs text-white">
                    Quiet Study Zones for focused individual work. Group
                    Discussion Areas for collaborative projects. Reading Corners
                    with natural lighting for relaxed reading
                  </p>
                </div>
              </div>
              <div className="rounded-3xl shadow-lg bg-white w-50 flex flex-col items-baseline-last justify-baseline">
                <h5 className="border-b-4 border-black text-left w-40 font-bold text-sm mt-19">
                  LIBRARY
                </h5>
                <p className="text-xs w-45">
                  Our morden classrooms are equipped with technology to enhance
                  learning
                </p>
              </div>
            </div>
          </div>

          <div className=" w-100 h-140 rounded-3xl relative items-baseline">
            <img src="/images/center.png" alt="" className="w-100 h-140" />
            <div className="absolute inset-0 bg-black rounded-3xl transition-4 opacity-50  flex items-baseline-last justify-baseline flex-col pl-5">
              <h2 className="text-white text-xl font-bold border-b-4 w-70 border-white mt-90 -ml-65 z-30">
                comfortable
              </h2>
              <p className="text-xs text-white">
                Quiet Study Zones for focused individual work. Group Discussion
                Areas for collaborative projects. Reading Corners with natural
                lighting for relaxed reading
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-70 w-100 rounded-3xl bg-white shadow-lg  flex items-baseline-last justify-baseline flex-col pl-5">
              <h1 className="border-b-4 border-black w-70 -ml-23 mt-9">
                LIBRARY
              </h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, et voluptates?
              </p>
            </div>
            <div className="h-60 w-100 bg-blue-600   rounded-3xl flex items-baseline-last justify-baseline flex-col pl-5">
              <h1 className="border-b-4 border-white w-70 -ml-23 mt-24 text-white">
                CLASSROOMS
              </h1>
              <p className="text-xs text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur, illo accusantium?
              </p>
            </div>
          </div>
        </div>
        <button className="mt-9 ml-25 rounded-md font-semibold border-2 border-blue-600 w-36 h-12">
          Donate
        </button>
      </section>
      {/*holiday  */}
      <section className="holiday">
        <div className="bg-blue-700 w-full h-83 mt-82 flex justify-between items-center p-23 relative">
          <div className="w-110 flex flex-col gap-3 ">
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
              Learnmore
            </button>
          </div>
          <div className="absolute w-160 h-160  right-3 -top-76">
            <img src="/images/chair.png" alt="" className=" w-160 h-160" />
          </div>
        </div>
      </section>
      {/* hello services */}
      <section className="p-14 pt-19">
        <h1 className="pb-7 text-blue-800 pl-2 text-xs font-bold">
          WHY CHOOSE US
        </h1>
        <div className=" w-full flex gap-15">
          <div className="relative  w-160">
            <div className="flex flex-col -gap-2">
              <div className="flex gap-3">
                <div className="bg-blue-800 h-35 w-54 rounded-2xl"></div>
                <div className="h-35 w-45 rounded-2xl bg-gray-200"></div>
              </div>
              <div className="flex gap-3">
                <div className="bg-blue-800 h-35 w-80 rounded-2xl"></div>
                <div className="h-35 w-45 rounded-2xl bg-gray-200"></div>
              </div>

              <div className="flex gap-3">
                <div className="bg-blue-800 h-35 w-100 rounded-2xl"></div>
                <div className="h-35 w-45 rounded-2xl bg-gray-200 text-center flex items-center justify-center">
                  <p className="" id="counter">
                    0
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/images/boy.png"
              alt=""
              className="absolute z-20 -top-19 h-140 -left-21 w-120"
            />
          </div>

          <div className=" flex flex-col gap-1">
            <h1 className="text-xs text-yellow-500 font-medium border-t-4 border-amber-500 border-l-4 -ml-9 h-7 w-9 p-9">
              ACHIEVEMENTS
            </h1>
            <div
              className="w-140 h-25 mt-2.5 text-balance pl-6 flex items-center rounded-2xl "
              id="tex"
            >
              <h3>
                <span className="text-yellow-500 font-bold">1.</span>Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus vero
                nostrum voluptates sint consequuntur ipsa.
              </h3>
            </div>
            <div
              className="w-140 h-25  pl-5 rounded-2xl bg-white text-balance"
              id="tex"
            >
              <h3>
                <span className="text-yellow-500 font-bold ">2.</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                vero nostrum voluptates sint consequuntur ipsa.
              </h3>
            </div>
            <div
              className="w-140 h-25 text-balance flex items-center pl-6 rounded-2xl"
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
