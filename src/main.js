import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.querySelector('.search-input');

const errorContainer = document.getElementById('errorBox'); // div для помилок
const loadingContainer = document.getElementById('loaderBox'); // div для лоадера

form.addEventListener('submit', async event => {
  event.preventDefault();

  hideError(); // ховаємо попередню помилку

  const query = input.value.trim();
  if (!query) {
    showError('Please enter a search term.');
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      showError('Sorry, there are no images matching your search query. Please, try again!');
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
  }
});

function showError(message) {
  errorContainer.style.display = 'block';
  errorContainer.innerHTML = `
    <div class="error-content">
      <svg class="icon-error" width="24" height="24">
        <use href="./img/symbol-defs.svg#icon-Group"></use>
      </svg>
      <span>${message}</span>
      <button class="error-close" aria-label="Close error message">
        <svg class="icon-close" width="16" height="16">
          <use href="./img/symbol-defs.svg#icon-bi_x-lg"></use>
        </svg>
      </button>
    </div>
  `;

  const closeBtn = errorContainer.querySelector('.error-close');
  closeBtn.addEventListener('click', () => {
    hideError();
  });
}

function hideError() {
  errorContainer.style.display = 'none';
  errorContainer.innerHTML = '';
}