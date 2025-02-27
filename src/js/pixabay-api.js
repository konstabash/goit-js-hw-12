import axios from 'axios';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";   

export default function getImages(userInput) {
    const loadingIcon = document.querySelector('#loading');
    loadingIcon.classList.add('loader');
    document.querySelector('.gallery').innerHTML = '';
    return axios.get('https://pixabay.com/api/', {
        params: {
            key: '48946065-1d1345988ab2399d45be7b206',
            q: userInput,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    }).then(output => {
        if (output.data.hits.length === 0) {
iziToast.error({
    title: '',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    maxWidth: '432px',
    theme: 'dark',
    messageSize: '16',
    backgroundColor: '#ef4040',
    messageColor: '#fafafb',
    iconColor: '#fafafb',
});
        };
        loadingIcon.classList.remove('loader');
        return output.data.hits;
})
        .catch(err => {
iziToast.error({
    title: 'Unexpected Error',
    message: `${err}`,
    position: 'topRight',
    maxWidth: '432px',
    theme: 'dark',
    messageSize: '16',
    backgroundColor: '#ef4040',
    messageColor: '#fafafb',
    iconColor: '#fafafb',
});
            loadingIcon.classList.remove('loader');
        });
};