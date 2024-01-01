import React from 'react'
import {Navbar, Leftbar} from './components'


const App = () => (

  <div className="bg-slate-950 ">
    <div className="flex flex-row justify-center w-full">
        <Leftbar/>
        <Navbar/>
    </div>

    <div className={`flex justify-center items-center`}>
      <div>
        center content
      </div>
    </div>

  </div>

)

export default App
