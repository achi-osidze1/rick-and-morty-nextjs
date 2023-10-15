import React, { useState } from 'react'

const Search = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState('')
  
  const HandleClick = () => {
    setSearch(inputValue)
  }

  return (
    <div className="relative mb-3">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input type="search" onChange={(e) => setInputValue(e.target.value)} id="default-search" className="block w-full transition ease-in-out delay-10 p-4 pl-10 text-sm text-gray-900 border border-white rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Characters" required/>
      <button type="submit" onClick={() => HandleClick()} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 transition ease-in-out delay-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  )
}

export default Search