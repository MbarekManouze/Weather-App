import React from 'react'
import {Navbar} from '../components'
import {Sun} from '../assets'
import { Todaylist } from '../constants'

// const Todayloop = ({logo, time, Temp}) => {
//   <div className="rounded-lg m-2 w-full flex flex-row">
//     <p className='text-white'>{time}</p>
//   </div>

// }

const Weather = () => {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <Navbar/>
      </div>
      <div className='justify-center items-center m-16 flex flex-row space-x-96'>
        <div className='flex-1 justify-center items-center '>
          <h2 className='text-5xl font-bold'>Madrid</h2> <br></br>
          <p className='font-light text-gray-500'>Chance of rain: 0%</p>
          <br></br>
          <p className='text-8xl font-bold mt-12'>31°</p>
        </div>
          <img src={Sun} className='w-[180px]'/>
      </div>
      <div className='w-full rounded-lg m-2 w-full flex flex-row'>
          {Todaylist.map((scoop) => {
            // console.log(scoop.Temp);
            // <Todayloop {...scoop}/>
            <p className='text-white'>{scoop.Temp}</p>
          })}
      </div>
    </div>
  )
}

export default Weather