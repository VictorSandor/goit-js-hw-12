import axios from 'axios';

export async function getImagesByUserSearch({ searchText, page, perPage }) {
  const response = (
    await axios.get('https://pixabay.com/api/', {
      params: {
        key: '45016563-185536351b7165172c03d7cff',
        page: page,
        per_page: perPage,
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
  ).data;
  return response;
}
