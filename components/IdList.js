import React from 'react'

const IdList = (props) => {
  return (
    <div className="mx-auto px-4 flex justify-center items-center">
      {props.characters.map((character) => (
        <div key={character?.id} className="my-5 bg-white rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-full">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img src={character?.image} alt="Image" className="h-full md:w-full"/>
            </div>
            <div className="p-5 md:flex-grow">
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li><h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white"> {character?.name}</h5></li>
                  <li className='py-1 sm:py-1'><span>{character?.species}</span> - <span className={`text-xs text-center font-medium px-2.5 py-0.5 rounded ${character?.status === 'Dead' ? 'bg-red-600 text-white' :character?.status === 'Alive' ? 'bg-green-600 text-white' :character?.status === 'unknown' ? 'bg-gray-600 text-white' : ''}`}>{character?.status}</span></li>
                  <li className="py-1 sm:py-1"><span>Last Known Location:</span><h6 className="mb-3 font-bold  text-gray-900 dark:text-gray-400 whitespace-nowrap text-ellipsis overflow-hidden">{character?.location?.name}</h6></li>
                  <li className="py-1 sm:py-1"><span>Gender:</span><h6 className="mb-3 font-bold  text-gray-900 dark:text-gray-400">{character?.gender}</h6></li>
                  <li className="py-1 sm:py-1"><span>Origin:</span><h6 className="mb-3 font-bold  text-gray-900 dark:text-gray-400">{character?.origin?.name}</h6></li>
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