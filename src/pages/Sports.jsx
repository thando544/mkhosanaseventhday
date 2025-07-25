import Table from "../assets/components/Table";
import React from "react";
import { Link } from "react-router";

function Sports() {
  return (
    <div>
      <section className="relative font-Mersad overflow-x-hidden w-full  md:h-[90vh] z-0 h-[95vh]">
        <div
          className="bg-cover bg-no-repeat xl:bg-center bg-left-top w-full h-full"
          style={{ backgroundImage: "url('/images/banner .png')" }}
        >
          <div className="absolute inset-0 bg-[#033253] opacity-60 h-full"></div>

          <div className="relative flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-28 py-8 sm:py-12">
            <h1 className="text-white text-4xl xl:text-4xl leading-snug font-Mersad  mt-20">
              Where Dreams Are <span className="font-bold">Kicked</span>
              <br />
              Into Reality
            </h1>

            <p className="text-white text-base md:text-[20px] text-[14px] xl:text-1xl sm:text-lg max-w-3xl leading-relaxed font-Mersad mt-5 ">
              At Mkhosana Adventist Secondary School, we believe that physical
              excellence strengthens character, teamwork, and discipline-values
              rooted in our Seventh-day Adventist faith. Our sports programs go
              beyond competition; they nurture resilience, leadership, and a
              healthy lifestyle while fostering a spirit of camaraderie and fair
              play.
            </p>

            <button className="bg-white hover:bg-gray-400 mt-10 text-gray-700 rounded w-44 font-semibold py-2 px-6 shadow-lg transition duration-300">
              <Link to="/contact">Donate </Link>
            </button>
          </div>
        </div>
      </section>

      <section className=" bg-white px-4 min-h-[80vh] md:min-h-[60vh] w-full md:flex flex-col md:mt-0 xl:mt-20 mt-20 gap-5">
        <div className="text-center ">
          <h2 className="text-xl text-gold font-semibold text-[#C8B916]">
            Our Team
          </h2>
          <div className="flex justify-center">
            <img
              className="hidden xl:block  absolute xl:mr-[1000px] "
              src="/images/Frame 14.png"
              alt=""
            />
          </div>
          <div className="bg-[#033253] "></div>
        </div>

        <div className="xl:flex xl:flex-row flex flex-col justify-center items-center xl:ml-24 ml-0 md:flex-row ">
          <div className=" xw-full xl:w-1/3 flex justify-center ml-20 md:lg-0">
            <img
              src="/images/grounds.png"
              alt="Soccer Player"
              className=" xl:mt-40 rounded-lg md:hidden xl:block hidden :mr-36 object-cover xl:h-[500px] w-[250px] " 
            />
          </div>

          <div className=" md:w-1/4 flex flex-row justify-center  relative gap-5  ">
            <img
              src="/images/Rectangle 58.png"
              alt="Soccer Player Center"
              className="xl:rounded-2xl rounded-2xl md:hidden xl:block sm:block object-contain h-[250px] lg:w-[250px]   lg:h-[480px]"
            />
            <img
              className="xl:hidden md:hidden block rounded-2xl h-[250px] w-[150px] md:w-[00px]"
              src="/images/grounds.png"
              alt=""
            />
          </div>

          <div className="xl:w-[730px] xl:right-[100px] md:right-[110px] md:max-w-[900px]  w-full xl:mt-2 mt-14 md:w-full md: bg-gray-100 rounded-lg p-6 shadow-md relative h-[350px] ">
            <h3 className="text-sm text-[#145A8D] font-bold mb-2 uppercase">
              Join Us
            </h3>
            <h4 className="text-lg font-semibold mb-3">
              Come Cheer On Our Team
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tryouts Held at the start of each team. All skill levels welcome!
              <br />
              Recent Support: Volunteer as a coach or cheerleader.
              <br />
              Do you not know that in a race all the runners run, but only one
              gets the prize? Run in such a way as to get the prize. — 1
              Corinthians 9:24
            </p>
            <div className="xl:flex  flex justify-between mt-5 ">
              <button className="mt-6  px-7 bg-[#145A8D] hover:bg-blue-800 text-white text-sm rounded-[6px]">
                Read More
              </button>

              <img
                src="/images/pattern (1).png"
                alt=""
                className="w-20 sm:w-15 md:w-20"
              />
            </div>
            <div className="flex xl:mt-24 mt-8 md:mt-32 xl:gap-28 xl:ml-3 gap-24 justify-center">
              <div className="text-[#145A8D]">
                <h2 className="text-4xl flex flex-col text-center font-bold">
                  15
                  <p className="text-[16px] font-light">Years Experience</p>
                </h2>
              </div>

              <div className="text-[#145A8D]">
                <h2 className="text-4xl font-bold">40</h2>
                <p className="font-light">Players</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center text-center xl:mt-16 mt-28 md:">
          <h6 className="text-[#C8B916]">Partners</h6>
          <h3 className="xl:text-3xl text-gold">Our Official Partners</h3>
          <div className="xl:px-[350px] flex flex-col text-center px-5 md:px-[130px]">
            <p className="mt-7 text-[12px] xl:text-[16px] md:text-[18px]">
              At Mkhosana Adventist Secondary School, we’re proud to collaborate
              with industry-leading organizations that share our passion for
              nurturing talent, promoting health, and advancing sports
              excellence. These partnerships provide our athletes with top-tier
              gear, training resources, and competitive opportunities aligned
              with our Adventist values.
            </p>
          </div>

          <div className="mt-10 xl:gap-28 gap-14 md:gap-32  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-items-center">
            <img
              src="/images/Ellipse 9 (2).png"
              alt="partner 1"
              className="w-24 xl:w-22"
            />
            <img
              src="/images/Ellipse 10 (2).png"
              alt="partner 2"
              className="w-24 xl:w-32"
            />
            <img
              src="/images/Ellipse 11.png"
              alt="partner 3"
              className="w-24 xl:w-32"
            />
            <img
              src="/images/Ellipse 12 (1).png"
              alt="partner 4"
              className="w-24 xl:w-32"
            />
          </div>
        </div>
      </section>

      <section className="xl:h-[70vh]">
        <div className="bg-[#165C89] xl:mt-[200px] mt-9 xl:p-20  px-3 md:px-10 xl:h-[60vh] w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white xl:mb-56">
            <h2 className="text-3xl md:text-4xl font-bold xl:mb-6 xl:mt-0 mt-8">
              Support Our Team
            </h2>
            <p className="xl:mb-8 leading-relaxed text-base md:text-lg order-2 xl:mt-0 mt-8">
              At Mkhosana Adventist Secondary School, our athletes compete with
              passion, integrity, and purpose. You can help us nurture their
              God-given talents through these meaningful ways:
            </p>
            <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:bg-gray-200 transition xl:mt-0 mt-10">
              DONATE
            </button>
          </div>

          <div className=" xl:bottom-25 relative xl:mt-0 mt-20 flex flex-col gap-4 items-end order-1">
            <div className="bg-blue-200 xl:min-h-24 w-52 sm:w-[300px] xl:min-w-[300px] md:w-[200px] min-h-24 rounded-lg z-0"></div>
            <div className="bg-blue-200 xl:min-h-24 w-4/5 rounded-lg min-h-20 z-0"></div>
            <div className="bg-blue-200 xl:min-h-24 w-full rounded-lg min-h-20 z-0"></div>

            <img
              src="/images/uniform boy.png"
              alt="Athlete in uniform"
              className="absolute bottom-0 xl:bottom-0 right-0 xl:left-24  md:left-10 left-3 z-10 
              md:min-h-[500px] object-fit"
            />
          </div>
        </div>
      </section>

      <Table />
    </div>
  );
}

export default Sports;
