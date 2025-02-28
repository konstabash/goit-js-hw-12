import axios from 'axios';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";   

        
let queryTracker = '';
const loadingIcon = document.querySelector('#loading');

export async function getImages(userInput, page) {
    try {
        loadingIcon.classList.add('loader');
        const params = {
            key: '48946065-1d1345988ab2399d45be7b206',
            q: userInput,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 40,
};        
        const output = await axios.get('https://pixabay.com/api/', { params });
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
        return output.data;

    }
  catch (err) {
        
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
    }
    
};