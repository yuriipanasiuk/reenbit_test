import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as Scroll from 'react-scroll';

import SearchFiels from 'components/SearchField/SearchField';
import CharacterContainer from 'components/CharacterContainer/CharacterContainer';
import CharacterGallary from 'components/CharacterGallary/CharacterGallary';
import HeaderImage from 'components/HeaderImage/HeaderImage';

import { getCharacters, searchCharacters } from 'apiService/apiService';
import ToTopButton from 'components/ToTopButton/ToTopButton';

const Сharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [searchCharactes, setSearchCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibe, setVisible] = useState(false);

  const searchQuery = searchParams.get('name') ?? '';

  const scroll = Scroll.animateScroll;

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= 50) {
      setVisible(true);
    }
    if (position <= 50) {
      setVisible(false);
    }
  };

  const getQuery = data => {
    const nextParams = data !== '' ? { name: data } : {};
    setSearchParams(nextParams);
  };

  const toTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    try {
      async function getAll() {
        const result = await getCharacters();

        setCharacters(result);
      }

      getAll();

      scroll.scrollToTop();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } catch (error) {
      console.log(error);
    }
  }, [scroll]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    try {
      const filterCharacter = async () => {
        const result = await searchCharacters(searchQuery);

        if (!result) {
          return;
        }

        if (result.length > 0) {
          setSearchCharacters(result);
        }
      };

      filterCharacter();

      scroll.scrollToTop();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } catch (error) {
      console.log('error');
    }
  }, [scroll, searchQuery]);

  return (
    <div>
      <CharacterContainer>
        <HeaderImage />
        <SearchFiels value={searchQuery} onChange={getQuery} />
        {searchCharactes.length > 0 ? (
          <CharacterGallary items={searchCharactes} />
        ) : (
          <CharacterGallary items={characters} />
        )}

        {visibe && <ToTopButton onClick={toTop} />}
      </CharacterContainer>
    </div>
  );
};

export default Сharacter;

//TODO: add debounce on search input
