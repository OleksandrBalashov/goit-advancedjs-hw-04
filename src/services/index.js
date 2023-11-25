import axios from 'axios';
import { notifyError, notifySuccess } from '../notification';
import { setIsFetching } from '../utils';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '19816759-3cdd4fc89a2e26e9cfb0ce197';

export const fetchImages = async (value, page = 1) => {
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
    setIsFetching(true);
    const { data } = await axios.get(`?${params}`);

    if (!data.hits.length) throw new Error();

    notifySuccess(data.totalHits);

    return data;
  } catch (error) {
    notifyError();
  } finally {
    setIsFetching(false);
  }
};
