import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll';
import En from '../assets/en.png';
import Fr from '../assets/fr.png'

const Navbar = () => {

const [showNav, setShowNav] = useState(false)
const handleClick = () => setShowNav(!showNav)



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#a4b0be]'>
        <div className='text-right'>
            <img src={Logo} alt="Logo" style={{width:'150px'}}/>
        </div>
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li className='hover:scale-110 duration-500'>
                <Link  to="home" smooth={true} offset={50} duration={500}>
                    Home
                </Link>
                </li>
                <li className='hover:scale-110 duration-500'>
                <Link  to="work" smooth={true} offset={50} duration={500}>
                    Work
                </Link>
                </li>
                <li className='hover:scale-110 duration-500'>
                <Link  to="about" smooth={true} offset={50} duration={500}>
                    About
                </Link>
                </li>
                <li className='hover:scale-110 duration-500'>
                <Link  to="skills" smooth={true} offset={50} duration={500}>
                    Skills
                </Link>
                </li>
                <li className='hover:scale-110 duration-500'>
                  <Link  to="contact" smooth={true} offset={50} duration={500}>
                    Contact
                </Link></li>
            </ul>            
        </div>

        {/* Hanburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!showNav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile menue */}
        <ul className={!showNav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li><img src={Logo} alt="Logo" style={{width:'300px'}}/></li>
            <li  className='py-6 text-4xl hover:scale-110 duration-500'>
            <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl hover:scale-110 duration-500'>
            <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl hover:scale-110 duration-500'>
            <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl hover:scale-110 duration-500'>
              <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                    About
                </Link></li>
            <li className='py-6 text-4xl hover:scale-110 duration-500'>
            <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>       

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e76a8]'>
                 <a className='flex justify-between items-center w-full text-gray-300'
                  href='https://www.linkedin.com/in/lucas-glorieux-2373061ba/' target="_blank" rel="noopener noreferrer">
                   Linkedin <FaLinkedin size={30}/>
                 </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6e5494]'>
                 <a className='flex justify-between items-center w-full text-gray-300'
                  href='https://github.com/lucasglorieux' target="_blank" rel="noopener noreferrer">
                   GitHub <FaGithub size={30}/>
                 </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff6348]'>
            <Link className='flex justify-between items-center w-full text-gray-300' to="contact" smooth={true} offset={50} duration={1000}>
                   Email <HiOutlineMail size={30}/>
                 </Link>
            </li>
            <li className='w-[230px] h-[60px] flex justify-between items-center ml-[-170px] hover:ml-[-10px] duration-500 bg-[#57606f]'>
            
                 <div className='flex justify-between items-center w-full text-gray-300' >
                 Resume
                    <a href='https://www.linkedin.com/in/lucas-glorieux-2373061ba/' target="_blank" rel="noopener noreferrer">
                        <img src={Fr} alt="french flag" style={{width:'40px'}} target="_blank" />
                    </a>
                    <a href='https://drive.google.com/file/d/1f352MRCjcwI3DtH2LUjwLO5KyeqyJsAU/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                    <img src={En} alt="english flag" style={{width:'30px'}} />
                    </a>
                    <BsFillPersonLinesFill size={30}/>
                 </div>

            </li>
            </ul>
        </div>
  
    </div>
  )
}

export default Navbar

// {PdfFr}