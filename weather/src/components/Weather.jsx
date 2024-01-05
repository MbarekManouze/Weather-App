import React from 'react'
import {Navbar} from '../components'
import {Sun} from '../assets'
import { Todaylist } from '../constants'

const Todayloop = ({logo, time, Temp}) => (
  <div className="flex flex-1 flex-col flex-wrap m-8 mt-12 mb-8 ">
    <div >
      <p className='text-white text-gray-300'>{time}</p>
      <img src={logo} className={`w-[80%] mt-8`}/>
      <p className='text-white mt-8 text-semibold'>{Temp}</p>
    </div>
    <div className='ml-7 w-0.5 bg-slate-500 h-full '></div>
  </div>
)

const AirConditions = () => (

)

const Weather = () => {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <Navbar/>
      </div>
      <div className='w-full m-8 flex flex-row flex-wrap'>
          <div className='flex flex-col'>
            <h2 className='text-5xl font-bold '>Madrid</h2> <br></br>
            <p className='font-light text-gray-500'>Chance of rain: 0%</p>
            <br></br>
            <p className='text-8xl font-bold'>31°</p>
          </div>
          <div className='ml-60'>
            <img src={Sun} className="w-[180px] ml-52"/>
          </div>
      </div>
      <div className='w-1/2 rounded-2xl bg-slate-800 flex flex-1 flex-wrap m-4'>
        <h2 className='absolute m-4 font-semibold text-gray-500'>TODAY'S FORCAST</h2>
          {Todaylist.map((scoop) => (
            // <p className='text-white'>{scoop.Temp}</p>
            <Todayloop {...scoop} />
          ))}
      </div>
    </div>
  )
}

export default Weather