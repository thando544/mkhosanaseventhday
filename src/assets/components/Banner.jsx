import React from 'react'

function Banner() {
  return (
     <section className="banner">
        <div className="banner-content">
          <div className="align-right">
            <h1 className="bannerh1">
              {" "}
              <span>mkhosana adventist</span> <br /> secondary school
            </h1>
            <p>
              Founded in 2013, Mkhosana Secondary School is a Seventh-day
              Adventist secondary school committed to holistic education. We
              integrate faith, learning, and service to prepare students for
              lifelong success and leadership.
            </p>

            <div className="testimonial-banner relative mt-18 -ml-2.5">
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
              <h4 className="z-50 left-59 absolute text-blue-600 font-bold mb-5 -ml-5">
                826+ STUDENTS ENROLLED
              </h4>
            </div>
            <div className="flex gap-4 " id="buttons">
              <button className="enroll">Enroll</button>
              <button className="more">learn more</button>
            </div>
          </div>

          <div className="banner-left">
            <div className="components">
              <div className="component"></div>
              <div className="component2"></div>
              <div className="component3"></div>

              <div className="girl-onuniform">
                <img src="/images/girl.png" alt="mkhosana sda" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner
