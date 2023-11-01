import React from "react";

const SearchRemove = (props) => {
  const { search, setSearch, setPage } = props;

  const removeSearch = () => {
    setSearch('')
    setPage(1)
  }

  return (
    <button className="bg-blue-500 dark:bg-blue-600 outline-none flex justify-center items-center rounded-2xl py-1 px-3 text-white text-sm text-center">
      {search}
      <svg
        className="w-3 h-3 ml-2 text-white dark:text-white hover:text-gray-200 dark:hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
        onClick={removeSearch}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  );
};

export default SearchRemove;