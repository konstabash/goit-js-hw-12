import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {getImages} from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

const refs = {
    form: document.querySelector(".search-form"),
    formInput: document.querySelector('.input-field'),
    gallery: document.querySelector('.gallery'),
    loadButton: document.querySelector('.load-btn'),
}
const { form, formInput, gallery, loadButton } = refs;

const params = {
    query: '',
    page: 1,
    total: 100,
    perPage: 40,
    maxPage: 10,
};

let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (formInput.value.trim() === '') {
        formInput.value = '';
        return;
    };
    document.querySelector('.gallery').innerHTML = '';
    params.page = 1;
    params.query = formInput.value.trim();
    const images = await getImages(params.query, params.page);
    params.total = images.totalHits;
    params.maxPage = Math.ceil(params.total / params.perPage);
    const markup = imagesTemplate(images.hits);
    gallery.innerHTML = markup;
    formInput.value = '';
    lightbox.refresh();
    checkLoadStatus();
});

loadButton.addEventListener('click', async (e) => {
    loadMore();
});

gallery.addEventListener('click', e => {
    e.preventDefault();
        if (e.target === gallery) return;

    lightbox.open(e.target);

});

async function loadMore() {
    params.page += 1
    const result = await getImages(params.query, params.page);
    const markup = imagesTemplate(result.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    scrollPage();
    lightbox.refresh();
    checkLoadStatus();
}

function checkLoadStatus() {
    if (params.page >= params.maxPage) {
        loadButton.classList.add('visually-hidden');
        iziToast.info({
    title: '',
    message: `We're sorry, but you've reached the end of search results.`,
    position: 'topRight',
    maxWidth: '432px',
    messageSize: '16',
        });
    } else {
        loadButton.classList.remove('visually-hidden');
    }
}

function scrollPage() {
    const info = gallery.firstElementChild.getBoundingClientRect();
    const height = info.height;
    scrollBy({
        top: height*2,
        behavior: 'smooth',
    });
}