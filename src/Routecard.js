import React from 'react'

const Routecard = (parmas) => {
  return (
    <div className='h-60 w-1/4 border-slate-500 border-2'>
      <div>
        <div>{parmas.location}</div>
        <div>{parmas.from}</div>
      </div>
    </div>
  )
}

export default Routecard
