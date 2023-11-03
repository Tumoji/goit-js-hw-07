import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const li = document.createElement("li");
  li.classList.add(".gallery__item");
  li.innerHTML = ` <a class="gallery__link" href="${image.original}">
    <img class ="gallery__image" src="${image.preview}" alt"=${image.description}" title="${image.description}"/>
    </a>`;
  galleryEl.append(li);
});

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});

