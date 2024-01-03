import React from 'react'
import {Weather, Wind, List} from '../assets'
import {Link} from 'react-router-dom'

const Lefttbar = () => {
  return (
    <aside className="flex flex-col justify-start ml-8 mt-6 mb-6">
      <div className="rounded-lg flex flex-col items-center justify-start bg-slate-800 w-28 h-screen">
        <div className="mt-6 space-y-14 w-16">
            <img src={Wind} className=" rounded-lg bg-slate-600 mb-32"/>
          <Link to="/Weather" className="group hover:bg-slate-600 rounded-lg text-white ">
              <img src={Weather} className="w-16"/>
              <p className='group-hover:text-red-200'>Weather</p>
          </Link>
          <Link to="/Cities" className='group flex flex-col items-center hover:bg-slate-600 rounded-lg text-white'>
              <img src={List} className="w-16"/>
              <p className='group-hover:text-red-200'>Cities</p>
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Lefttbar