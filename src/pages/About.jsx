import React from "react";
import { Link } from "react-router";

function About() {
  return (
    <main>
      {/* banner */}
      <section
        className="w-full md:h-screen h-[110vh] md:pl-8 pr-0 md:pt-[9em] pt-[5rem]  px-3.5 bg-[#f7f7f7] "
     
      >
        <div className="grid md:grid-cols-2 justify-center items-center grid-cols-1 w-full">
          <div className="md:order-1 order-2 md:pt-0 pt-[3rem] ">
            <h1 className="md:font-bold text-4xl font-Mersad">
              Learn More <br />
              About Our School
            </h1>
            <p className="font-Mersad pt-[1rem]  xl ">
              At Mkhosana Adventisits Secondary School we are a Seventh-day{" "}
              Adventist Christian school committed to excellence in spiritual
              growth, academics, and character development. Our Christ-centered
              environment integrates faith with learning, promotes healthy
              living, and fosters a spirit of service - preparing students not
              just for academic success, but for meaningful lives of purpose on
              earth and for eternity."
            </p>
            <button className="bg-[#145A8D] w-40 h-11  cursor-pointer text-white mt-8 xl:ml-auto lg:ml-11">
              <Link to="/comingSoon">more</Link>
            </button>
          </div>
          <div className="md:order-2 order-1 relative ">
            <img
              src="/images/Rectangle 70.png "
              alt="mkhosanasda"
              className="shadow-gray-400 rounded-l-full w- shadow-lg"
            />

            <img
              src="/images/pngwing.com.png"
              alt=""
              className="absolute -top-18 left md:left-12 md:-top-20"
             
            />

            <img
              src="/images/BOOKS 2.png"
              alt=""
              className="absolute md:top-[18rem] top-[7em] left-[25%]"
            
            />
          </div>
        </div>
      </section>
      {/* second section    */}
      <section className="bg-white-100 w-full h-auto md:h-[80vh]w-full px-[2rem] py-3">
        <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 ">
          <div
            className="relative xl:h-170 lg:h-[120px] xl:w-160   md:flex hidden items-center xl:justify-center "
            id="related"
          >
            <div className=" absolute md:top-[9em] h-25 md:left-[1rem] left-[6rem] border-8 border-white w-70 z-90 rounded-4xl bg-[#C8B916] ">
              <div className=" Xl:flex xl:justify-center xl:items-center">
                <img
                  className="xl:relative xl:bottom-12 md:left-24 lg:relative lg:bottom-13 lg:left-24 "
                  src="/images/Medal.png"
                  alt=""
                />
              </div>
              <div className="xl:text-white xl:text-[20px] md:flex xl:absolute xl:bottom-9 xl:left-7 lg:text-white lg:text-[2px]">
                <h1>CELEBRATING 12 YEARS</h1>
              </div>
            </div>
            <div className="absolute md:w-70 h-76 bg-[#BFCBDA] md:rounded-[2.1rem] z-50 md:left-5 left-[30%] md:top-[16rem] ">
              <img src="/images/aboute.png" alt="commingsoon" className="w-[100%] h-[100%] object-cover object-center rounded-[2.1rem]" />
            </div>
            <div className="bg-gray-400 md:ml-[10em] w-98  h-130 absolute rounded-[2.5rem]  z-10">

              <img src="/images/Rectangle71.png" alt="about image" className="object-center object-cover rounded-[2.5rem] h-[100%] w-[100%]" />
            </div>
          </div>

          <div className="md:w-[90%] xl:h-170 xl:flex xl:flex-col xl:gap-7 ">
            <h1 className="text-[#C8B916] xl:justify-center lg:ml-5">
              Our Story
            </h1>
            <h2 className="xl:text-3xl text-black font-lighter lg:text-2xl lg:ml-5">
              Our Adventist Story
            </h2>
            <p className="xl:text-1xl lg:text-[14px] lg:ml-5 " id="about-text">
              At Mkhosana Adventist Secondary School we are more than just an
              educational institution—we are a Christ-centered community,
              dedicated to nurturing students in mind, body, and spirit, in
              harmony with the distinctive values of ,Seventh-day Adventist
              education. As an SDA school, we integrate ,faith, learning, and
              service ,into every aspect of school life, ensuring that students
              not only excel academically but also develop a deep, personal
              relationship with God. Our commitment to,holistic education, means
              we emphasize, character development, healthful living, and a life
              of service, grounded in Biblical truth and the teachings of the
              Adventist Church.,
            </p>

            <div className=" md:gap-4 space-y-[1rem] md:w-160 w-full grid md:grid-cols-2 grid-cols-1 pb-[1rem] pt-[1rem]">
              <div className=" bg-[#BFCBDA] md:h-60 md:w-70 w-full h-60 rounded-2xl ">
                <div className="text-[11px] px-3 ">
                  <div className="flex py-6 text-2xl gap-2">
                    <span>
                      <img
                        className="w-6 h-6"
                        src="/images/hist.png"
                        alt="Call Us"
                      />
                    </span>
                    FOUNDING STORY
                  </div>
                  <p>
                    Inspired by Ellen White's counsel that "education should
                    restore the image of God in the soul," a small group of
                    devoted church members pooled their resources to establish
                    Mkhosana Adventist Secondary School.
                  </p>
                </div>
              </div>

              <div className="bg-[#145A8D] md:h-60 md:w-70 w-full  rounded-2xl">
                <div className="text-[11px] px-3 py-5 text-white">
                  <div className="flex text-2xl gap-2">
                    <span>
                      <img
                        className="w-6 h-6"
                        src="/images/Difficulties (1).png"
                        alt="Call Us"
                      />
                    </span>
                    CHALLENGES
                  </div>
                  <p className="py-2">
                    1. Limited Funding, The pioneer team sacrificed personal
                    salaries and held community fundraisers to purchase basic
                    school supplies.
                  </p>
                  <p>
                    2.Skepticism from Community, Many local parents initially
                    distrusted the "new church school," preferring government
                    institutions .
                  </p>
                  <p className="py-2">
                    3.Facility Struggles, The first campus lacked proper labs,
                    sports facilities, or even consistent electricity.
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-[#145A8D] h-13 w-36 ml-4 text-white">
              <Link to="/comingSoon">Donate</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="w-auto h-[65vh]  xl:w-auto xl:h-[70vh]">
        <div
          className="bg-gradient-to-r from-[#145A8D] to-[#061927]  w-full mt-0 lg:mt-20 md:mt-16 sm:mt-12 xl:min-h-[55vh] xl:w-full xl:mt-36 md:px-[7em] px-0"
          id="flex-box"
        >
          <div className="md:grid md:grid-cols-4 grid-cols-2 grid gap-[4rem] md:gap-1 md:justify-center   pt-10  lg:pt-14 md:pt-14">
            <div className="text-center">
              <div className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24 bg-white rounded-full mx-auto">
                <img
                  src="/images/Hand.png"
                  alt=""
                  className="w-17 h-17 object-contain p-2"
                />
              </div>
              <div className="text-white mt-4 md:mt-4">
                <h2 className="text-sm md:text-base lg:text-lg xl:text-1xl xl:ml-8 xl:pt-5">
                  FEES
                </h2>
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl:ml-6 xl:pt-5">
                  $190
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24 bg-white rounded-full mx-auto">
                <img
                  src="/images/Bar chart.png"
                  alt=""
                  className="w-17 h-17 object-contain p-2"
                />
              </div>
              <div className="text-white mt-4 md:mt-4">
                <h2 className="text-sm md:text-base lg:text-lg xl:text-1xl xl:ml-3 xl:pt-5">
                  PASS RATE
                </h2>
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl:ml-3.5 xl:pt-5">
                  98%
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24 bg-white rounded-full mx-auto">
                <img
                  src="/images/Read.png"
                  alt=""
                  className="w-17 h-17 object-contain p-2"
                />
              </div>
              <div className="text-white mt-4 md:mt-4">
                <h2 className="text-sm md:text-base lg:text-lg xl:text-1xl xl:pt-5">
                  TOTAL STUDENTS
                </h2>
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl:ml-6 xl:pt-5">
                  500
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24 bg-white rounded-full mx-auto">
                <img
                  src="/images/Teach (1).png"
                  alt=""
                  className="w-17 h-17 object-contain p-2"
                />
              </div>
              <div className="text-white mt-4 md:mt-4">
                <h2 className="text-sm md:text-base lg:text-lg xl:text-1xl xl:ml-3.5 xl:pt-5">
                  TEACHERS
                </h2>
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl:ml-5 xl:pt-5">
                  5:1
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:h-[120vh]  w-full xl:px-20 py-6 md:flex md:flex-col hidden ">
        <div className="px-4">
          <h6 className="text-[#C8B916]">SUBJECTS OFFERED</h6>
          <p className="text-2xl mt-5">
            Learn more about our mission, values ,<br /> and community
          </p>
        </div>

        <div className="overflow-x-auto mt-10">
  <table className="min-w-full table-auto border border-gray-300 bg-gray-100 mt-10">
    <thead>
      <tr className="bg-gray-100 text-left text-sm text-[#033253] uppercase">
        <th className="px-4 py-2 border w-60">FORM 1-4</th>
        <th className="px-4 py-2 border w-60">ARTS</th>
        <th className="px-4 py-2 border w-60">COMMERCIALS</th>
        <th className="px-4 py-2 border w-60">SCIENCES</th>
        <th className="px-4 py-2 border w-60">
          EXTRACURRICULAR <br /> ACTIVITIES
        </th>
      </tr>
    </thead>
    <tbody className="text-sm text-gray-800 border-r-0">
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
    </tbody>
  </table>
  </div>
      </section>
      <section className="bg-[#145A8D] w-full md:h-[90vh] h-[75vh] md:pb-[3em]  md:grid md:grid-cols-2 md:px-[9em] grid-cols-1  items-center justify-center text-white mb-20">
        <div className="relative  h-100  hidden md:block    items-center justify-center md:pl-29">
          <div className="absolute w-[274px] h-[317px]   z-50 md:left-0 left-[29%] top-[10%] hidden md:block">
            <img
            
              src="/images/Rectangle 78.png"
              alt=""
              id="image"

            />
          </div>
          <div className=" md:w-[334px] h-[485px] hidden md:block absolute z-10 md:left-12 left-[10%] w-full ">
            <img
              src="/images/Rectangle 77.png"
              alt=""
              className="w-[334px] h-[485px]"
            />
          </div>
        </div>

        <div className="md:flex text-center  flex-col pt-[4em]  space-y-5 w-full md:text-left">
          <h1 className="text-[#C8B916] md:text-xs text-[1.4rem] font-extrabold">
            Adventist church
          </h1>
          <h2 className="text-4xl">
            The seventh day adventist <br /> church
          </h2>
          <p className="md:w-90 w-full px-5 text-1xl font-extralight">
            The senthday adventist (SDA) Church is a global Protestant Christian
            denomination of Revelation 14. With over 22 million members
            worldwide, the chrch emphasizes
          </p>
          <li className="list">
            Holistic Health (Mind, Body, Spirit-*Thessalonians 5:23*)
          </li>
          <li className="list">Christ-Centered Education (Proverbs 22:6)</li>
          <li className="list">Service & Mission (*Mathew 28:19-20*)</li>
          <div className="flex items-center md:mt-8 w-full justify-center md:justify-start">
            <img src="/images/Check.png" alt="about-img" />
            <h2>TRUSTED ADVENTIS SCHOOL</h2>
          </div>
        </div>
      </section>
      <section
        className="w-[100%] md:h-[86vh] h-[70vh] pb-[2em]  md:flex flex-col items-center justify-center md:p-16 p-2 md:py-5 py-2.5 "
  
      >
        <div className="md:flex  w-[100%] h-[100%] object-center object-cover md:ml-20   ">
          <div className="md:w-[50%] w-full flex flex-col" id="justify-content">
            <h1>OUR TEACHERS</h1>
            <h2 className="md:text-5xl text-2xl">
              Dedicated Educators: Inspiring <br /> Minds, Nurturing Faith
            </h2>
            <p className="md:w-[90%] w-full md:mt-[1.2rem] mt-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              quia eos dignissimos magni pariatur dolorem sit non a explicabo.
              Corporis sed tempora numquam sapiente quasi a deleniti temporibus
              animi blanditiis obcaecati. Totam, dolores quaerat eveniet debitis
              cum soluta eius eos, explicabo distinctio facere voluptatibus
              autem velit suscipit facilis.
            </p>
            <div
              className="md:w-[65%] md:mt-[1.2rem] w-full rounded-4xl h-[230px] relative"
              id="rounded"
            >
              <Link to="/comingSoon">
                <img
                  src="https://res.cloudinary.com/dnqjax5ut/image/upload/v1752151643/Subtract_sxhrnj.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div
            className=" md:w-[50%] w-full md:flex items-center justify-center relative pl-24 hidden "
            id="hidden-image"
          >
            <div className="md:w-[55%] w-full h-[65%] bg-[#bfbfbf] rounded-3xl border-8 border-white  absolute top-[150px] left-[-40px] z-50 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dnqjax5ut/image/upload/v1752151644/teacher_pup8d6.png"
                alt=""
                className="mb-8"
              />
            </div>

            <div className="w-[55%] h-[65%] bg-gradient-to-t from-[#d6caca] to-gray-700 rounded-3xl  shadow-2xl absolute to[-50px] left[3%] z-10"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
