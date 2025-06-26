import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
     <section className='bg-white justify-center items-center align-middle h-150'>
<div className='about-content h-130 gap-11'>
<div className='flex-col '>
<h1 className='text-blue-600 text-1xl tex'>About us</h1>
<h2 className='text-2xl' id='ptag'>learn more about our mission, values, <br /> and community</h2>
<p className='text-gray-500 w-2xl' id='lorem'>At Mkhosana Adventist Secondary School, we're dedicated to creating a supportive and inclusive community that fosters academic excellence, creativity, and personal growth.</p>
<div className='list'>
    <li>Respect and Kindness</li>
    <li>Academic Integrity</li>
    <li>Personal Responsibility</li>
</div>
<div className='bg-gray-300 w-2/4 h-3 rounded-2xl'>
    <div className='bg-green-500 h-3 w-9 rounded-2xl'></div>
</div>
<button className='bg-blue-600 w-32 h-9 text-white'>Readmore</button>
</div>

<div className='w-120  items-center justify-center' id='about-image'>
    <img src="/images/about.png" alt=""  />
    <div className="image-components">
    <div className="top-rectangle"></div>
<div className="second-rectangle"></div>
<div className="last-rectangle"></div>
</div>
</div>
</div>
     </section>
    )
  }
}
