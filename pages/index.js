import React from 'react';
import Head from "next/head";
import Image from 'next/image';

export default function Home() { 
  return (
    <>
    <Head>
      <title>Rick And Morty | Home</title>
      <meta name="description" content="HomePage" />
    </Head>

    <div className="w-full h-full flex items-center justify-center relative">
      <div>
        <Image
          src='/images/rickandmorty.jpg'
          layout="responsive"
          width={100}
          height={100}
          alt='rickandmorty'
          priority={true}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <h1 className="absolute text-center text-white text-5xl font-bold">Rick And Morty API</h1>
    </div>
    </>
  )
}
