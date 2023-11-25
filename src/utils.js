const loader = document.querySelector('.loader');

export function setIsFetching(value) {
  loader.style.display = value ? 'block' : 'none';
}
