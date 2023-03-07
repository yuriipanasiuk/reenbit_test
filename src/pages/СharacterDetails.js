import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { getCharacterById } from 'apiService/apiService';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import BackLink from 'components/BackLink/BackLink';
import CharacterDetailContainer from 'components/CharacterDetailContainer/CharacterDetailContainer';

const СharacterDetails = () => {
  const [chracterDetails, setChracterDetails] = useState({});

  const location = useLocation();
  const { characterId } = useParams();

  useEffect(() => {
    try {
      async function getCharacter() {
        const result = await getCharacterById(characterId);

        setChracterDetails(result);
      }
      getCharacter();
    } catch (error) {
      console.log(error);
    }
  }, [characterId]);

  const backLink = location.state?.from ?? `/characters`;

  return (
    <CharacterDetailContainer>
      <BackLink link={backLink} />
      <CharacterCard item={chracterDetails} />
    </CharacterDetailContainer>
  );
};

export default СharacterDetails;
