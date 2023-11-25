import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const notifyError = () => {
  iziToast.show({
    title: 'Sorry!',
    message:
      'There are no images matching your search query. Please try again.',
    color: 'red',
    position: 'topRight',
    maxWidth: 400,
  });
};

export const notifySuccess = value => {
  iziToast.show({
    title: 'Hoorey!',
    message: `We're found ${value} images`,
    color: 'green',
    position: 'topRight',
  });
};
