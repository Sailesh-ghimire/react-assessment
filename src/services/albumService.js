import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log('service url', BASE_URL);

export const albumsService = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/albums`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch albums');
  }
};

export const photosService = async albumID => {
  try {
    const response = await axios.get(`${BASE_URL}/albums/${albumID}/photos`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch photos.');
  }
};
