import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import PaginationSpinner from "../spinner/PaginationSpinner";

const Pagination = (props) => {
  const { page, setPage, totalPages, loading, error } = props;
  const displayPages = 5;

  const startPage = Math.max(1, page - Math.floor(displayPages / 2));
  const endPage = Math.min(totalPages, startPage + displayPages - 1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 mt-8 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button className="relative inline-flex items-center rounded-lg border border-gray-300 dark:border-[#1f3243] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 dark:hover:border-blue-600 transition ease-in-out delay-10" 
          disabled={page === 1} onClick={() => handlePageChange(page - 1)}
          >
          Previous
        </button>
        <button className="relative inline-flex items-center rounded-lg border border-gray-300 dark:border-[#1f3243] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 dark:hover:border-blue-600 transition ease-in-out delay-10" 
          disabled={page === totalPages} onClick={() => handlePageChange(page + 1)}
          >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          {loading ? (
            <PaginationSpinner />
          ) : error ? (
            <h1 className="text-gray-700 dark:text-gray-300">No Pages Found</h1>
          ) : (
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-medium">Page {page} of {totalPages}</span>
            </p>
          )}
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button className="relative inline-flex items-center rounded-l-lg px-2 py-2 text-gray-700 ring-1 ring-inset ring-gray-200 hover:bg-gray-200 dark:ring-[#1f3243] dark:hover:bg-[#1f3243] dark:text-white transition ease-in-out delay-10" 
              disabled={page === 1} onClick={() => handlePageChange(page - 1)}
              >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {pageNumbers.map((pageNumber) => (
              <button key={pageNumber} className={`relative inline-flex items-center transition ease-in-out delay-10 ${page === pageNumber ? "bg-blue-500 relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white hover:ring-blue-500 ring-1 ring-inset hover:bg-white hover:text-gray-900 dark:hover:text-white dark:hover:bg-[#172330]" : "text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-200 dark:ring-[#1f3243] dark:hover:bg-[#1f3243] dark:text-white"} px-4 py-2 text-sm font-semibold`} 
                onClick={() => handlePageChange(pageNumber)} 
                aria-current={page === pageNumber ? "page" : undefined}
                >
                {pageNumber}
              </button>
            ))}
            <button className="relative inline-flex items-center rounded-r-lg px-2 py-2 text-gray-700 ring-1 ring-inset ring-gray-200 hover:bg-gray-200 dark:ring-[#1f3243] dark:hover:bg-[#1f3243] dark:text-white transition ease-in-out delay-10" 
              disabled={page === totalPages} 
              onClick={() => handlePageChange(page + 1)}
              >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
