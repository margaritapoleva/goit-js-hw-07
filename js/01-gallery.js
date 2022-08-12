import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");

const imagesList = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join("");

galleryContainer.insertAdjacentHTML('beforeend', imagesList);

galleryContainer.addEventListener("click", handleImgClick)

function handleImgClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
  return
  }
  
  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`)

  instance.show();

  document.addEventListener("keydown",onModalOpen)
  
  function onModalOpen(event) {
    if (event.code !== "Escape") {
      return
    }
    instance.close()
    document.removeEventListener("keydown", onModalOpen)

}
}