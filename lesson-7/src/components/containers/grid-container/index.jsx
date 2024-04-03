import React from 'react'

export default function index({children, title}) {
  return (
    <div>
      <h1 className='font-bold text-[25px] mb-[40px]'>{title}</h1>
      <div className='grid grid-cols-3 gap-[50px]'>
        {children}
      </div>
    </div>
  )
}
