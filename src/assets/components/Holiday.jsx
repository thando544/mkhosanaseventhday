import React, { Component } from 'react'

export class Holiday extends Component {
  render() {
    return (
    <section className='holiday'>
<div className='bg-blue-700 w-full h-83 mt-82 flex justify-between items-center p-23 relative'>

<div className='w-110 flex flex-col gap-3 '>
    <h1 className='text-white text-sm -mb-6'>HOLIDAY LESSONS FOR ALL CHILDREN</h1>
    <p className='text-white text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis debitis, provident sunt odit velit ullam temporibus iusto non quasi. Dicta expedita alias nihil repudiandae voluptate blanditiis ipsa rem iusto perspiciatis recusandae doloremque tempore dolores accusamus sequi molestiae eaque laboriosam voluptatum exercitationem, commodi natus vel harum?</p>
    <button className='bg-white w-32 h-11 cursor-pointer'>Learnmore</button>
</div>
<div className='absolute w-160 h-160  right-3 -top-76'>
<img src="/images/chair.png" alt="" className=' w-160 h-160' />
</div>
</div>
    </section>
    )
  }
}

export default Holiday
