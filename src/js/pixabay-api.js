import axios from 'axios';

const API_KEY = '45016563-185536351b7165172c03d7cff';
const BASE_URL = 'https://pixabay.com/api/';

export default async function createHttpRequest(options) {
  try {
    const response = await axios.get(BASE_URL, options);
    return response.data;
  } catch (error) {
    throw error;
  }
}
