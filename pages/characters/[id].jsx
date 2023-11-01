import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";
import IdList from "@/components/idlist/IdList";

const CharacterDetails = () => {
  const router = useRouter();
  const { id, name } = router.query;
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function charactersID() {
    if (!id) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}?name=${name}`
      );
      if (!response.data) {
        setError("Character Not Found");
      }else {
        setCharacters([response.data]);
      }
    }catch (error) {
      console.error("Error fetching data:", error);
      setError("Character Not Found");
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    charactersID();
  }, [id, name]);

  const pageTitle = error ? "Rick And Morty | Error" : "Rick And Morty | Character Details";
  const pageDescription = "CharactersDetailsPage";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <div className="w-full dark:bg-gradient-to-b from-[#2a475e] to-transparent">
        <div className="mx-auto p-4 sm:px-6 lg:max-w-7xl">
          {loading ? (
            <Spinner />
          ) : error ? (
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-xl text-center text-gray-800 dark:text-gray-300">
                404: {error}
              </h1>
            </div>
          ) : (
            <IdList characters={characters} />
          )}
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
