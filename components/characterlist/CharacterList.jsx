import Link from "next/link";
import React from "react";

const CharacterList = (props) => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-5">
      {props.characters.map((character, index) => (
        <Link
          href={`/characters/${character.id}?name=${character.name}`}
          key={character?.id}
        >
          <div className="max-w-sm transition ease-in-out delay-10 bg-white rounded-lg  hover:opacity-75 cursor-pointer">
            <img className="rounded-t-lg" src={character?.image} alt="" />
            <div className="p-3">
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-[#1f3243]"
                >
                  <li className="py-1">
                    <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap text-ellipsis overflow-hidden">
                      {character?.name}
                    </h5>
                  </li>
                  <li className="py-1">
                    <h6 className="mb-2 font-normal text-gray-700 dark:text-gray-300 whitespace-nowrap text-ellipsis overflow-hidden">
                      {character?.location.name}
                    </h6>
                  </li>
                  <li className="py-1">
                    <h6 className="mb-2 font-normal text-gray-700 dark:text-gray-300">
                      {character?.species}
                    </h6>
                  </li>
                  <li className="py-3">
                    <span
                      className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded ${
                        character?.status === "Dead"
                          ? "bg-red-600 text-white"
                          : character?.status === "Alive"
                          ? "bg-green-600 text-white"
                          : character?.status === "unknown"
                          ? "bg-gray-600 text-white"
                          : ""
                      }`}
                    >
                      {character?.status}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;
