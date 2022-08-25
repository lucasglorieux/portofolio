import React from 'react'
import Hungry1 from '../assets/t1.png';
import Immo from '../assets/immoapp.png';
import Lg from '../assets/lgtrip.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#a4b0be] bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-[#a4b0be] border-[#ac00ff]'>Work</p>
            <p className='py-6'>Here you can check my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

{/* Grid Item */}
<div
style={{ backgroundImage: `url(${Hungry1})` }}
className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
>
{/* Hover Effects */}
<div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
    React-Native Application
  </span>
  <div className='pt-8 text-center'>
    <a href='https://drive.google.com/file/d/1x2FaOsVhW9r1rb-HU3M3QDUUFFV4L4ds/view?usp=sharing' target="_blank" rel="noopener noreferrer">
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='https://github.com/lucasglorieux/hungryfront' target="_blank" rel="noopener noreferrer">
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>
  </div>
</div>
</div>
<div
style={{ backgroundImage: `url(${Immo})` }}
className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
>
{/* Hover Effects */}
<div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
    React JS Application
  </span>
  <div className='pt-8 text-center'>
    <a href='https://lgimmo.netlify.app/' target="_blank" rel="noopener noreferrer">
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='https://github.com/lucasglorieux/Immo-project' target="_blank" rel="noopener noreferrer">
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>
  </div>
</div>
</div>
{/* Grid Item */}
<div
style={{ backgroundImage: `url(${Lg})` }}
className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
>
{/* Hover Effects */}
<div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
    React JS Application
  </span>
  <div className='pt-8 text-center'>
    <a href='https://lgtrip.netlify.app/' target="_blank" rel="noopener noreferrer">
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='https://github.com/lucasglorieux/LG.trip' target="_blank" rel="noopener noreferrer">
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>
  </div>
</div>
</div>
{/* <div
style={{ backgroundImage: `url(${Cafe3})` }}
className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
> */}

{/* <div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
    React JS Application
  </span>
  <div className='pt-8 text-center'>
    <a href='/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>
  </div>
</div>
</div>

<div
style={{ backgroundImage: `url(${Immo})` }}
className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
>

<div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
    React JS Application
  </span>
  <div className='pt-8 text-center'>
    <a href='/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>
  </div>
</div>
</div>
<div
style={{ backgroundImage: `url(${Hungry1})` }}
className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-100'
>

<div className='opacity-0 group-hover:opacity-100'>
  <span className='text-2xl font-bold text-white tracking-wider'>
    React JS Application
  </span>
  <div className='pt-8 text-center'>
    <a href='/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='/'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>
  </div>
</div> */}
{/* </div> */}
</div>
</div>
</div>
  )
}

export default Work