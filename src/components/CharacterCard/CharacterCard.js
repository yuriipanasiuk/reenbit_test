import {
  Image,
  Name,
  Title,
  InformTitle,
  Item,
  InformationWraper,
  Layout,
} from './CharacterCard.styled';

const CharacterCard = ({ item }) => {
  const { image, name, gender, status, species, origin, type, id } = item;

  return (
    <Layout>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      <Title>Informations</Title>
      <InformationWraper>
        <ul key={id}>
          <Item>
            <InformTitle>Gender</InformTitle>
            {gender}
          </Item>
          <Item>
            <InformTitle>Status</InformTitle>
            {status}
          </Item>
          <Item>
            <InformTitle>Specie</InformTitle>
            {species}
          </Item>
          <Item>
            <InformTitle>Origin</InformTitle>
            {origin ? origin.name : 'Unkown'}
          </Item>
          <Item>
            <InformTitle>Type</InformTitle>
            {type ? type : 'Unkown'}
          </Item>
        </ul>
      </InformationWraper>
    </Layout>
  );
};

export default CharacterCard;
