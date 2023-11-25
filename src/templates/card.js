export const createCardTemplate = images =>
  images
    .map(
      ({
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
        type,
      }) => `
      <li class="item">
        <a href="${largeImageURL}" src="${webformatURL}" class="link">
          <img src="${webformatURL}" alt="${type}" class="image" />
          <div class="info">
            <p class="info-item">
              <b>Likes <span>${likes}</span></b>
            </p>
            <p class="info-item">
              <b>Views <span>${views}</span></b>
            </p>
            <p class="info-item">
              <b>Comments <span>${comments}</span></b>
            </p>
            <p class="info-item">
              <b>Downloads <span>${downloads}</span></b>
            </p>
          </div>
        </a>
      </li>
    `
    )
    .join('');
