import React from 'react'

const IdList = (props) => {  
  return (
    <div className="flex justify-center items-center">
      {props.characters.map((character, index) => (
        <div key={index} className="my-5 bg-white rounded-lg w-56 md:w-3/4 lg:w-3/4">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img src={character?.image} alt="Image" className="h-full w-full rounded-lg" />
            </div>
            <div className="p-5 md:flex-grow">
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-[#1f3243]">
                  <li className='py-2'>
                    <h5 className="text-l font-bold text-gray-900 dark:text-white"><span className='text-gray-800 dark:text-gray-300 font-normal'>Name: </span>{character?.name}</h5>
                  </li>
                  <li className='py-2'>
                    <h5 className="text-l font-bold text-gray-900 dark:text-white"><span className='text-gray-800 dark:text-gray-300 font-normal'>Last Known Location: </span>{character?.location?.name}</h5>
                  </li>
                  <li className='py-2'>
                    <h5 className="text-l font-bold text-gray-900 dark:text-white"><span className='text-gray-800 dark:text-gray-300 font-normal'>Species: </span>{character?.species}</h5>
                  </li>
                  <li className='py-2'>
                    <h5 className="text-l font-bold text-gray-900 dark:text-white"><span className='text-gray-800 dark:text-gray-300 font-normal'>Gender: </span>{character?.gender}</h5>
                  </li>
                  <li className='py-2'>
                    <h5 className="text-l font-bold text-gray-900 dark:text-white"><span className='text-gray-800 dark:text-gray-300 font-normal'>Origin: </span>{character?.origin?.name}</h5>
                  </li>
                  <li className='py-2'>
                    <span className={`text-l text-center px-2.5 py-0.5 rounded ${character?.status === 'Dead' ? 'bg-red-600 text-white' : character?.status === 'Alive' ? 'bg-green-600 text-white' : character?.status === 'unknown' ? 'bg-gray-600 text-white' : ''}`}>{character?.status}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default IdList