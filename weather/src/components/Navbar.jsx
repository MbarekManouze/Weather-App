// import React from 'react'

// const Navbar = () => (

//     <section className="m-6 w-full">
//         <div className="w-full">
//             <input className={`h-12 pl-8 pr-5 rounded-lg bg-slate-800 w-1/2 focus:outline-none`} type="search" name="search" placeholder="Search for cities">
//             </input>
//         </div>
//     </section>

// )

// export default Navbar

import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    // console.log(event.target.value);
  };

  const handleSearch = () => {
    // Pass the searchInput value to the parent component or where it's needed
    onSearch(searchInput);
  };

  return (
    <section className="m-6 w-full">
      <div className="w-full">
        <input
          className={`h-12 pl-8 pr-5 rounded-lg bg-slate-800 w-1/2 focus:outline-none`}
          type="search"
          name="search"
          placeholder="Search for cities"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </section>
  );
};

export default Navbar;