import React from 'react'

const Filter = ({ gender, setGender, status, setStatus, species, setSpecies }) => {
  
  const ClearFilters = () => {
    setGender("");
    setStatus("");
    setSpecies("");
  }  

  return (
    <div className='px-2 py-2'>
      <div className='py-2'>
        <label>Gender</label>
        <select className='bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition ease-in-out delay-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div className='py-2'>
        <label>Status</label>
        <select className='bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition ease-in-out delay-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div className='py-2'>
        <label>Species</label>
        <select className='bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition ease-in-out delay-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={species} onChange={(e) => setSpecies(e.target.value)}>
          <option value="">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Unknown">Unknown</option>
          <option value="Humanoid">Humanoid</option>
          <option value="Poopybutthole">Poopybutthole</option>
          <option value="Mythological">Mythological</option>
          <option value="Animal">Animal</option>
          <option value="Disease">Disease</option>
          <option value="Robot">Robot</option>
          <option value="Cronenberg">Cronenberg</option>
        </select>
      </div>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition ease-in-out delay-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={ClearFilters}>Clear Filters</button>
    </div>
  )
}

export default Filter;
