import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';


const Citiesloop = () => (

  <div className='flex flex-col flex-1 w-full'>
    <p></p>
  </div>

  // <div className='flex flex-col w-full ml-8 m-4 mt-12'>
  //   <div className="flex flex-row m-4 ">
  //     <p className="font-semibold text-gray-500 mr-60">{Day}</p>
  //     <div className="w-full flex flex-row space-x-3">
  //       <img src={img} className="w-[35%] mr-2" />
  //       <p className="text-xl font-bold mr-6">{description}</p>
  //     </div>
  //     <div className="flex flex-row w-full ml-60">
  //       <p className="text-2xl font-bold">{High}</p>
  //       <p className="font-semibold text-gray-500">/{Low}</p>
  //     </div>
  //   </div>
  //   <div className="w-0.5 bg-slate-500 w-[85%] h-1 ml-9"></div>
  // </div>

)


const Cities = () => {

  const [searchTerm, setSearchTerm] = useState(undefined);
  const [Cities, setCities] = useState();

  const fetchdata = async () => {
    if (searchTerm){
      try{
        const Data = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country: searchTerm })
        .then((data) => {
          console.log(` ${searchTerm} data : `, data);
          setCities(Cities, data.data);
          console.log("Cities : ", Cities);
        })
        // console.log(Data);
      } 
      catch(error){
        console.log("error  : ", error)
      }
    }
  }

  const emptycase = async () => {
    if (searchTerm == undefined){
      try{
        const Data = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country: "morocco" })
        .then((data) => {
          console.log("data : ", data);
        })
        console.log(Data);
      } 
      catch(error){
        console.log("error  : ", error)
      }
    }
  }

  useEffect(() => {
      fetchdata();
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

      </div>
    </div>
  )
}

export default Cities