import React from "react";
import { Link } from "react-router";

function About() {
  return (
    <main>
      {/* banner */}
      <section></section>
      {/* second section */}
      <section className="bg-white-100 w-full p-8 h-auto">
        <div className="flex items-center w-full justify-center gap-4 ">
          <div className="relative h-170 w-160  flex items-center justify-center pl-29">
            <div className="absolute w-70 h-30 bg-yellow-400 rounded-3xl border-4 border-white z-50 top-9 left-5"></div>
            <div className="absolute w-70 h-90 bg-gray-400 rounded-4xl border-8 border-white z-50 left-5"></div>
            <div className="bg-gray-400 w-98 h-160 absolute rounded-4xl z-10"></div>
          </div>

          <div className=" w-160 h-170 flex flex-col  -gap-7">
            <h1 className="text-yellow-400">Our Story</h1>
            <h2 className="text-3xl text-black font-lighter">
              Our Adventist Story
            </h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              doloremque accusamus amet dignissimos aperiam iure, adipisci
              dolorum, eum dicta incidunt culpa labore magnam in, quam est.
              Temporibus, recusandae! Expedita accusantium repellat quis
              asperiores sint ullam eligendi provident ipsa dolorum voluptatum
              commodi deserunt iste, distinctio nihil sequi quaerat rerum quasi
              dignissimos totam odit non inventore quas aperiam? Voluptatem
              dolorum nemo corrupti ipsa exercitationem, voluptatum ut nam unde
              reprehenderit sit est rem, consequatur doloribus? Voluptatum
              dolorem iure nam maxime incidunt. Inventore culpa obcaecati
              aspernatur facilis blanditiis, maxime unde deleniti autem
              molestiae esse excepturi corrupti, aliquam quasi, dolorum
              provident ex ipsa suscipit temporibus quod explicabo ad sint
              distinctio voluptate. Amet perferendis illum id unde error
              accusamus, suscipit saepe accusantium natus placeat veritatis,
              enim, tenetur exercitationem dignissimos eos. Nisi autem possimus
              magni!
            </p>

            <div className="flex items-center  gap-4 w-160">
              <div className="bg-gray-400 h-60 w-70 rounded-2xl"></div>

              <div className="bg-gray-400 h-60 w-70 rounded-2xl"></div>
            </div>
            <button className="bg-blue-700 h-13 w-36 ml-4 text-white">
              Donate
            </button>
          </div>
        </div>
      </section>

      {/* third section */}
      <section>
        charlotte
      </section>

      {/* fourth section */}
      <section>
        charlotte
      </section>

      {/* fifth section */}
      <section className="bg-blue-900 w-full h-130 flex items-center justify-center text-white">
 <div className="relative h-100 w-160  flex items-center justify-center pl-29">
            <div className="absolute w-70 h-40 bg-gray-400 rounded-4xl border-8 border-white z-50 left-5"></div>
            <div className="bg-gray-400 w-98 h-70 absolute rounded-4xl z-10"></div>
          </div>

<div className="flex flex-col  -space-y-5 text-left">
  <h1 className="text-yellow-400 text-xs font-extrabold">Adventist church</h1>
  <h2 className="text-4xl">The seventh day adventist <br /> church</h2>
  <p className="w-90 text-1xl font-extralight">The senthday adventist (SDA) Church is a global Protestant Christian denomination of Revelation 14. With over 22 million members worldwide, the chrch emphasizes</p>
  <li className="list">Holistic Health (Mind, Body, Spirit-*Thessalonians 5:23*)</li>
  <li className="list">Christ-Centered Education (Proverbs 22:6)</li>
  <li className="list">Service & Mission (*Mathew 28:19-20*)</li>
  <div className="flex items-center">
<img src="" alt="about-img" />
<h2>TRUSTED ADVENTIS SCHOOL</h2>
  </div>
</div>
      </section>

      {/* sixthy section */}
      <section></section>
    </main>
  );
}

export default About;
