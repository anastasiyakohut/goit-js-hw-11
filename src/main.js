import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchPhotos } from "./js/pixabay-api.js";
import { createGalleryMarkup } from "./js/render-functions.js";

const galleryEl = document.querySelector('.gallery');
const searchField = document.querySelector('.search-field');
const searchForm = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');

function onSearchFormSubmit(event) {
    event.preventDefault();

    const searchQuery = searchField.value.trim();

    if (searchQuery === '') {
        galleryEl.innerHTML = '';
        event.target.reset();
        iziToast.error({
            title: 'Error',
            message: 'Illegal operation',
            position: 'topRight',
            color: '#EF4040',
        });
        return;
    }
    galleryEl.innerHTML = '';
    loaderEl.classList.remove('is-hidden');

    searchPhotos(searchQuery)
        .then(imagesData => {
            loaderEl.classList.add('is-hidden');

            if (imagesData.totalHits === 0) {
                iziToast.show({
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    color: '#EF4040',
                });
                return;
            }
            galleryEl.innerHTML = createGalleryMarkup(imagesData.hits);

            const lightbox = new SimpleLightbox('.gallery a');
            lightbox.refresh();
        })
        .catch(error => console.log(error))
        .finally(() => {
            event.target.reset();
            loaderEl.classList.add('is-hidden');
        });
}

searchForm.addEventListener('submit', onSearchFormSubmit);
