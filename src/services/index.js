import axios from 'axios';
import { notifyError, notifySuccess } from '../notification';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '19816759-3cdd4fc89a2e26e9cfb0ce197';

export const fetchImages = async (value, page = 1, isSubmit) => {
  const params = new URLSearchParams({
    q: value,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  });

  try {
    const { data } = await axios.get(`?${params}`);

    if (!data.hits.length) throw new Error();

    isSubmit && notifySuccess(data.totalHits);

    return data;
  } catch (error) {
    notifyError();
  }
};
