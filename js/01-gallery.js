import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

const res = galleryItems.map(el =>
  `
  <li li class="gallery__item" >
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>
  `
)
list.insertAdjacentHTML('beforeend', res.join(''))



const getImg = (e) => {
   e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  
  const instance = basicLightbox.create(`
    <div class="modal">
       <img 
        class="gallery__image"
      src="${e.target.dataset.source}"
      alt="${e.target.alt}"
      />
    </div>
`)
  instance.show()

  const onBtn = (e) => {
   if (e.key === 'Escape')
      instance.close();
      window.removeEventListener('keydown', onBtn);
}

  window.addEventListener('keydown', onBtn)
}

list.addEventListener('click', getImg)