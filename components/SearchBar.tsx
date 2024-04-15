"use client";
import { useState } from 'react'

import SearchManuFacturer from './SearchManuFacturer'
const SearchBar = () => {
    const[manufacture,setManufactures] = useState("")
    const handleSearch = () =>{

    }
  return (
    <div className="searchbar" onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManuFacturer
        manufacture ={manufacture}
        setManufacture ={setManufactures}
        />

      </div>
        </div>
  )
}

export default SearchBar