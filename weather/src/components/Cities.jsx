import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';


const Citiesloop = async (Citie) => {    
  
  return (
    <div className='flex flex-col flex-1 w-full'>
      <p>{Citie.Citie}</p>
    </div>
  )
  
}
  
  
const Cities = () => {
  
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [Cities, setCities] = useState([]);


  const fetchCities = async (Citie) => {
      try{
        const Data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=f0fa2dadb8d247a5aa6185547241201&q=${Citie}&aqi=no`)
        .catch((error) => {
          throw error;
          return (false);
        });
        return (Data);
      }
      catch(error){
        return (false);
      }    
  }

  const fetchdata = async () => {
    if (searchTerm != undefined){
      try{
        const response = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country: searchTerm })
        const data = response.data.data;
      
        setCities(data); // Corrected line: Set the new data directly
  
      } 
      catch(error){
      }
    }
  }

  useEffect(() => {
      fetchdata();
  }, [searchTerm])

  const HandleOnsearch = (Country) => {
    setSearchTerm(Country);
    fetchdata();
  }
  return (
    <div className='w-full flex flex-col flex-1 h-[100%]'>
      <div className='w-full flex'>
        <Navbar onSearch={HandleOnsearch}/>
      </div>
      <div className='w-[65%] rounded-2xl bg-slate-800 flex flex-1 flex-col justify-items-start m-6 mt-1'>
        {
          Cities.map(async (scoop) => {
            // console.log("scoop : ", scoop);
            try {
              var outcome = await fetchCities(scoop);
              if (outcome == false)
                return null;
              return (
                <Citiesloop Citie={scoop}/>
              )
            }catch(error){
              return null;
            }
          })
        }
      </div>
    </div>
  )
}

export default Cities