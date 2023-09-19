import React from 'react'
import {IoLocationSharp} from 'react-icons/io5'
const Form = () => {
  return (
    <div className=' sticky top-24  w-full bg-[#E6E6FA] p-10 border-2 rounded-2xl shadow-xl flex justify-center gap-14' >

      <div className='flex gap-7'> 
      <div  className=' shadow-lg px-1 gap-1 border-none rounded-lg bg-white flex items-center'>
      <input className=' py-3 w-64 ' type='text' placeholder="Enter Departure"/><IoLocationSharp/></div>
      <div  className=' shadow-lg px-1 gap-1 border-none rounded-lg bg-white flex items-center'>
      <input className=' py-3 w-64' type='text' placeholder="Enter Destination"/><IoLocationSharp/></div>
      <input  className='border-none rounded-lg p-3 w-64' type='date'/>
      </div>
     
      <button className='shadow-lg bg-[#1d1160] text-white p-4 rounded-lg'>Search Bus</button> 
    </div>
  )
}

export default Form
