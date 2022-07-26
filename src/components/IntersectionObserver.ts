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

  // ** Life Cycle **
  connectedCallback() {
    this.appendChild(this.wrapper);
    this.initImages();
  }
}

const __createCustomElement__ = () => {
  customElements.define("custom-images", CustomImagesIntersectionObserver);
};

__createCustomElement__();
