import {
  ChatacterItem,
  CharacterImg,
  TextWraper,
  Name,
  Spec,
} from './CharacterGallaryItem.styled';

const CharacterGallaryItem = ({ name, img, spec }) => {
  return (
    <ChatacterItem>
      <CharacterImg src={img} alt={name} />
      <TextWraper>
        <Name>{name}</Name>
        <Spec>{spec}</Spec>
      </TextWraper>
    </ChatacterItem>
  );
};

export default CharacterGallaryItem;
