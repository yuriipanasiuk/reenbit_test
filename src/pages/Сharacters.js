import { useEffect, useState } from 'react';

import Box from 'components/Box/Box';
import SearchFiels from 'components/SearchField/SearchField';
import CharacterContainer from 'components/CharacterContainer/CharacterContainer';
import CharacterGallary from 'components/CharacterGallary/CharacterGallary';
import HeaderImage from 'components/HeaderImage/HeaderImage';

import { getCharacters } from 'apiService/apiService';

const Сharacter = () => {
  const [characters, setCharacters] = useState([]);

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

  return (
    <Box>
      <CharacterContainer>
        <HeaderImage />
        <SearchFiels />
        <CharacterGallary items={characters} />
      </CharacterContainer>
    </Box>
  );
};

export default Сharacter;
