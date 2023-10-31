import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const list = document.querySelector('.gallery');

list.style.listStyle = 'none';

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
      `
    )
    .join('');
  // console.log(markup);
  return markup;
}

list.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// console.log(list);
