import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const li = document.createElement("li");
  li.classList.add(".gallery__item");
  li.innerHTML = ` <a class="gallery__link" href="${image.original}">
    <img class ="gallery__image" src="${image.preview}" alt"=${image.description} data-source="${image.original}"/>
    </a>`;
  galleryEl.append(li);
});

let lightbox;

galleryEl.addEventListener("click", openImageInLigthox);

document.addEventListener("keydown", handleKeyDown);

function openImageInLigthox(e) {
  const clickedOn = e.target;

  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  lightbox = basicLightbox.create(
    `<img src="${clickedOn.dataset.source}" width="1400" height="900"/>`
  );
  lightbox.show();
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    lightbox.close();
  }
}
