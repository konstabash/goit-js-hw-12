import "izitoast/dist/css/iziToast.min.css";
import getImages from './js/pixabay-api';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { imageTemplate, imagesTemplate } from './js/render-functions';

const refs = {
    form: document.querySelector(".search-form"),
    formInput: document.querySelector('.input-field'),
    gallery: document.querySelector('.gallery')
}
const { form, formInput, gallery } = refs;
let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formInput.value.trim() === '') {
        formInput.value = '';
        return;
    };
    getImages(formInput.value.trim())
        .then(img => {
            gallery.innerHTML = imagesTemplate(img);
            lightbox.refresh();
        });
});

gallery.addEventListener('click', e => {
    e.preventDefault();
        if (e.target === gallery) return;

    lightbox.open(e.target);

});