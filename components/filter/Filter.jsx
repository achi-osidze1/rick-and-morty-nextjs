import React from "react";

const Filter = (props) => {
  const { gender, setGender, status, setStatus, species, setSpecies, setPage } = props;

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setPage(1);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setPage(1);
  };

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
    setPage(1);
  };

  const clearFilters = () => {
    setGender("");
    setStatus("");
    setSpecies("");
    setPage(1);
  };

  const disableButton = !gender && !status && !species;

  return (
    <div className="py-2">
      <div className="py-2">
        <label className="dark:text-gray-400">Gender</label>
        <select
          className="border border-gray-200 outline-none text-gray-900 text-sm rounded-lg hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition ease-in-out delay-10 dark:bg-[#172330] dark:hover:border-blue-600 dark:border-[#1f3243] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div className="py-2">
        <label className="dark:text-gray-400">Status</label>
        <select
          className="border border-gray-200 outline-none text-gray-900 text-sm rounded-lg hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition ease-in-out delay-10 dark:bg-[#172330] dark:hover:border-blue-600 dark:border-[#1f3243] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
          value={status}
          onChange={handleStatusChange}
        >
          <option value="">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div className="py-2">
        <label className="dark:text-gray-400">Species</label>
        <select
          className="border border-gray-200 outline-none text-gray-900 text-sm rounded-lg hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition ease-in-out delay-10 dark:bg-[#172330] dark:hover:border-blue-600 dark:border-[#1f3243] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
          value={species}
          onChange={handleSpeciesChange}
        >
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
      <button
        className="my-2 text-white bg-blue-500 transition ease-in-out delay-10 border border-white hover:border-blue-500 hover:bg-white hover:text-gray-700 focus:ring-1 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-2 py-2 dark:border-[#172330] dark:hover:border-blue-600 dark:hover:text-white dark:bg-blue-600 dark:hover:bg-[#172330] dark:focus:ring-blue-600"
        onClick={clearFilters}
        disabled={disableButton}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
