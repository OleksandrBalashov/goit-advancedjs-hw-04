import SimpleLightbox from 'simplelightbox';
import { fetchImages } from './services';
import { createCardTemplate } from './templates/card';

import 'normalize.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('#search-form'),
  root: document.querySelector('.gallery'),
  guard: document.querySelector('.guard'),
};

let page = 1;
let searchQuery = '';
let totalLength = 0;
let modal;

refs.form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(refs.form);

  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  refs.root.innerHTML = '';
  searchQuery = data.searchQuery;
  page = 1;

  const { hits, totalHits } = await fetchImages(data.searchQuery, page);

  totalLength = hits.length;

  refs.root.insertAdjacentHTML('beforeend', createCardTemplate(hits));

  modal = new SimpleLightbox('.gallery a', {
    overlay: true,
    spinner: true,
    overlayOpacity: 0.8,
  });

  const { height: cardHeight } =
    refs.root.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });

  if (totalHits === totalLength) {
    observe.disconnect();
  } else {
    observe.observe(refs.guard);
  }
});

const options = {
  root: null,
  rootMargin: '50px',
  threshold: 1.0,
};

const observe = new IntersectionObserver(handleLoadMore, options);

function handleLoadMore(entries) {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      page += 1;

      const { hits, totalHits } = await fetchImages(searchQuery, page);

      totalLength += hits.length;

      refs.root.insertAdjacentHTML('beforeend', createCardTemplate(hits));

      modal.refresh();

      if (totalHits === totalLength) {
        observe.disconnect();
      }
    }
  });
}
