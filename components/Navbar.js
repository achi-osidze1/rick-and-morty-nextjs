import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav>
        <div className="mx-auto p-4 sm:px-6 lg:max-w-7xl flex items-center flex-wrap justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-tight hover:text-blue-500 transition ease-in-out delay-10 text-gray-900">Rick And Morty</h1>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 hover:text-blue-500 rounded-lg md:hidden transition ease-in-out delay-10 dark:text-gray-400"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? 'text-blue-500' : ''} w-5 h-5 transition ease-in-out delay-10`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" passHref>
                  <h1 className={`block py-2 hover:text-blue-500 transition ease-in-out delay-10 md:border-0 md:p-0 dark:text-white dark:hover:text-blue-500 ${router.pathname === '/' ? 'text-blue-500' : 'text-gray-900'}`} aria-current="page">
                    Home
                  </h1>
                </Link>
              </li>
              <li>
                <Link href="/characters" passHref>
                  <h1 className={`block py-2 hover:text-blue-500 transition ease-in-out delay-10 md:border-0 md:p-0 dark:text-white dark:hover:text-blue-500 ${router.pathname === '/characters' ? 'text-blue-500' : 'text-gray-900'}`}>
                    Characters
                  </h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
