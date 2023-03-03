const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryRef = document.querySelector('ul.gallery');
// const imageRef = images
//   .map(image => {
//     const imgRef = document.createElement('img');
//     imgRef.classList.add('gallery-flex');
//     imgRef.src = image.url;
//     imgRef.alt = image.alt;
//     // <li class='gallery-flex'>
//     //   <img src='${image.url}' alt='${image.alt}' />
//     // </li>
//     return imgRef;
//   });
//     // .join('');
//      console.log(imageRef);
// // gallery.classList.add('gallery-flex');
// galleryRef.insertAdjacentHTML('beforeend', imageRef);
const galleryRef = document.querySelector('.gallery');

const gallerysRef = images.map(image => {

  return `<li class = 'gallery-flex'>
          <img class = 'gallery-img' src = '${image.url}' alt = '${image.alt}' />
          </li>`;
})
  .join('');

galleryRef.insertAdjacentHTML('beforeend', gallerysRef);