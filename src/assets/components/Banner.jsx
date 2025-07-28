import React from "react";
import { Link } from "react-router";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="align-right  space-y-6 w-[100%]">
          <h1 className="bannerh1">
            {" "}
            <span className="text-[#145A8D]">mkhosana adventist</span> <br /> secondary school
          </h1>
          <p className="md:pt-0">
            Founded in 2013, Mkhosana Secondary School is a Seventh-day
            Adventist secondary school committed to holistic education. We
            integrate faith, learning, and service to prepare students for
            lifelong success and leadership.
          </p>

          <div className="testimonial-banner flex relative sm:-mt-5 -mt-6 -ml-2.5 flex-col   sm:flex">
            <img
              src="/images/testimonial1.png"
              alt="img"
              className="absolute left-3 z-0"
            />
            <img
              src="/images/testimonial2.png"
              alt="img"
              className="absolute left-10 z-10"
            />
            <img
              src="/images/testimonial3.png"
              alt="img"
              className="absolute left-17 z-20"
            />
            <img
              src="/images/testimonial4.png"
              alt="img"
              className="absolute left-27 z-30"
            />
            <img
              src="/images/testimonial5.png"
              alt="img"
              className="absolute left-36 z-40"
            />
            <h4 className="z-50 left-59 absolute md:flex hidden  font-[12px] -mb-2 -ml-5">
              826+ STUDENTS ENROLLED
            </h4>
          </div>
          <div className="flex gap-4 " id="buttons">
            <button className="enroll bg-[#145A8D]"><Link to="/contact">Enroll</Link></button>
            <button className="more"><Link to="/about">learn more</Link></button>
          </div>
        </div>

        <div className="banner-left ">
          <div className="components">
            <div className="component"></div>
            <div className="component2"></div>
            <div className="component3"></div>

            <div className="girl-onuniform">
              <img src="/images/girl.png" alt="mkhosana sda" />
              <div className="absolute h-[140px] w-[140px] top-[7em] left-[3em] md:flex hidden ">
<img src="/images/stars.png" alt="mkhosana sda" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
