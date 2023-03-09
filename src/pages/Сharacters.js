import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { useSelector } from 'react-redux';

import SearchField from 'components/SearchField/SearchField';
import CharacterContainer from 'components/CharacterContainer/CharacterContainer';
import CharacterGallary from 'components/CharacterGallary/CharacterGallary';
import HeaderImage from 'components/HeaderImage/HeaderImage';

import { getCharacters } from 'apiService/apiService';
import ToTopButton from 'components/ToTopButton/ToTopButton';
import { selectIsLoggedIn } from 'redux/selectors';

const Сharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibe, setVisible] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);

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

  const filtredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    try {
      async function getAllCharacters() {
        const result = await getCharacters();
        const sortResult = [...result].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCharacters(sortResult);
      }

      getAllCharacters();

      scroll.scrollToTop();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } catch (error) {
      console.log(error);
    }
  }, [scroll]);

  return (
    <div>
      {isLoggedIn && (
        <CharacterContainer>
          <HeaderImage />
          <SearchField value={searchQuery} onChange={getQuery} />
          <CharacterGallary items={filtredCharacters} />
          {visibe && <ToTopButton onClick={toTop} />}
        </CharacterContainer>
      )}
    </div>
  );
};

export default Сharacter;
