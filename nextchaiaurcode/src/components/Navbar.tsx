"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link'
function Navbar() {
  const [value,setvalue]= useState(false);
  const visible=()=>{
    setvalue(!value);
  }
  return (
    <div className='z-10 fixed top-0 w-full p-[4svh] h-[4.5rem] rounded-md flex justify-between px-[7vw]'>
        <Link href="/"><span className='text-3xl my-auto'>Angad | Portfolio</span></Link>
        <div className='hidden md:inline-flex sm:inline-flex lg:inline-flex gap-[5vw]'>
          <Link href="/about"  className=''>About</Link>
          <Link href="/project" className=''>Project</Link>
          <Link href="/contact" className=''>Contact</Link>
        </div>
        <button onClick={visible} className='lg:hidden md:hidden sm:hidden'>
          <GiHamburgerMenu className='text-3xl' />
        </button>
        <div className={`lg:hidden md:hidden sm:hidden ${value?"translate-x-0":"translate-x-[300%]"} h-fit fixed top-[5rem] p-8  right-0 z-50 border-gray-300 border-2 w-[10rem]`}>
          <div className='h-16 w-full hover:border-white hover:border-2  '>
            <Link href="/"  className=''><h1>Home</h1></Link>
          </div>
          <div className='h-16 w-full hover:border-white hover:border-2  '>
            <Link href="/about"  className=''><h1>About</h1></Link>
          </div>
          <div className='h-16 w-full hover:border-white hover:border-2  '>
            <Link href="/project" className=''><h1>Project</h1></Link>
          </div>
          <div className='h-16 w-full hover:border-white hover:border-2  '>
            <Link href="/contact" className=''><h1>Contact</h1></Link>
          </div>
        </div>
        
    </div>
  )
}

export default Navbar