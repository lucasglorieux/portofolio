import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-[#ac00ff]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ced6e0]'>Lucas Glorieux</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#747d8c]'>I'm a Front-End Developer.</h2>
            <p className='text-[#ced6e0] py-4 max-w-[700px]'>
                I'm a front-end developer specialized in React & React-Native. I love designing
                and make exceptional custom digital experiences for clients. 
                I'm currently focusing in building responsive Web & Mobile 
                apllications.
            </p>
                <div>
                <Link  to="work" smooth={true} offset={50} duration={500}>
                <button className='text-[#f1f2f6] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ac00ff] hover:border-[#ac00ff]'>
                        Check My Work
                        <span className='group-hover:rotate-90 duration-300 '>
                        <HiArrowNarrowRight className='ml-3' size={15}/>
                        </span> 
                    </button>
                </Link>
                    
                </div>
        </div>
    </div>
  )
}

export default Home