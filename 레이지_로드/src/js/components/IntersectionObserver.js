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
    lazyLoad(entries, observer) {
        entries.forEach((entry)=>{
            const lazyImage = entry.target;
            if (entry.isIntersecting) {
                lazyImage.src = lazyImage.dataset.src;
                observer.unobserve(lazyImage);
            }
        });
    }
    connectedCallback() {
        this.appendChild(this.wrapper);
        this.initImages();
        document.addEventListener("DOMContentLoaded", ()=>{
            const imageObserver = new IntersectionObserver(this.lazyLoad);
            const lazyImages = this.wrapper.childNodes;
            lazyImages.forEach((img)=>imageObserver.observe(img));
        });
    }
};
const __createCustomElement__ = ()=>{
    customElements.define("custom-images", CustomImagesIntersectionObserver);
};
__createCustomElement__();
