import LazyImageBuilder from "@/common/lazyImageBuilder.js";

export default class CustomImagesIntersectionObserver extends HTMLElement {
  private wrapper = document.createElement("div");

  constructor() {
    super();
  }

  // ** Getters **
  private get range() {
    return Number(this.getAttribute("range"));
  }

  private get width() {
    return this.getAttribute("image-size") as string;
  }

  // ** Actions **
  private initImages() {
    new LazyImageBuilder(this.wrapper)
      .range(this.range)
      .width(this.width)
      .height("600px")
      .src("https://ik.imagekit.io/demo/default-image.jpg")
      .build();
  }

  private lazyLoad(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach(entry => {
      const lazyImage = entry.target as HTMLImageElement;

      if (entry.isIntersecting) {
        lazyImage.src = lazyImage.dataset.src as string;
        observer.unobserve(lazyImage);
      }
    });
  }

  // ** Life Cycle **
  connectedCallback() {
    this.appendChild(this.wrapper);
    this.initImages();

    document.addEventListener("DOMContentLoaded", () => {
      // https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
      const imageObserver = new IntersectionObserver(this.lazyLoad);

      const lazyImages = this.wrapper.childNodes;
      lazyImages.forEach(img => imageObserver.observe(img as HTMLImageElement));
    });
  }
}

const __createCustomElement__ = () => {
  customElements.define("custom-images", CustomImagesIntersectionObserver);
};

__createCustomElement__();
