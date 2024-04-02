import React from 'react'
import mask_img from '@image/Mask group.png';

export default function index() {
  return (
    <div className='w-[405px] h-[316px] bg-[#F4F6FC] p-[48px]'>
       <img src={mask_img} alt="img" />
        <h3 className='mt-[20px] mb-[12px] text-[24px] font-semibold '>Kursus Gratis</h3>
        <p className='h-[112px] text-[16px] font-medium opacity-[0.7] w-[324px]'>Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu</p>
    </div>
  )
}
