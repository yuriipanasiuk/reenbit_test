import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  const { data } = await axios('/character');

  return data.results;
};

export const getCharacterById = async id => {
  const { data } = await axios(`/character/${id}`);

  return data;
};

export const searchCharacters = async query => {
  const { data } = await axios(`/character`, {
    params: {
      name: query,
    },
  });

  return data.results;
};
