import React, { Component } from 'react'

export class Facilities extends Component {
  render() {
    return (
  <section className='pt-19 pb-12 bg-gray-300'>
    <h2 className=' font-bold mb-6 ml-28 text-blue-700 text-sm'>FACILITIES</h2>
   <div className='flex items-center justify-center gap-14 '>
<div className='grid grid-cols-1 gap-6 '>

<div className='bg-blue-600 w-100 pl-6 h-60 rounded-3xl flex flex-col items-baseline  gap-0.5'>
    <h3 className='text-white font-bold border-b-4 border-white w-60 mt-18 '>CLASSROOMS</h3>
    <p className='text-white w-80 text-xs   mb-4'>At mkhosana adventist secondary school we prioritize durability, cost-efficiency and sustainablity in our infrastructure to ensure students learn in a safe, comfortable and functional environment. Here's why zinc sheet roofing and wall are ideal for our classrooms</p>

</div>
<div className='flex gap-2'>
<div className='w-50 h-70 relative rounded-3xl'>
  <img src="/images/about.png" alt="" className='object-cover h-70  rounded-3xl' />
  <div className='absolute inset-0 bg-black rounded-3xl transition-4 opacity-0 flex items-baseline-last justify-baseline flex-col pl-3' id='hover'>
<h2 className='text-white text-xl font-bold border-b-4 border-white'>comfortable</h2>
<p className='text-xs text-white'>Quiet Study Zones for focused individual work.
Group Discussion Areas for collaborative projects.
Reading Corners with natural lighting for relaxed reading</p>
  </div>
</div>
<div className='rounded-3xl shadow-lg bg-white w-50 flex flex-col items-baseline-last justify-baseline'>

    <h5 className='border-b-4 border-black text-left w-40 font-bold text-sm mt-19'>LIBRARY</h5>
    <p className='text-xs w-45'>Our morden classrooms are equipped with technology to enhance learning</p>
</div>

</div>

</div>


<div className=' w-100 h-140 rounded-3xl relative items-baseline'>
<img src="/images/center.png" alt="" className='w-100 h-140' />
  <div className='absolute inset-0 bg-black rounded-3xl transition-4 opacity-50  flex items-baseline-last justify-baseline flex-col pl-5' >
<h2 className='text-white text-xl font-bold border-b-4 w-70 border-white mt-90 -ml-65 z-30'>comfortable</h2>
<p className='text-xs text-white'>Quiet Study Zones for focused individual work.
Group Discussion Areas for collaborative projects.
Reading Corners with natural lighting for relaxed reading</p>
  </div>
</div>

<div className='flex flex-col gap-4'>
    <div className='h-70 w-100 rounded-3xl bg-white shadow-lg  flex items-baseline-last justify-baseline flex-col pl-5'>
<h1 className='border-b-4 border-black w-70 -ml-23 mt-9'>LIBRARY</h1>
<p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, et voluptates?</p>
    </div>
    <div className='h-60 w-100 bg-blue-600   rounded-3xl flex items-baseline-last justify-baseline flex-col pl-5'>
<h1 className='border-b-4 border-white w-70 -ml-23 mt-24 text-white'>CLASSROOMS</h1>
<p className='text-xs text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, illo accusantium?</p>
    </div>
</div>
   </div>
<button className='mt-9 ml-25 rounded-md font-semibold border-2 border-blue-600 w-36 h-12'>Donate</button>
  </section>
    )
  }
}

export default Facilities;
