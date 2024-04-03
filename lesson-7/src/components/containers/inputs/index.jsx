import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Container} from '@containers'
import { ToastContainer, toast } from 'react-toastify';


export default function index({setPost, posts}) {

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function clickForm(e){
    e.preventDefault()
    if(name.trim().length === 0 || message.trim().length === 0){
      toast.error('Please fill in all fields')
    }else{
      const user = {
        id: uuidv4(),
        name: name,
        body: message
      }
        posts.Post(user);
        toast.success("Post created", {
          position: "top-right",
          autoClose: 1800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => {
          window.location.href="/"
        }, 2000);
    }
  }

  return (
    <Container>
        <form className='shadow-2xl mt-[50px] p-6 mb-[50px]'>
            <input value={name} onChange={(e)=> setName(e.target.value)} className=' font-medium block w-full py-[30px] mb-[20px] mt-[20px] px-[15px] outline-none border-[2px] rounded-lg border-[#00000041]' type="text" placeholder='Enter your Name'/>
            <textarea value={message} onChange={(e)=> setMessage(e.target.value)} className='font-medium block w-full py-[30px] mb-[20px] mt-[20px] px-[15px] outline-none border-[2px] rounded-lg border-[#00000041]' placeholder='Enter your message' cols="30" rows="5"></textarea>
            <button onClick={(e)=> clickForm(e)} className='block py-[15px] px-[30px] bg-[indigo] text-white font-bold rounded-xl'>Submit</button>
        </form>
    </Container>
  )
}
