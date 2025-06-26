import React, { Component } from 'react'

export class Services extends Component {
  render() {
    return (
<section className='p-14 pt-19'>
   <h1 className='pb-7 text-blue-800 pl-2 text-xs font-bold'>WHY CHOOSE US</h1>
<div className=' w-full flex gap-15'>
 
<div className='relative  w-160'>
<div className='flex flex-col -gap-2'>
<div className='flex gap-3'>
<div className='bg-blue-800 h-35 w-54 rounded-2xl'></div>
<div className='h-35 w-45 rounded-2xl bg-gray-200'></div>
</div>
<div className='flex gap-3'>
<div className='bg-blue-800 h-35 w-80 rounded-2xl'></div>
<div className='h-35 w-45 rounded-2xl bg-gray-200'></div>
</div>

<div className='flex gap-3'>
<div className='bg-blue-800 h-35 w-100 rounded-2xl'>

</div>
<div className='h-35 w-45 rounded-2xl bg-gray-200 text-center flex items-center justify-center'>
    <p className='' id='counter'>0</p>

</div>
</div>
</div>
<img src="/images/boy.png" alt="" className='absolute z-20 -top-19 h-140 -left-21 w-120' />
</div>

<div className=' flex flex-col gap-1'>
    <h1 className='text-xs text-yellow-500 font-medium border-t-4 border-amber-500 border-l-4 -ml-9 h-7 w-9 p-9'>ACHIEVEMENTS</h1>
<div className='w-140 h-25 mt-2.5 text-balance pl-6 flex items-center rounded-2xl ' id='tex'>
<h3><span className='text-yellow-500 font-bold'>1.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero nostrum voluptates sint consequuntur ipsa.</h3>
</div>
<div className='w-140 h-25  pl-5 rounded-2xl bg-white text-balance' id='tex'>
<h3><span className='text-yellow-500 font-bold '>2.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero nostrum voluptates sint consequuntur ipsa.</h3>
</div>
<div className='w-140 h-25 text-balance flex items-center pl-6 rounded-2xl' id='tex'>
<h3><span className='text-yellow-500 font-bold'>3.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero nostrum voluptates sint consequuntur ipsa.</h3>
</div>

</div>
</div>
</section>



    )
  }
}

export default Services;
