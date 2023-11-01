import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = (props) => {
  const { toggleDarkMode, darkMode } = props
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { id, name } = router.query;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-white dark:bg-[#171a21]'>
      <div className="mx-auto p-2 sm:px-6 lg:max-w-7xl">
        <nav>
          <div className="flex items-center flex-wrap justify-between">
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                width={70}
                height={100}
                alt="logo"
                priority={true}
                as="image"
              />
            </Link>
            <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 hover:text-gray-700 rounded-lg md:hidden dark:text-gray-400" aria-controls="navbar-default" aria-expanded={isOpen}>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg 
                  className="w-4 h-4 transition ease-in-out delay-10" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 14 14"
                >
                  <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
                </svg>
              ) : (
                <svg 
                  className="w-5 h-5 transition ease-in-out delay-10" 
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
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
              )}
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto`} id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li className='py-2'>
                  <Link href="/" passHref>
                    <h1 className={`block font-bold hover:text-blue-600 transition ease-in-out delay-10 md:border-0 md:p-0 dark:hover:text-blue-600 ${router.pathname === '/' ? 'text-blue-500 underline' : 'dark:text-white'}`} aria-current="page" style={{ textUnderlinePosition: "under" }}>
                      Home
                    </h1>
                  </Link>
                </li>
                <li className='py-2'>
                  <Link href="/characters" passHref>
                    <h1 className={`block font-bold hover:text-blue-600 transition ease-in-out delay-10 md:border-0 md:p-0 dark:hover:text-blue-600 ${router.pathname === '/characters' ? 'text-blue-500 underline' : 'dark:text-white'}`} style={{ textUnderlinePosition: "under" }}>
                      Characters
                    </h1>
                  </Link>
                </li>
                <li className='py-2'>
                  {id ? (
                    <Link href={`/characters/${id}?name=${name}`} passHref>
                      <h1 className={`block font-bold md:border-0 md:p-0 text-blue-500 underline`} style={{ textUnderlinePosition: "under" }}>
                        Details
                      </h1>
                    </Link>
                  ) :
                    <h1 className='text-gray-500 font-bold cursor-not-allowed'>
                      Details
                    </h1>
                  }
                </li>
                <li className='py-2'>
                  <button onClick={toggleDarkMode}>
                    {darkMode ?
                      <svg 
                        className="w-6 h-6 text-blue-500" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 18 20"
                      >
                        <path 
                          stroke="currentColor"  
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z" 
                        />
                      </svg>
                      :
                      <svg 
                        className="w-6 h-6 text-blue-500" 
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
                          d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" 
                        />
                      </svg>
                    }
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;