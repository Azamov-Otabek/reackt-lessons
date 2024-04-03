import "./style.scss"
import React from 'react'

export default function index({children}) {
  return (
    <div className='container'>
        {children}
    </div>
  )
}
