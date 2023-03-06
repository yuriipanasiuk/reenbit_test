import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  const { data } = await axios('/character');

  return data.results;
};
