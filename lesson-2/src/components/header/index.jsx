import React from 'react'
import logo from "../../assets/react.svg"
export default function index() {
  return (
     <header className='bg-[#0d0f22]'>
        <nav className='container flex justify-between items-center py-[20px]'>
            <img src={logo} alt="logo" />
            <ul className='flex gap-[30px]'>
               <li><a className='text-white font-semibold hover:border-b-[3px] border-[coral] pb-4' href="#">Home</a></li>
               <li><a className='text-white font-semibold hover:border-b-[3px] border-[coral] pb-4' href="#">About</a></li>
               <li><a className='text-white font-semibold hover:border-b-[3px] border-[coral] pb-4' href="#">Contact</a></li>
               <li><a className='text-white font-semibold hover:border-b-[3px] border-[coral] pb-4' href="#">Services</a></li>
            </ul>
        </nav>
     </header>
  )
}
