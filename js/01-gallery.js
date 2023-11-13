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


const onBtn = (e) => {
  if (e.key === 'Escape')
    instance.close();
}

const options = {
  onShow: (instance) => {
    window.addEventListener('keydown', onBtn)
  },

  onClose: (instance) => {
    window.removeEventListener('keydown', onBtn);
  }
}

const instance = basicLightbox.create(`
    <div class="modal">
       <img 
        class="gallery__image"
      />
    </div>
`, options)

const getImg = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const img = instance.element().querySelector('.gallery__image');

  img.src = `${e.target.dataset.source}`
  img.alt = `${e.target.alt}`

  instance.show()
}

list.addEventListener('click', getImg)