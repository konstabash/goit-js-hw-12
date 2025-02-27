export function imageTemplate(image) {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
    return `
        <a class="gallery-item" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" data-source="${largeImageURL}" />
            <div class="image-features">
                <div class="features-text-field">
                    <p class="image-feature-text">Likes</p>
                    <p class="image-feature-text">${likes}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Views</p>
                    <p class="image-feature-text">${views}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Comments</p>
                    <p class="image-feature-text">${comments}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Downloads</p>
                    <p class="image-feature-text">${downloads}</p>
                </div>
            </div>
        </a>
    `;
}

export function imagesTemplate(images) {
    return images.map(imageTemplate).join('');
};