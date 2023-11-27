import SimpleLightbox from 'simplelightbox';
import { fetchImages } from './services';
import { createCardTemplate } from './templates/card';

import 'normalize.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { notifyIsTotal } from './notification';

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
  observe.unobserve(refs.guard);

  const formData = new FormData(refs.form);

  const dataForm = {};

  formData.forEach((value, key) => {
    dataForm[key] = value;
  });

  refs.root.innerHTML = '';
  searchQuery = dataForm.searchQuery.trim();
  page = 1;

  if (!searchQuery) return;

  const data = await fetchImages(searchQuery, page, true);

  if (!data) return;

  const { hits, totalHits } = data;

  totalLength = hits.length;

  refs.root.insertAdjacentHTML('beforeend', createCardTemplate(hits));

  modal = new SimpleLightbox('.gallery a', {
    overlay: true,
    spinner: true,
    overlayOpacity: 0.8,
  });

  if (totalHits === totalLength) {
    observe.disconnect();
    notifyIsTotal();
  } else {
    observe.observe(refs.guard);
  }
});

const options = {
  root: null,
  rootMargin: '100px',
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
        notifyIsTotal();
      }
    }
  });
}
