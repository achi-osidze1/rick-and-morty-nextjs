import React from "react";
import Link from "next/link";

const Slider = (props) => {
  return (
    <div className="overflow-x-scroll">
      <div className="flex mt-5 mb-3">
        {props.characters.map((character) => (
          <Link
            href={`/characters/${character.id}?name=${character.name}`}
            key={character?.id}
          >
            <div className="slider w-40 sm:w-40 md:w-48 lg:w-56 xl:w-56 transition ease-in-out delay-10 cursor-pointer hover:opacity-70 rounded-lg mr-4 bg-white">
              <img
                className="w-full rounded-t-lg"
                src={character?.image}
                alt=""
              />
              <div className="p-3 w-40 sm:w-40 md:w-48 lg:w-56 xl:w-56 ">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden whitespace-nowrap text-ellipsis">
                  {character?.name}
                </h5>
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slider;
