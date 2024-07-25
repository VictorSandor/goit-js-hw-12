import axios from 'axios';

export const searchParams = {
  key: '45016563-185536351b7165172c03d7cff',
  q: '',
  imageType: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export async function getPictures() {
  const response = await axios.get('https://pixabay.com/api/', {
    params: searchParams,
  });
  return response.data;
}
