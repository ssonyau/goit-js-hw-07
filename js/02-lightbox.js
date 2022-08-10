import { galleryItems } from './gallery-items.js';
// Change code below this line
const options = {
    captionsData: 'alt',
    captionDelay: 250
}
const gallery = document.querySelector('.gallery');
const pictures = [];
galleryItems.forEach(item => {
    const listItem = document.createElement('li');

    const link = document.createElement('a');

    link.classList.add('gallery__item');
    link.href = item.original;
    

    const picture = document.createElement('img');
    picture.src = item.preview;
    picture.alt = item.description;
    picture.classList.add('gallery__image');
    picture.width = '340';
    picture.dataset.sourse = item.original;

    link.append(picture);

    listItem.append(link);
    pictures.push(listItem);
})
gallery.append(...pictures);

const box = new SimpleLightbox('.gallery a', options);