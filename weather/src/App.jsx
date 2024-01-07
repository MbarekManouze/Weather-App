import React from 'react'
import {Navbar, Leftbar, Weather, Cities} from './components'
import {Routes, Route} from 'react-router-dom'

const App = () => (

  <div className="">
    <div className="flex h-lvh space-x-8">
        <Leftbar/>
      <div className='relative text-white flex flex-row flex-wrap w-full'>
        <Routes>
          <Route path="/Weather" element={<Weather/>} />
          <Route path="/Cities" element={<Cities/>} />
        </Routes>
      </div>
    </div>

  </div>
)

export default App
