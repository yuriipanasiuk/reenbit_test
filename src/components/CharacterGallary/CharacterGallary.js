import { useLocation } from 'react-router-dom';
import {
  CharacterList,
  ChatacterItem,
  CharacterImg,
  TitleWraper,
  Name,
  Spec,
  Link,
} from './CharacterGallary.styled';

const CharacterGallary = ({ items }) => {
  const location = useLocation();

  // const sortItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <CharacterList>
        {items.map(({ id, name, image, species }) => (
          <ChatacterItem key={id}>
            <Link to={`/characters/${id}`} state={{ from: location }}>
              <CharacterImg src={image} alt={name} />
              <TitleWraper>
                <Name>{name}</Name>
                <Spec>{species}</Spec>
              </TitleWraper>
            </Link>
          </ChatacterItem>
        ))}
      </CharacterList>
    </>
  );
};

export default CharacterGallary;
