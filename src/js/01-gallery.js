// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallerySection = document.querySelector('.gallery');
// console.log(gallerySection);

const galleryItemsEl = galleryItems
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
  </a>
</li>`
  )
  .join('');
// console.log(galleryItemsEl);

gallerySection.insertAdjacentHTML('beforeend', galleryItemsEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
