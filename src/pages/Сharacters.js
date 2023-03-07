import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Box from 'components/Box/Box';
import SearchFiels from 'components/SearchField/SearchField';
import CharacterContainer from 'components/CharacterContainer/CharacterContainer';
import CharacterGallary from 'components/CharacterGallary/CharacterGallary';
import HeaderImage from 'components/HeaderImage/HeaderImage';

import { getCharacters, searchCharacters } from 'apiService/apiService';

const Сharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [searchCharactes, setSearchCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('name');

  const getQuery = data => {
    setSearchParams('');
    setSearchParams(data !== '' ? { name: data } : {});
  };

  useEffect(() => {
    try {
      async function getAll() {
        const result = await getCharacters();

        setCharacters(result);
      }

      getAll();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    try {
      const filterCharacter = async () => {
        const result = await searchCharacters(searchQuery);

        if (result.length > 0) {
          setSearchCharacters(result);
        }
      };

      filterCharacter();
    } catch (error) {
      console.log(error);
    }
  }, [searchQuery]);

  return (
    <Box>
      <CharacterContainer>
        <HeaderImage />
        <SearchFiels onSubmit={getQuery} />
        {searchCharactes.length > 0 ? (
          <CharacterGallary items={searchCharactes} />
        ) : (
          <CharacterGallary items={characters} />
        )}
        <CharacterGallary items={characters} />
      </CharacterContainer>
    </Box>
  );
};

export default Сharacter;
