import React, { useState } from "react";

const Search = (props) => {
  const { setSearch, setPage } = props;
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setSearch(inputValue);
    setPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!inputValue) {
        e.preventDefault();
      } else {
        handleClick();
      }
    }
  };

  const disableSearch = !inputValue;

  return (
    <div className="relative mb-3">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        id="default-search"
        className="block w-full transition ease-in-out delay-10 p-4 pl-10 text-sm text-gray-900 border border-white rounded-lg hover:border-blue-500 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-[#172330] dark:hover:border-blue-600 dark:border-[#172330] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
        placeholder="Search Characters"
        required
      />
      <button
        onClick={() => handleClick()}
        disabled={disableSearch}
        className="absolute right-2.5 bottom-2.5 text-white bg-blue-500 transition ease-in-out delay-10 border border-white hover:border-blue-500 hover:bg-white hover:text-gray-700 focus:ring-1 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 dark:border-[#172330] dark:hover:border-blue-600 dark:hover:text-white dark:bg-blue-600 dark:hover:bg-[#172330] dark:focus:ring-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
