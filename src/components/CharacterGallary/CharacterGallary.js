import CharacterGallaryItem from 'components/CharacterGallaryItem/CharacterGallaryItem';
import { CharacterList } from './CharacterGallary.styled';

const CharacterGallary = ({ items }) => {
  const sortItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <CharacterList>
        {sortItems.map(({ id, name, image, species }) => (
          <CharacterGallaryItem
            key={id}
            name={name}
            img={image}
            spec={species}
          />
        ))}
      </CharacterList>
    </>
  );
};

export default CharacterGallary;
