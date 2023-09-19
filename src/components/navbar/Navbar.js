import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed w-full top-0 z-10 flex justify-between bg-[#1d1160] p-10 text-white '  >
    <div className='text-2xl font-bold font-serif'>B-Live!</div>
      <div className='flex mx-2'>
        <div className='px-2 cursor-pointer'>My Bookings</div>
        <div className='px-2 cursor-pointer'> Manage Bookings</div>
      </div>
    </div>
  )
}

export default Navbar
