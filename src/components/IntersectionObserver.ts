export default class CustomImagesIntersectionObserver extends HTMLElement {
  private wrapper = document.createElement("div");

  constructor() {
    super();
  }

  private initImages() {
    const imageSize = this.getAttribute("image-size") as string;
    const length = Number(this.getAttribute("range"));

    Array.from({ length }, () => {
      const lazyImage = document.createElement("img");

      lazyImage.classList.add("lazy");
      // lazyImage.dataset.src = "https://ik.imagekit.io/demo/default-image.jpg";
      lazyImage.src = "https://ik.imagekit.io/demo/default-image.jpg";
      lazyImage.style.width = imageSize;
      lazyImage.style.height = "600px";

      return lazyImage;
    }).forEach(img => {
      this.wrapper.appendChild(img);
    });
  }

  // life-cycle
  connectedCallback() {
    this.appendChild(this.wrapper);
    this.initImages();
  }
}

const __createCustomElement__ = () => {
  customElements.define("custom-images", CustomImagesIntersectionObserver);
};

__createCustomElement__();
