import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import HomeBackground from '@/components/homebackground/HomeBackground';
import Link from 'next/link';
import Spinner from '@/components/spinner/Spinner';
import Slider from '@/components/slider/Slider';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchRandomCharacters() {
    setLoading(true);
    try {
      const randomCharacterIds = Array.from({ length: 25 }, () =>
        Math.floor(Math.random() * 826)
      )
      const response = await Promise.all(
        randomCharacterIds.map((randomCharacters) =>
          axios.get(`https://rickandmortyapi.com/api/character/${randomCharacters}`)
        )
      )
      const randomCharacters = response.map((response) => response.data);
      setCharacters(randomCharacters);
    }catch (error) {
      console.error('Error fetching data:', error);
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRandomCharacters();
  }, []);

  return (
    <>
      <Head>
        <title>Rick And Morty | Home</title>
        <meta name="description" content="HomePage" />
      </Head>

      <HomeBackground />
      <div className="mx-auto p-4 sm:px-6 lg:max-w-7xl">
        <div className="w-0">
          <Link href="/characters">
            <h2 className="dark:text-white text-xl font-bold transition ease-in-out delay-10 hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer">
              Characters
            </h2>
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <Slider characters={characters} />
        )}
        <div className="text-center">
          <Link href="/characters">
            <button className="px-2 py-1 my-3 text-gray-900 dark:text-white font-bold transition ease-in-out delay-10 outline-none rounded-tl-lg rounded-tr-lg border hover:rounded-lg border-[#f2f3f6] dark:border-[#1b2838] border-b border-b-blue-500 dark:border-b-blue-600 hover:bg-blue-500 hover:text-[#f2f3f6] dark:hover:text-[#1b2838] cursor-pointer">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}