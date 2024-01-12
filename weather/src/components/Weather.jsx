import React, { useEffect, useState } from 'react'
import {Navbar} from '../components'
import {Sun,clear,blizzard,blowingsnow,cloudy,fog,freezingfog,heavyrain,heavysnow,heavy,
  icepellets,lightfreezingrain,lightrainshower,lightrain,lightshowericepellets,lightsnowshower,
  lightsnow,lightdrizzle,lightsleet,mist,MHfreezingrain,MHrainshower,MHrainthunder,MHshowericepellets,
  MHsleetshower,MHsleet,MHsnowshower,MHsnowthunder,Mraintime,Mrain,Msnow,overcast,partlycloudy,pheavysnow,
  plrainthunder,plsnow,pmsnow,PFDP,PLD,PLrain,PrainP,PsleetP,PsnowP,Trainshower,
} from '../assets'
import { Todaylist, AirCondition, SevenDays } from '../constants'
import axios from 'axios';


// I can see  you are using vite, which has path aliasing
// as in something like ../constants can become $lib/constants
// this is good for meaningful paths

// default values in javascript are helpful so that you don't need to always provide arguemnts to components
// especially since you are using .jsx instead of .tsx which checks types
const Todayloop = ({logo, time, Temp}) => (
  <div className="flex flex-1 flex-col flex-wrap m-8 mt-12 mb-8 ">
    <div >
      <p className='text-white text-gray-300'>{time}</p>
      <img src={logo} className={`w-[80%] mt-8`}/>
      <p className='text-white mt-8 text-semibold'>{Temp}°</p>
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

// These componenets do not have any documentation to them nor to the props
// Documentation is not obligatory but preferred even if it's a one man code base
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

  // undefined is not very descriptive, limit the possible values of your variables
  // so you can think about them easily
  const [searchTerm, setSearchTerm] = useState(undefined); 
  const [data, setData] = useState();
  const [Current, setCurrent] = useState();
  const [Forecast, setForecast] = useState();
  const [Todayforcast, setTodayforcast] = useState();

  var ModifyPics = (object) => {
    var ConditionPic = null;
  
    ConditionPic = (object.text == "Sunny" ? Sun : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Mist" ? mist : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Clear" ? clear : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Partly cloudy" ? partlycloudy : cloudy);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Overcast" ? overcast : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy rain possible" ? PrainP : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy snow possible" ? PsnowP : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy sleet possible" ? PsleetP : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy freezing drizzle possible" ? PFDP : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Thundery outbreaks possible" ? Sun : null); //
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Blowing snow" ? blowingsnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Blizzard" ? blizzard : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Fog" ? fog : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Freezing fog" ? freezingfog : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light drizzle" ? PLD : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light drizzle" ? lightdrizzle : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Freezing drizzle" ? Sun : null); //
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Heavy freezing drizzle" ? Sun : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light rain" ? PLrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "light rain" ? lightrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate rain at times" ? Mraintime : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate rain" ? Mrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Heavy rain at times" ? heavyrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Heavy rain" ? heavyrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light freezing rain" ? lightfreezingrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy freezing rain" ? MHfreezingrain : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light sleet" ? lightsleet : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy sleet" ? MHsleet : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light snow" ? plsnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "light snow" ? lightsnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy moderate snow" ? pmsnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate snow" ? Msnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy heavy snow" ? pheavysnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Heavy snow" ? heavysnow : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Ice pellets" ? icepellets : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light rain shower" ? lightrainshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy rain shower" ? MHrainshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Torrential rain shower" ? Trainshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light sleet showers" ? MHsleetshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy sleet showers" ? MHsleetshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light snow showers" ? lightsnowshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy snow showers" ? MHsnowshower : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Light showers of ice pellets" ? lightshowericepellets : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy showers of ice pellets" ? MHshowericepellets : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light rain with thunder" ? plrainthunder : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy rain with thunder" ? MHrainthunder : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Patchy light snow with thunder" ? MHsnowthunder : null);
    if (ConditionPic != null) return ConditionPic;
    ConditionPic = (object.text == "Moderate or heavy snow with thunder" ? MHsnowthunder : null);

    return (ConditionPic);
  }
  
  const fetchData = async () => {
    try{
      if (searchTerm)
      {
        console.log("searchTerm, ", searchTerm);
        const Data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=ddd4d75367394afea78144106232912&q=${searchTerm}&days=7&aqi=no&alerts=no`);
        // console.log("Data : ", Data);
        console.log("Data current:            ", Data.data.current);
        console.log("Data foreacastday:       ", Data.data.forecast.forecastday);
        console.log("Data today foreacastday: ", Data.data.forecast.forecastday[0]);

        Data.data.current.condition.icon = ModifyPics(Data.data.current.condition);
        console.log("condition : ", Data.data.current.condition.icon);
        setData(Data.data);
        setCurrent(Data.data.current);
        setForecast(Data.data.forecast.forecastday);
        setTodayforcast(Data.data.forecast.forecastday[0]);
      }
      // else if (searchTerm === undefined && data === undefined){
      //   const Data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=ddd4d75367394afea78144106232912&q=rabat&aqi=no`);
      //   console.log("Data : ", Data.data);
      //   setData(Data.data);
      // }
    }
    catch(error){ // learn some method of error handling
      console.log("error : ", error);
    }
  }

  useEffect(() => {

    const emptycase = async () => {
      if (searchTerm == undefined)
      { // Learn about debouncing. (this is a good concept)
        // Why axios and not something else, I already know, it's a rhetorical question.
        // As in you should be able to explain technological choices in the design document.
        // Have you ever seen the functions that exist in console. they are often useful.
        // you can also provide css to your console.log so it loks ddifferent...
        setSearchTerm('rabat');
        const Data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=ddd4d75367394afea78144106232912&q=rabat&days=7&aqi=no&alerts=no`);
        console.log("Data : ", Data.data.current);
        setData(Data.data);
      return ;
      }
    }

    emptycase();
    fetchData();
  }, [searchTerm]);
  
  const HandleOnsearch = (City) => {
    console.log("city : ", City);
    setSearchTerm(City);
    fetchData();
    // console.log("DATA : ", data);
  }


  return (
    <div className='w-full'>
      <div className='w-full'>
        <Navbar onSearch={HandleOnsearch} />
      </div>
      <div className="flex flex-row w-full">
        <div className="w-1/2 flex flex-wrap flex-col ">
          <div className='w-full m-4 flex'>
              <div className='flex flex-col'>
                <h2 className='text-5xl font-bold '>{searchTerm}</h2> <br></br>
                <p className='font-light text-gray-500'>Chance of rain: {Todayforcast?.day.daily_chance_of_rain} %</p>
                <br></br>
                <p className='text-8xl font-bold'>{Current?.temp_c}°</p>
              </div>
              <div className='ml-60'>
                <img src={Current?.condition.icon} className="w-[180px] ml-52"/>
              </div>  
          </div>
          <div className='w-full rounded-2xl bg-slate-800 flex flex-1 flex-wrap m-4'>
            <h2 className='absolute m-4 font-semibold text-gray-500'>TODAY'S FORCAST</h2>
            {Todayforcast?.hour.map((scoop) => {
                // <p className='text-white'>{scoop.Temp}</p>
                if (scoop.time.includes("06:00") || scoop.time.includes("09:00") || scoop.time.includes("12:00") 
                  || scoop.time.includes("15:00") || scoop.time.includes("18:00") || scoop.time.includes("21:00"))
                {
                  var Time;
                  var logo;
                  
                  if (scoop.time.includes("06:00")) {
                    Time = "6:00 AM"
                    logo = ModifyPics(scoop.condition)
                  }
                  if (scoop.time.includes("09:00")) {
                    Time = "9:00 AM"
                    logo = ModifyPics(scoop.condition)
                  }
                  if (scoop.time.includes("12:00")) {
                    Time = "12:00 AM"
                    logo = ModifyPics(scoop.condition)
                  }
                  if (scoop.time.includes("15:00")) {
                    Time = "15:00 PM"
                    logo = ModifyPics(scoop.condition)
                  }
                  if (scoop.time.includes("18:00")) {
                    Time = "18:00 PM"
                    logo = ModifyPics(scoop.condition)
                  }
                  if (scoop.time.includes("21:00")) {
                    Time = "21:00 PM"
                    logo = ModifyPics(scoop.condition)
                  }
                  var obj = {logo:logo ,time:Time, Temp:scoop.temp_c}
                  return (
                    <Todayloop {...obj} />
                  )
                }
              })}

          </div>
          <div className='w-full rounded-2xl bg-slate-800 flex flex-1 flex-wrap m-4'>
            <p className='absolute m-4 ml-10 font-semibold text-gray-500'>AIR CONDITIONS</p>
            {AirCondition.map((scoop) => (
              <AirConditionloop {...scoop} />
            ))}
          </div>
        </div>
        {/* <div className='w-full rounded-2xl bg-slate-800 flex flex-1 flex-col m-6 mx-12'>
           <p className='absolute m-12 ml-10 mt-4 font-semibold text-gray-500'>7-DAY FORECAST</p>
            {SevenDays.map((scoop) => (
              <SevenDaysloop {...scoop} />
            ))}
        </div> */}
      </div>
    </div>
  )
} // overall nice !
// so am I, wanna sell meth ? let's cook

export default Weather