import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed w-full top-0 z-10 flex justify-between bg-gray-900 p-8 text-white '  >
      <img src='./l1.svg' alt='uu'/>
      <div className='flex mx-2'>
        <div className='px-2'>My Bookings</div>
        <div className='px-2'> Manage Bookings</div>
      </div>
    </div>
  )
}

export default Navbar
