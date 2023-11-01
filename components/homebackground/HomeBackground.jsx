import React from "react";
import Image from "next/image";

const HomeBackground = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <Image
        src="/images/rickandmorty.jpg"
        layout="responsive"
        width={1200}
        height={800}
        alt="rickandmorty"
        priority={true}
        as="image"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <h1 className="absolute text-center text-white text-2xl sm:text-5xl font-bold">
        Rick And Morty API
      </h1>
    </div>
  );
};

export default HomeBackground;
