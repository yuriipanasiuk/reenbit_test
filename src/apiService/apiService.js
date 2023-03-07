import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  const { data } = await axios('/character', {
    params: {
      name: 'Rick',
    },
  });

  return data.results;
};

export const getCharacterById = async id => {
  const { data } = await axios(`/character/${id}`);

  return data;
};

export const searchCharacters = async query => {
  try {
    const { data } = await axios(`/character`, {
      params: {
        name: query,
      },
    });

    return data.results;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return;
    }
  }
};
