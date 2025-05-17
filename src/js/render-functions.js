import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('#loaderBox');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
  .map(
    image => `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="image-details">
        <div class="info-titles">
          <span>Likes</span>
          <span>Views</span>
          <span>Comments</span>
          <span>Downloads</span>
        </div>
        <div class="info-values">
          <span>${image.likes}</span>
          <span>${image.views}</span>
          <span>${image.comments}</span>
          <span>${image.downloads}</span>
        </div>
      </div>
    </li>
  `
  )
  .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}