import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import Accordion from '@/components/accordion/Accordion';
import Search from '@/components/search/Search';
import SearchRemove from '@/components/searchremove/SearchRemove';
import Spinner from '@/components/spinner/Spinner';
import CharacterList from '@/components/characterlist/CharacterList';
import Pagination from '@/components/pagination/Pagination';

const CharactersPage = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(42)
  const [error, setError] = useState(null)

  async function fetchCharacters() {
    setLoading(true);
    setError(null)
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}&gender=${gender}&status=${status}&species=${species}&page=${page}`);
      if (!response.data.results) {
        setError('Characters Not Found');
      }else {
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages)
      }
    }catch (error) {
      console.error('Error fetching data:', error);
      setError('Characters Not Found')
    }finally {
      setLoading(false);
    }

    const queryParams = new URLSearchParams();

    if (search) {
      queryParams.set('name', search);
    }
    if (gender) {
      queryParams.set('gender', gender);
    }
    if (status) {
      queryParams.set('status', status);
    }
    if (species) {
      queryParams.set('species', species);
    }
    if (page) {
      queryParams.set('page', page.toString())
    }

    const queryString = queryParams.toString();
    router.push(`/characters${queryString ? `?${queryString}` : ''}`);
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setSearch(queryParams.get('name') || '');
    setGender(queryParams.get('gender') || '');
    setStatus(queryParams.get('status') || '');
    setSpecies(queryParams.get('species') || '');
    const pageParam = queryParams.get('page');
    if (pageParam) {
      setPage(parseInt(pageParam, 10));
    }
  }, [router.asPath]);

  useEffect(() => {
    fetchCharacters();
  }, [search, gender, status, species, page]);


  return (
    <>
      <Head>
        <title>Rick And Morty | Characters</title>
        <meta name="description" content="CharactersPage" />
      </Head>

      <div className="mx-auto p-4 sm:px-6 lg:max-w-7xl">
        <div className="flex flex-col my-3 lg:flex-row">
          <Accordion gender={gender} setGender={setGender} status={status} setStatus={setStatus} species={species} setSpecies={setSpecies} setPage={setPage}/>
          <div className="w-full mx-auto lg:pl-4">
            <Search setSearch={setSearch} setPage={setPage} />
            {search && (
              <SearchRemove search={search} setSearch={setSearch} setPage={setPage}/>
            )}
            {loading ? (
              <Spinner />
            ) : (
              error ? (
                <h1 className="flex justify-center items-center text-center my-6 text-2xl dark:text-white">{error}</h1>
              ) :
              <CharacterList characters={characters} />
            )}
            <Pagination page={page} setPage={setPage} totalPages={totalPages} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CharactersPage;