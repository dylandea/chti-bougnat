import React, {useState} from 'react'

import {BsPerson} from 'react-icons/bs'
// import {BiSearch} from 'react-icons/bi'
import {RiMenu4Fill} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import {Link} from 'react-scroll';



const Navbar = () => {

    const [showNav, setShowNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setShowNav(!showNav)
        setLogo(!logo)
    }
  return (
    <div className='absolute flex w-full justify-between items-center h-20  z-10 text-white'>
        <div>
            <h1  onClick={handleNav} className={logo ? 'hidden' : 'block px-4'}>Le Ch'ti Bougnat</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                <Link  to="home" smooth={true} offset={50} duration={500}>
                    Nos Promotions
                </Link>
            </li>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                 <Link  to="destinations" smooth={true} offset={50} duration={500}>
                    Nos Produits
                </Link>
            </li>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                <Link  to="search" smooth={true} offset={50} duration={700}>
                    Nos Salaisons
                </Link>
            </li>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                <Link  to="choose" smooth={true} offset={50} duration={800}>
                    A propos
                </Link>
                </li>
            <li className='hover:scale-110 duration-500 hover:text-[#f1c40f] cursor-pointer'>
                <Link  to="carousel" smooth={true} offset={50} duration={1000}>
                Gallerie
                </Link>
            </li>
        </ul>
        <div className='hidden md:flex'>
            <BsPerson className='mr-5 hover:scale-110 duration-500 hover:text-[#f1c40f]' size={25}/>
        </div>

            {/*------------------ Apparition menue petits écrans -------------- */}
            <div onClick={handleNav}  className='md:hidden z-10'>
                {showNav ? <AiOutlineClose className='text-black' size={25} /> : <RiMenu4Fill size={25} /> }                
            </div>

             {/* ---------------Menue pour petits écrans --------------------*/}
            <div onClick={handleNav} className={showNav ? 'absolute top-0 w-full  text-black bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                    <h1>Le Ch'ti Bougnat</h1>
                    <li className='border-b hover:scale-105 duration-500 hover:text-yellow-400'><a href='/'>Home</a></li>
                    <li className='border-b hover:scale-105 duration-500 hover:text-[#f1c40f]'><a href='/'>Nos promotions</a></li>
                    <li className='border-b hover:scale-105 duration-500 hover:text-[#f1c40f]'><a href='/'>Nos produits</a></li>
                    <li className='border-b hover:scale-105 duration-500 hover:text-[#f1c40f]'><a href='/'>A propos</a></li>
                    <li className='border-b hover:scale-105 duration-500 hover:text-[#f1c40f]'><a href='/'>Gallerie</a></li>
                    <div className='flex flex-col'>
                        <button className='my-6 hover:scale-105 duration-500'>Chercher</button>
                        <button className='hover:scale-105 duration-500'>Mon compte</button>
                    </div>
                    <div className='flex justify-center my-6 mx-6'>
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon'/>
                    </div>
                </ul>
            </div>
    </div>
  )
}

export default Navbar