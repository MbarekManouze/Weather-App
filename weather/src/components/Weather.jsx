import React, { useEffect, useState } from 'react'
import {Navbar} from '../components'
import {Sun} from '../assets'
import { Todaylist, AirCondition, SevenDays } from '../constants'
import axios from 'axios';


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

const AirConditionloop = ({desc, img, attribute}) => (
  <div className='flex flex-wrap w-1/2'>
    <div>
      <img src={img} className='w-[90%] mt-12 mb-4 ml-4 '/>
    </div>
    <div className='flex flex-col flex-wrap text-white text-semibold mt-12'>
      <p className='font-semibold text-gray-500'>{desc}</p>
      <p className='text-4xl font-bold'>{attribute}</p>
    </div>
  </div>
)

const SevenDaysloop = ({Day, img, description, High, Low}) => (

  <div className='flex flex-col w-full ml-8 m-4 mt-12'>
    <div className="flex flex-row m-4 ">
      <p className="font-semibold text-gray-500 mr-60">{Day}</p>
      <div className="w-full flex flex-row space-x-3">
        <img src={img} className="w-[35%] mr-2" />
        <p className="text-xl font-bold mr-6">{description}</p>
      </div>
      <div className="flex flex-row w-full ml-60">
        <p className="text-2xl font-bold">{High}</p>
        <p className="font-semibold text-gray-500">/{Low}</p>
      </div>
    </div>
    <div className="w-0.5 bg-slate-500 w-[85%] h-1 ml-9"></div>
  </div>

)

const Weather = () => {


  const [searchTerm, setSearchTerm] = useState('Rabat');

  const fetchData = async () => {
    try{
      const Data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=ddd4d75367394afea78144106232912&q=${searchTerm}&aqi=no`);
      console.log("Data : ", Data);
    }
    catch(error){
      console.log("error : ", error);
    }
  }
  // useEffect(() => {
    
  // }, []);
  
  const HandleOnsearch = (City) => {
    console.log(City);
    setSearchTerm(City);
    fetchData();
  }


  return (
    <div className='w-full'>
      <div className='w-full'>
        <Navbar onSearch={HandleOnsearch} />
      </div>
      <div className="flex flex-row w-full">
        <div className="w-1/2 flex flex-wrap flex-col ">
          <div className='w-full m-8 flex'>
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
          <div className='w-full rounded-2xl bg-slate-800 flex flex-1 flex-wrap m-4'>
            <h2 className='absolute m-4 font-semibold text-gray-500'>TODAY'S FORCAST</h2>
              {Todaylist.map((scoop) => (
                // <p className='text-white'>{scoop.Temp}</p>
                <Todayloop {...scoop} />
              ))}
          </div>
          <div className='w-full rounded-2xl bg-slate-800 flex flex-1 flex-wrap m-4'>
            <p className='absolute m-4 ml-10 font-semibold text-gray-500'>AIR CONDITIONS</p>
            {AirCondition.map((scoop) => (
              <AirConditionloop {...scoop} />
            ))}
          </div>
        </div>
        <div className='w-full rounded-2xl bg-slate-800 flex flex-1 flex-col m-6 mx-12'>
           <p className='absolute m-12 ml-10 mt-4 font-semibold text-gray-500'>7-DAY FORECAST</p>
            {SevenDays.map((scoop) => (
              <SevenDaysloop {...scoop} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Weather