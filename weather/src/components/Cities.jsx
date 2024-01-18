import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

// const Axiosdata = async (citie) => {

//   console.log("citie : ", citie);
//   const Data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=f0fa2dadb8d247a5aa6185547241201&q=${citie}&days=7&aqi=no&alerts=no`);
//   return (Data);

// }


const Citiesloop = async (Citie) => {
  
  // console.log("data current: ", Data);
  // var data = Axiosdata(Citie);

  return (
    <div className='flex flex-col flex-1 w-full'>
      <p>{Citie}</p>
    </div>
  )

}


const Cities = () => {

  const [searchTerm, setSearchTerm] = useState(undefined);
  const [Cities, setCities] = useState([]);

  const fetchdata = async () => {
    if (searchTerm){
      try{
        const response = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country: searchTerm })
        const data = response.data.data;
      
        console.log(`${searchTerm} data: `, data);
        setCities(data); // Corrected line: Set the new data directly
        console.log("Cities : ", Cities);
  
      } 
      catch(error){
        console.log("error  : ", error)
      }
    }
  }

  const emptycase = async () => {
      try{
        const response = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country: "morocco" })
        const data = response.data.data;

        console.log(`${searchTerm} data: `, data);
        setCities(data); // Corrected line: Set the new data directly
        console.log("Cities : ", Cities);      } 
      catch(error){
        console.log("error  : ", error)
      }
  }

  useEffect(() => {
      fetchdata();
      if (searchTerm == undefined)
        emptycase();
  }, [searchTerm])

  const HandleOnsearch = (Country) => {
    console.log("Country : ", Country);
    setSearchTerm(Country);
    console.log("searchTerm : ", searchTerm);
    fetchdata();
  }

  return (
    <div className='w-full flex flex-col flex-1 h-[100%]'>
      <div className='w-full flex'>
        <Navbar onSearch={HandleOnsearch}/>
      </div>
      <div className='w-[65%] rounded-2xl bg-slate-800 flex flex-1 flex-col justify-items-start m-6 mt-1'>
        {
          Cities.map((scoop) => {
            return (
              <Citiesloop />
            )
          })
        }
      </div>
    </div>
  )
}

export default Cities