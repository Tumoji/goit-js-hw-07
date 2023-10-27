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

galleryEl.addEventListener("click", openImageInLigthox);

function openImageInLigthox(e) {
  const clickedOn = e.target;

  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  basicLightbox
    .create(
      `<img src="${clickedOn.dataset.source}" width="1400" heigth= "900"/>`
    )
    .show();
}

