import React from 'react'
import Routecard from './Routecard'

const data = [
    {
        location:"Jaipur",
        from :"Delhi "
    },{
        location:"Jaipur",
        from :"Delhi "
    },{
        location:"Jaipur",
        from :"Delhi "
    },{
        location:"Jaipur",
        from :"Delhi "
    }
]
const OurRoutes = () => {
  return (
    <div className='flex flex-wrap'> 
      {data.map((e)=> <Routecard location={e.location} from={e.from}/>)}
    </div>
  )
}

export default OurRoutes
