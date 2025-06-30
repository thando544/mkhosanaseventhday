import React from "react";
import Table from "../assets/components/Table";

function Sports() {
  return (
    // banner
    <div>
      <section className="relative font-Mersad overflow-hidden xl:w-full xl:h-[90vh] ">
        <div
          className="xl:bg-cover  lg:bg-cover  md:bg-cover sm:bg-cover xl:bg-center lg:bg-center md:bg-center sm:bg-center  xl:min-h-[117vh] relative"
          style={{ backgroundImage: "url('/images/banner .png')" }}
        >
          <div className="absolute inset-0 bg-darkblue bg-opacity-55"></div>

          <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-28 pt-36">
            <h1 className="text-white text-3xl sm:text-5xl font-bold leading-snug xl:">
              Where Dreams Are <span className="font-bold">Kicked</span>
              <br />
              Into Reality
            </h1>

            <p className="text-white text-base sm:text-lg max-w-3xl leading-relaxed lg:">
              At Mkhosana Adventist Secondary School, we believe that physical
              excellence strengthens character, teamwork, and discipline-values
              rooted in our Seventh-day Adventist faith. Our sports programs go
              beyond competition; they nurture resilience, leadership, and a
              healthy lifestyle while fostering a spirit of camaraderie and fair
              play.
            </p>

            <button
              className="bg-white hover:bg-gray-400 text-gray-700 rounded w-40 font-semibold py-2 px-6  shadow-lg transition duration-300 lg:mb-20
       "
            >
              Donate
            </button>
          </div>
        </div>

        <div className="xl:h-[25vh]">
          <div className="xl:mt-48 lg:mt-32 xl:left-[500px] absolute z-20  transform -translate-x-1/2 top-[85vh] sm:top-[80vh] md:top-[75vh] w-full px-4 sm:px-0">
            <div className="max-w-lg mx-auto xl:h-[160px] bg-white text-black rounded-1.5xl shadow">
              <h1 className="text-center text-2xl text-darkblue font-semibold ">
                Next Match
              </h1>
              <div className="flex justify-center items-center gap-10">
                <img
                  src="/images/logo 2.png"
                  alt="Team A"
                  className="w-20 h-auto"
                />
                <h1 className="text-4xl text-gold font-bold">VS</h1>
                <img
                  src="/images/falconlogo 1.png"
                  alt="Team B"
                  className="w-20 h-auto"
                />
              </div>
            </div>
          </div>

          <div className=" xl:mt-40 lg:mt-48 absolute z-10 xl:left-[900px] transform -translate-x-1/2 top-[85vh] sm:top-[95vh] md:top-[92vh] w-full px-4 sm:px-0">
            <div className="max-w-lg mx-auto bg-customgray text-black px-6 py-5 rounded-1.5xl shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src="/images/location (1).png"
                  alt="Location"
                  className="w-6 h-6 xl:ml-24"
                />
                <h6 className="text-darkblue font-bold text-lg ">
                  MASS SCHOOL GROUNDS
                </h6>
              </div>
              <div className="flex items-center gap-4 mt-4 xl:ml-24">
                <img src="/images/Calendar.png" alt="" className="w-6 h-6" />

                <img
                  src="/images/pattern (1).png"
                  alt=""
                  className="xl:ml-48 y"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


{/* our team */}
<section className="py-20 bg-white px-4 md:px-20 xl:h-[100vh] xl:w-[100%]">
    
      <div className="text-center ">
        <h2 className="text-xl text-gold font-semibold ">Our Team</h2>
        <div className="flex justify-center">
          <img className="xl:mr-[1000px] lg:mr-[750px]" src="/images/Frame 14.png"  alt="" />
        </div>
      </div>

  
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
    
        <div className=" xw-full md:w-1/3 flex justify-center">
          <img
            src="/images/grounds.png"
            alt="Soccer Player" 
            className=" xl:ml-72 xl:mt-40 rounded-lg object-cover h-[480px] w-[250px] lg:h-[450px] lg:mt-32 lg:ml-[50px]"
          />
        </div>

        
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/images/Rectangle 58.png"
            alt="Soccer Player Center"
            className="xl:ml-36 rounded-lg object-cover h-[490px] w-[250px] lg:h-[450px]"
          />
        </div>

  
        <div className="xl:w-[650px] xl:h-[300px] xl:right-[90px] w-full md:w-1/3 bg-gray-100 rounded-lg p-6 shadow-md relative min-h-[320px] ">
          <h3 className="text-sm text-gray-700 font-bold mb-2 uppercase">Join Us</h3>
          <h4 className="text-lg font-semibold mb-3">Come Cheer On Our Team</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Tryouts Held at the start of each team. All skill levels welcome!
            <br />
            Recent Support: Volunteer as a coach or cheerleader.
            <br />
            Do you not know that in a race all the runners run, but only one gets the prize?
            Run in such a way as to get the prize. — 1 Corinthians 9:24
          </p>

          <button className="mt-6 px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm rounded-1xl">
            Read More
          </button>

        
          <div className="xl:flex justify-end  ">
            <img src="/images/pattern (1).png" alt="" className="w-16 sm:w-20 md:w-24" />
          </div>
        </div>
      </div>

  
      <div className="xl:ml-[700px] xl:absolute top-[1600px] flex flex-col sm:flex-row justify-center items-center gap-44 text-center">
        <div>
          <h3 className="text-5xl font-bold text-blue-900 xl:">15</h3>
          <p className="text-sm text-gray-600">Years Experience</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-blue-900">40</h3>
          <p className="text-sm text-gray-600">Players</p>
        </div>
      </div>

    <div className=" xl:flex-col xl:justify-center xl:items-center xl:text-center xl:mt-10">
      <h6 className="">Partners</h6>
      <h3 className="xl:text-3xl text-gold">Our Official Partners</h3>
      <p className="mt-7">At Mkhosana Adventist Secondary School, we’re proud to collaborate with <br /> industry-leading organizations that share our passion for nurturing talent, <br /> promoting health, and advancing sports excellence. These partnerships <br /> provide our athletes with top-tier gear, training resources, and competitive opportunities <br /> aligned with our Adventist values..</p>
<div className="flex justify-center items-center gap-40">
  <img src="/images/Ellipse 9 (2).png" alt="" />
  <img src="/images/Ellipse 10 (2).png" alt="" />
  <img src="/images/Ellipse 11.png" alt="" />
  <img src="/images/Ellipse 12 (1).png" alt="" />
</div>
    </div>
    </section>


    {/* sports section */}
    <section className="xl:h-[70vh]">
      <div className="bg-[#165C89] xl:mt-[700px] xl:p-20 px-6 py-16 md:px-20  md:mt-20 xl:h-[60vh] w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="text-white xl:mb-56">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support Our Team
          </h2>
          <p className="mb-8 leading-relaxed text-base md:text-lg">
            At Mkhosana Adventist Secondary School, our athletes compete with
            passion, integrity, and purpose. You can help us nurture their
            God-given talents through these meaningful ways:
          </p>
          <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:bg-gray-200 transition">
            DONATE
          </button>
        </div>

        
        <div className=" xl:bottom-20 relative flex flex-col gap-4 items-end">
          <div className="bg-blue-200 h-24 w-full sm:w-[300px] rounded-lg z-0"></div>
          <div className="bg-blue-200 h-24 w-4/5 rounded-lg z-0"></div>
          <div className="bg-blue-200 h-24 w-full rounded-lg z-0"></div>

          <img
            src="/images/uniform boy.png"
            alt="Athlete in uniform"
            className="absolute bottom-0 right-0 xl:left-24 md:left-24 z-10"
          />
        </div>
      </div>
    </section>

{/* table */}
<Table/>

    </div>
  );
}

export default Sports;
