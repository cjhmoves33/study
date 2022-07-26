import LazyImageBuilder from "../common/lazyImageBuilder.js";
export default class CustomImagesIntersectionObserver extends HTMLElement {
    wrapper = document.createElement("div");
    constructor(){
        super();
    }
    get range() {
        return Number(this.getAttribute("range"));
    }
    get width() {
        return this.getAttribute("image-size");
    }
    initImages() {
        new LazyImageBuilder(this.wrapper).range(this.range).width(this.width).height("600px").src("https://ik.imagekit.io/demo/default-image.jpg").build();
    }
    connectedCallback() {
        this.appendChild(this.wrapper);
        this.initImages();
    }
};
const __createCustomElement__ = ()=>{
    customElements.define("custom-images", CustomImagesIntersectionObserver);
};
__createCustomElement__();
